import fs from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';

const statusFilePath = path.join(process.cwd(), 'maintenance-status.json');
const defaultStatus = {
  status: 'online',
  maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon.',
  lastUpdated: new Date().toISOString()
};

// MongoDB connection cache (to reuse across invocations)
let cachedClient = null;
let cachedDb = null;

async function getDb() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'appdb';
  if (!uri) return null; // no Mongo configured

  if (cachedDb) return cachedDb;

  const client = new MongoClient(uri, { maxPoolSize: 5 });
  await client.connect();
  cachedClient = client;
  cachedDb = client.db(dbName);
  return cachedDb;
}

async function readStatus() {
  // Try Mongo first (Vercel)
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection('settings').findOne({ _id: 'global-status' });
      if (doc && doc.value) return doc.value;
    }
  } catch (e) {
    console.warn('Mongo read failed, falling back to file:', e);
  }

  // Fallback to file (local dev)
  try {
    if (fs.existsSync(statusFilePath)) {
      const data = fs.readFileSync(statusFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Error reading status file:', error);
  }
  return defaultStatus;
}

async function writeStatus(status) {
  // Try Mongo first (Vercel)
  try {
    const db = await getDb();
    if (db) {
      await db.collection('settings').updateOne(
        { _id: 'global-status' },
        { $set: { value: status } },
        { upsert: true }
      );
      return true;
    }
  } catch (e) {
    console.error('Mongo write failed, falling back to file:', e);
  }

  // Fallback to file (local dev). On Vercel this is ephemeral and not reliable.
  try {
    fs.writeFileSync(statusFilePath, JSON.stringify(status, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing status file:', error);
    return false;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const status = await readStatus();
    return res.status(200).json(status);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const { status, maintenanceMessage, password } = req.body || {};

    // Simple password check
    if (password !== 'Jyotiprakashadmin123') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Read current status
    const currentStatus = await readStatus();

    // Update status
    const updatedStatus = {
      ...currentStatus,
      lastUpdated: new Date().toISOString()
    };

    if (status) updatedStatus.status = status;
    if (maintenanceMessage) updatedStatus.maintenanceMessage = maintenanceMessage;

    // Write
    const success = await writeStatus(updatedStatus);

    if (success) {
      return res.status(200).json({
        success: true,
        message: 'Settings updated successfully',
        data: updatedStatus
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Failed to persist status'
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
