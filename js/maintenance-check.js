// Maintenance Mode Check
(function() {
    // Check if site is in maintenance mode
    function checkMaintenanceMode() {
        const siteStatus = localStorage.getItem('siteStatus');
        const currentPage = window.location.pathname;
        
        // Don't redirect if already on maintenance page or admin page
        if (currentPage.includes('maintenance.html') || currentPage.includes('admin.html')) {
            return;
        }
        
        // If site is in maintenance mode, redirect to maintenance page
        if (siteStatus === 'maintenance') {
            window.location.href = './maintenance.html';
        }
    }
    
    // Check immediately when script loads
    checkMaintenanceMode();
    
    // Also check when localStorage changes (in case admin changes status in another tab)
    window.addEventListener('storage', function(e) {
        if (e.key === 'siteStatus') {
            checkMaintenanceMode();
        }
    });
})();
