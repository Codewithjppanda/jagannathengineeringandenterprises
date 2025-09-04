// Check if site is in maintenance mode
let maintenanceCheckInterval;

async function checkMaintenanceStatus() {
    // Skip maintenance check if we're on admin or maintenance pages
    if (window.location.pathname.includes('admin') || 
        window.location.pathname.includes('maintenance.html')) {
        return;
    }

    try {
        const response = await fetch('/api/simple-status');
        const data = await response.json();
        
        // If site is in maintenance mode, redirect to maintenance page
        if (data.status === 'maintenance') {
            // Store the maintenance message for the maintenance page to use
            sessionStorage.setItem('maintenanceMessage', data.maintenanceMessage);
            localStorage.setItem('siteStatus', 'maintenance');
            
            // Clear any existing intervals
            if (maintenanceCheckInterval) {
                clearInterval(maintenanceCheckInterval);
            }
            
            // Immediate redirect
            window.location.replace('/maintenance.html');
            return;
        } else {
            // Clear maintenance status if site is online
            localStorage.removeItem('siteStatus');
        }
    } catch (error) {
        console.warn('Failed to check maintenance status:', error);
        // If API fails, check localStorage as fallback
        const siteStatus = localStorage.getItem('siteStatus');
        if (siteStatus === 'maintenance') {
            window.location.replace('/maintenance.html');
        }
    }
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', async function() {
    await checkMaintenanceStatus();
    
    // Set up periodic checking every 10 seconds to catch real-time changes
    // Skip if we're on admin or maintenance pages
    if (!window.location.pathname.includes('admin') && 
        !window.location.pathname.includes('maintenance.html')) {
        maintenanceCheckInterval = setInterval(checkMaintenanceStatus, 10000);
    }
});

// Check when page becomes visible (user switches back to tab)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        checkMaintenanceStatus();
    }
});

// Check when window gains focus
window.addEventListener('focus', function() {
    checkMaintenanceStatus();
});
