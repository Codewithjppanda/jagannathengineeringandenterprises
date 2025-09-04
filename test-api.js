// Simple test script for API endpoints
const testAPI = async () => {
    const baseURL = 'http://localhost:3000'; // Change to your local dev server
    
    console.log('Testing API endpoints...\n');
    
    try {
        // Test 1: Get site status (should work without auth)
        console.log('1. Testing GET /api/site-status');
        const statusResponse = await fetch(`${baseURL}/api/site-status`);
        const statusData = await statusResponse.json();
        console.log('Status:', statusResponse.status);
        console.log('Data:', statusData);
        console.log('---\n');
        
        // Test 2: Login
        console.log('2. Testing POST /api/auth (login)');
        const loginResponse = await fetch(`${baseURL}/api/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'login',
                username: 'admin',
                password: 'Jyotiprakashadmin123'
            })
        });
        const loginData = await loginResponse.json();
        console.log('Status:', loginResponse.status);
        console.log('Data:', loginData);
        console.log('---\n');
        
        // Test 3: Update site status
        if (loginData.token) {
            console.log('3. Testing POST /api/site-status (update)');
            const updateResponse = await fetch(`${baseURL}/api/site-status`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    status: 'maintenance',
                    password: 'Jyotiprakashadmin123'
                })
            });
            const updateData = await updateResponse.json();
            console.log('Status:', updateResponse.status);
            console.log('Data:', updateData);
        }
        
    } catch (error) {
        console.error('Test failed:', error.message);
    }
};

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    testAPI();
}
