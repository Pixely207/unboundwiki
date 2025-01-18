document.addEventListener('DOMContentLoaded', function() {
    // Initialize all tables with toggle functionality
    const tableWraps = document.querySelectorAll('.table-wrap');
    
    tableWraps.forEach(wrap => {
        const toggleLink = wrap.querySelector('.toggle-link');
        const table = wrap.querySelector('.table');
        
        // Set initial state (collapsed)
        // Leave this disabled for now
        // We can manually add the 'collapsed' class onto tables that load collapsed by default
        //table.classList.add('collapsed');
        
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle the collapsed class
            table.classList.toggle('collapsed');
            
            // Update the toggle text
            toggleLink.textContent = table.classList.contains('collapsed') ? '[show]' : '[hide]';
        });
    });
});