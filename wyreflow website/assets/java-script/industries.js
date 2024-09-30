// loader script
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-box");

    loader.classList.add("loader-box-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(".loader-box")
    })
})


//faq
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.display = 'none';
            }
        });

        // Toggle the clicked item
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


// humbermenu
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

    // Add click event to each toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();

            // Close all dropdowns except the one that was clicked
            const currentDropdown = this.nextElementSibling;
            if (currentDropdown && currentDropdown.classList.contains('dropdown-content')) {
                if (currentDropdown.style.display === 'block') {
                    currentDropdown.style.display = 'none';
                } else {
                    closeAllDropdowns();
                    currentDropdown.style.display = 'block';
                }
            }
        });
    });

    // Toggle navbar on hamburger click
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevents click event from propagating to document click handler
        navbar.classList.toggle('active');
    });

    // Close all dropdowns and mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-content') && !e.target.closest('.hamburger') && !e.target.closest('.navbar')) {
            closeAllDropdowns();
            navbar.classList.remove('active');
        }
    });
});