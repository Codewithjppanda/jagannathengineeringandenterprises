import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Fallback in-memory storage for when MongoDB is not available
let fallbackStatus = {
  status: 'online',
  maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon.',
  lastUpdated: new Date()
};

async function connectToDatabase() {
  if (!uri) {
    throw new Error('MongoDB URI not configured');
  }
  const client = new MongoClient(uri);
  await client.connect();
  return client.db('jagannath_engineering');
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    let useDatabase = true;
    let db, collection;
    
    try {
      db = await connectToDatabase();
      collection = db.collection('site_settings');
    } catch (dbError) {
      console.warn('Database connection failed, using fallback storage:', dbError.message);
      useDatabase = false;
    }

    if (req.method === 'GET') {
      let settings;
      
      if (useDatabase) {
        // Get current site status from database
        settings = await collection.findOne({ type: 'site_status' });
        
        if (!settings) {
          // Create default settings if none exist
          settings = {
            type: 'site_status',
            status: 'online',
            maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon.',
            lastUpdated: new Date()
          };
          await collection.insertOne(settings);
        }
      } else {
        // Use fallback storage
        settings = fallbackStatus;
      }
      
      return res.status(200).json({
        status: settings.status,
        maintenanceMessage: settings.maintenanceMessage,
        lastUpdated: settings.lastUpdated
      });
    }

    if (req.method === 'POST' || req.method === 'PUT') {
      const { status, maintenanceMessage, password } = req.body;
      
      // Simple password check (in production, use proper JWT authentication)
      if (password !== 'Jyotiprakashadmin123') {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Update site settings
      const updateData = {
        type: 'site_status',
        lastUpdated: new Date()
      };

      if (status) updateData.status = status;
      if (maintenanceMessage) updateData.maintenanceMessage = maintenanceMessage;

      if (useDatabase) {
        // Update in database
        await collection.updateOne(
          { type: 'site_status' },
          { $set: updateData },
          { upsert: true }
        );
      } else {
        // Update fallback storage
        if (status) fallbackStatus.status = status;
        if (maintenanceMessage) fallbackStatus.maintenanceMessage = maintenanceMessage;
        fallbackStatus.lastUpdated = new Date();
      }

      return res.status(200).json({ 
        success: true, 
        message: 'Settings updated successfully',
        data: updateData
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
