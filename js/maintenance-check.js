// Check if site is in maintenance mode
document.addEventListener('DOMContentLoaded', async function() {
    // Skip maintenance check if we're on admin or maintenance pages
    if (window.location.pathname.includes('admin') || 
        window.location.pathname.includes('maintenance.html')) {
        return;
    }

    try {
        const response = await fetch('/api/site-status');
        const data = await response.json();
        
        // If site is in maintenance mode, redirect to maintenance page
        if (data.status === 'maintenance') {
            // Store the maintenance message for the maintenance page to use
            sessionStorage.setItem('maintenanceMessage', data.maintenanceMessage);
            window.location.href = 'maintenance.html';
        }
    } catch (error) {
        // If API fails, check localStorage as fallback
        const siteStatus = localStorage.getItem('siteStatus');
        if (siteStatus === 'maintenance') {
            window.location.href = 'maintenance.html';
        }
    }
});
