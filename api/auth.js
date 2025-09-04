import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

async function connectToDatabase() {
  await client.connect();
  return client.db('jagannath_engineering');
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action, username, password, token } = req.body;

    if (action === 'login') {
      // For now, use hardcoded credentials (later move to database)
      const validUsername = 'admin';
      const validPassword = 'Jyotiprakashadmin123';

      if (username === validUsername && password === validPassword) {
        const token = jwt.sign(
          { username: validUsername, role: 'admin' },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        return res.status(200).json({
          success: true,
          token,
          message: 'Login successful'
        });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    }

    if (action === 'verify') {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return res.status(200).json({
          success: true,
          user: decoded,
          message: 'Token valid'
        });
      } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
      }
    }

    return res.status(400).json({ error: 'Invalid action' });
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
