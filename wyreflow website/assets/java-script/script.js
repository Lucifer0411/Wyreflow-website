window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-box");

    loader.classList.add("loader-box-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(".loader-box")
    })
})




let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 101.6}%)`;

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

showSlide(currentSlide);


// Second section Js

const videos = document.querySelectorAll('.video');

function pauseAllVideos() {
    videos.forEach((video) => {
        video.pause();
    });
}//to pause all the video

function playVideoOnHover(event) {
    pauseAllVideos();
    event.currentTarget.querySelector('.video').play();
}

document.querySelectorAll('.video-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('mouseover', playVideoOnHover);

    wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelector('.video').pause();
    });
});



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