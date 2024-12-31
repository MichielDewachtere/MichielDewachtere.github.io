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

const scrollAmount = window.innerWidth <= 768 ? window.innerWidth : 410;

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

// Attach click event listeners to buttons
leftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
    });
});

rightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

// Attach scroll event listener to update button visibility
scrollContainer.addEventListener('scroll', updateButtonVisibility);

// Initial update to set the correct visibility on page load
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
