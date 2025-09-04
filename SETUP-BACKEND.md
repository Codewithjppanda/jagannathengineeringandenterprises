# Backend Setup Guide

## 1. MongoDB Atlas Setup (Free)

### Step 1: Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create an account
3. Create a new project (name: "Jagannath Engineering")

### Step 2: Create Database Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select a cloud provider and region (closest to your users)
4. Name your cluster (e.g., "jagannath-cluster")
5. Click "Create Cluster"

### Step 3: Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `admin`
5. Password: Generate a secure password (save it!)
6. Database User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 4: Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://admin:<password>@jagannath-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
5. Replace `<password>` with your actual password

## 2. Vercel Environment Variables

### Step 1: Access Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your "jagannathengineeringandenterprises" project
3. Click on the project name

### Step 2: Add Environment Variables
1. Go to "Settings" tab
2. Click "Environment Variables" in the left sidebar
3. Add these variables:

**MONGODB_URI**
- Name: `MONGODB_URI`
- Value: Your MongoDB connection string from step 1.5
- Environment: Production, Preview, Development

**JWT_SECRET**
- Name: `JWT_SECRET`
- Value: Generate a random string (e.g., `your-super-secret-jwt-key-change-in-production-xyz123`)
- Environment: Production, Preview, Development

### Step 3: Redeploy
1. Go to "Deployments" tab
2. Click "Redeploy" on the latest deployment
3. Wait for deployment to complete

## 3. Testing the Backend

### Access Points:
- **New Admin Panel**: `https://yourdomain.vercel.app/admin-backend`
- **API Status**: `https://yourdomain.vercel.app/api/site-status`

### Login Credentials:
- Username: `admin`
- Password: `Jyotiprakashadmin123`

### Features:
✅ Cross-device maintenance mode synchronization  
✅ Persistent database storage  
✅ JWT authentication  
✅ Real-time updates for all visitors  
✅ Custom maintenance messages  

## 4. Troubleshooting

### Common Issues:

**"Network Error" on login:**
- Check MongoDB connection string is correct
- Verify environment variables are set in Vercel
- Ensure MongoDB network access allows all IPs

**"Unauthorized" errors:**
- Verify JWT_SECRET is set
- Check login credentials are correct

**API not found (404):**
- Ensure latest code is deployed
- Check vercel.json includes API routes

### Debug Steps:
1. Check Vercel function logs in dashboard
2. Test API endpoints directly: `/api/site-status`
3. Verify MongoDB connection in Atlas dashboard

## 5. Security Notes

- Change default password after setup
- Use strong JWT_SECRET in production
- Consider implementing rate limiting
- Monitor MongoDB access logs
- Regularly update dependencies

## 6. Database Schema

The system creates these collections automatically:
- `site_settings`: Stores maintenance status and messages

Example document:
```json
{
  "_id": "...",
  "type": "site_status",
  "status": "online",
  "maintenanceMessage": "We are performing maintenance...",
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```
