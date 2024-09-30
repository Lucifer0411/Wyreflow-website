

    let navLinks = document.querySelectorAll('.nav-link');
    let currentUrl = window.location.href;

    navLinks.forEach(link => {
        // If the link's href matches the current URL, add the active class
        if (currentUrl.includes(link.href)) {
            link.classList.add('nav-active');
            
            // If the link is inside a dropdown, also add active class to the parent dropdown
            let parentDropdown = link.closest('.dropdown-menu');
            if (parentDropdown) {
                parentDropdown.previousElementSibling.classList.add('nav-active');
            }
        }
    });


// document.addEventListener('DOMContentLoaded',()=>{
//      // Get the elements
//      const boxes = document.querySelectorAll('.carousel-item');
//      let currentIndex = 0;
 
//      function toggleActiveClass() {
//          // Remove active class from all boxes
//          boxes.forEach(box => box.classList.remove('active'));
 
//          // Add active class to the current box
//          boxes[currentIndex].classList.add('active');
 
//          // Update the index for the next iteration
//          currentIndex = (currentIndex + 1) % boxes.length;
//      }
 
//      // Run the function every second
//      setInterval(toggleActiveClass, 3000);
// })



