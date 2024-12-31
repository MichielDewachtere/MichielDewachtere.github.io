document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.info-link');
    const infoTexts = document.querySelectorAll('.info-text');

    links.forEach(link => {
        link.addEventListener('click', function () {
            const target = this.getAttribute('data-target');
            const targetText = document.getElementById(target);

            // Hide all content
            infoTexts.forEach(text => {
                text.classList.remove('active');
            });

            // Show the selected content
            targetText.classList.add('active');

            // Add active class to clicked link to keep the underline
            links.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

const scrollContainer = document.querySelector('.projects-wrapper');
const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const projectCard = document.querySelector('.project-card');

// Function to get the width of the project card
const getScrollAmount = () => projectCard ? projectCard.offsetWidth : 0;

// Function to update button visibility based on scroll position
const updateButtonVisibility = () => {
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Hide the left button if scrolled to the start
    if (scrollContainer.scrollLeft <= 0) {
        leftButton.style.display = 'none';
    } else {
        leftButton.style.display = 'block';
    }

    // Hide the right button if scrolled to the end
    if (scrollContainer.scrollLeft >= maxScrollLeft) {
        rightButton.style.display = 'none';
    } else {
        rightButton.style.display = 'block';
    }
};

// Scroll the container based on button click
leftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -getScrollAmount(),
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: getScrollAmount(),
        behavior: 'smooth'
    });
});

// Call the updateButtonVisibility function when the page loads and whenever the scroll position changes
scrollContainer.addEventListener('scroll', updateButtonVisibility);

// Initial call to update button visibility
updateButtonVisibility();

function copyToClipboard() {
    // Create a temporary textarea element to hold the text
    const textArea = document.createElement("textarea");
    textArea.value = "mich2002";  // Replace with your Discord username
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");  // Copy the text to the clipboard
    document.body.removeChild(textArea);

    // Optional: Show an alert or a message to the user
    alert("Discord username \"mich2002\" copied to clipboard!");
}
