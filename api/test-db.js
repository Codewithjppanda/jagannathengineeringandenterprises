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
    
    // Create initial collections with sample data
    const siteStatusCollection = db.collection('site_status');
    const projectsCollection = db.collection('projects');
    const contactsCollection = db.collection('contacts');
    
    // Initialize site status if it doesn't exist
    const existingStatus = await siteStatusCollection.findOne({});
    if (!existingStatus) {
      await siteStatusCollection.insertOne({
        maintenanceMode: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    
    // Add sample project if collection is empty
    const projectCount = await projectsCollection.countDocuments();
    if (projectCount === 0) {
      await projectsCollection.insertOne({
        title: "Sample Steel Project",
        description: "Initial sample project for Jagannath Engineering",
        category: "steel_fabrication",
        status: "completed",
        createdAt: new Date()
      });
    }
    
    // Test document for connection verification
    const testCollection = db.collection('connection_test');
    const testDoc = {
      test: true,
      timestamp: new Date(),
      message: 'Database connection successful!'
    };
    
    const insertResult = await testCollection.insertOne(testDoc);
    const foundDoc = await testCollection.findOne({ _id: insertResult.insertedId });
    await testCollection.deleteOne({ _id: insertResult.insertedId });
    
    // Get database stats
    const collections = await db.listCollections().toArray();
    const stats = await db.stats();
    
    // List all databases
    const adminDb = client.db().admin();
    const databases = await adminDb.listDatabases();
    
    // Get collections from the specified database
    const dbName = new URL(uri).pathname.substring(1) || 'test';
    const db2 = client.db(dbName);
    const collections2 = await db2.listCollections().toArray();
    
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
      databases: databases.databases.map(db => db.name),
      collections2: collections2.map(col => col.name),
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
