// Simple maintenance status API that works without database
let maintenanceStatus = {
  status: 'online',
  maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon.',
  lastUpdated: new Date().toISOString()
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(maintenanceStatus);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const { status, maintenanceMessage, password } = req.body;
    
    // Simple password check
    if (password !== 'Jyotiprakashadmin123') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Update status
    if (status) maintenanceStatus.status = status;
    if (maintenanceMessage) maintenanceStatus.maintenanceMessage = maintenanceMessage;
    maintenanceStatus.lastUpdated = new Date().toISOString();

    return res.status(200).json({ 
      success: true, 
      message: 'Settings updated successfully',
      data: maintenanceStatus
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
