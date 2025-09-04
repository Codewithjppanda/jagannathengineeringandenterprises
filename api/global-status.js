import fs from 'fs';
import path from 'path';

const statusFilePath = path.join(process.cwd(), 'maintenance-status.json');

// Default status
const defaultStatus = {
  status: 'online',
  maintenanceMessage: 'We are currently performing scheduled maintenance. Please check back soon.',
  lastUpdated: new Date().toISOString()
};

function readStatusFile() {
  try {
    if (fs.existsSync(statusFilePath)) {
      const data = fs.readFileSync(statusFilePath, 'utf8');
      return JSON.parse(data);
    }
    return defaultStatus;
  } catch (error) {
    console.warn('Error reading status file:', error);
    return defaultStatus;
  }
}

function writeStatusFile(status) {
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
    const status = readStatusFile();
    return res.status(200).json(status);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const { status, maintenanceMessage, password } = req.body;
    
    // Simple password check
    if (password !== 'Jyotiprakashadmin123') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Read current status
    const currentStatus = readStatusFile();
    
    // Update status
    const updatedStatus = {
      ...currentStatus,
      lastUpdated: new Date().toISOString()
    };
    
    if (status) updatedStatus.status = status;
    if (maintenanceMessage) updatedStatus.maintenanceMessage = maintenanceMessage;

    // Write to file
    const success = writeStatusFile(updatedStatus);
    
    if (success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Settings updated successfully',
        data: updatedStatus
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to update status file'
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
