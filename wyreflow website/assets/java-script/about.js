
// loader script
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-box");

    loader.classList.add("loader-box-hidden");

    loader.addEventListener("transitionend", () => {
            document.body.removeChild(".loader-box")
    })
})



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





// for section 2
const tabs = document.querySelectorAll(".wyreflow-tab");
const tabContent = document.querySelectorAll("[tab-id]")


function removeActiveTab() {
    tabs.forEach((tab) => {
        tab.classList.remove("active")
    })
}
tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        tabContent.forEach((content) => {
            if (tab.innerHTML.toLocaleLowerCase() === content.getAttribute("tab-id").toLocaleLowerCase()) {
                content.style.display = "block"
                removeActiveTab();
                tab.classList.add("active")
                tabCounterIdx.innerHTML = `0${i + 1}`
            }
            else {
                content.style.display = "none"

            }
        })
    })
})


const leftScrollerBtn = document.querySelector("#left-btn");
const rightScrollerBtn = document.querySelector("#right-btn");
let tabCounterIdx = document.querySelector("#starting-tab-idx");

let counteridx = 0;


function showTab(idx) {
    tabContent.forEach((tab, i) => {
        if (idx === i) {
            tab.style.display = "block"
            tabCounterIdx.innerHTML = `0${idx + 1}`
            removeActiveTab()
            tabs[i].classList.add("active")
        }
        else {
            tab.style.display = "none"
        }
    })
}

leftScrollerBtn.addEventListener("click", () => {
    counteridx -= 1;
    if (counteridx < 0) {
        counteridx = 3;
        showTab(counteridx);
    }
    showTab(counteridx);

})

rightScrollerBtn.addEventListener("click", () => {
    counteridx += 1;
    if (counteridx > 3) {
        counteridx = 0
        showTab(counteridx);
    }
    showTab(counteridx);
})





const texts = document.querySelectorAll(".text-section-container div")
// console.log(texts);
const contents = document.querySelectorAll("[content-id]")
// console.log(contents);

function removeTextColor() {
    texts.forEach((text) => {
        text.classList.remove("active");
    })
}

texts.forEach((text) => {
    text.addEventListener("click", () => {
        contents.forEach((content) => {
            if (text.innerHTML.toLocaleLowerCase() === content.getAttribute("content-id").toLocaleLowerCase()) {
                content.style.display = "block"
                removeTextColor()
                text.classList.add("active")
            }
            else {
                content.style.display = "none"
            }
        })
    })
})


const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")
// console.log(leftArrow, rightArrow);

let currentIndex = 0
function showContent(index) {
    contents.forEach((content, i) => {
        if (i === index) {
            content.style.display = "block"
            removeTextColor();
            texts[i].classList.add("active")
        }
        else {
            content.style.display = "none"
        }
    })
}

leftArrow.addEventListener("click", () => {
    console.log("left");
    currentIndex -= 1;
    if (currentIndex === -1) {
        currentIndex = 2
        showContent(currentIndex);
    }
    else {
        showContent(currentIndex);
    }
})
rightArrow.addEventListener("click", () => {
    console.log("right");
    currentIndex += 1;
    if (currentIndex === 3) {
        currentIndex = 0
        showContent(currentIndex);
    }
    else {
        showContent(currentIndex);
    }
})




// faq

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



