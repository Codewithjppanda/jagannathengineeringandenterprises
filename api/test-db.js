import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Test MongoDB connection
    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('jagannath_engineering');
    
    // Test database operations
    const testCollection = db.collection('connection_test');
    
    // Insert a test document
    const testDoc = {
      test: true,
      timestamp: new Date(),
      message: 'Database connection successful!'
    };
    
    const insertResult = await testCollection.insertOne(testDoc);
    
    // Read the test document back
    const foundDoc = await testCollection.findOne({ _id: insertResult.insertedId });
    
    // Clean up - delete the test document
    await testCollection.deleteOne({ _id: insertResult.insertedId });
    
    // Get database stats
    const collections = await db.listCollections().toArray();
    const stats = await db.stats();
    
    await client.close();
    
    return res.status(200).json({
      success: true,
      message: 'Database connection and operations successful!',
      database: 'jagannath_engineering',
      connectionTest: {
        inserted: !!insertResult.insertedId,
        retrieved: !!foundDoc,
        deleted: true
      },
      databaseInfo: {
        collections: collections.map(col => col.name),
        totalCollections: collections.length,
        dataSize: stats.dataSize,
        storageSize: stats.storageSize
      },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Database test error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Database connection failed',
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
