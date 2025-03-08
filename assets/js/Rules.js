
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const searchInput = document.querySelector('input[type="search"]');
    const searchButton = document.querySelector('.search-button');
    
    // Accordion functionality
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });

    // Function to perform search
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const content = item.querySelector('.accordion-content').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                item.style.display = 'block';
                if (searchTerm.length > 0) {
                    item.classList.add('active');
                }
            } else {
                item.style.display = 'none';
            }

            if (searchTerm.length === 0) {
                item.classList.remove('active');
                item.style.display = 'block';
            }
        });
    }

    // Search on Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Search on button click
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        performSearch();
    });
}); 