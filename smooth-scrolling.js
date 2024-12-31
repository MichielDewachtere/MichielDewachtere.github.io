document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        behavior: 'smooth',
        block: 'start',
    };

    sections.forEach((section, index) => {
        section.addEventListener('wheel', (event) => {
            if (event.deltaY > 0 && index < sections.length - 1) {
                // Scroll down
                sections[index + 1].scrollIntoView(options);
            } else if (event.deltaY < 0 && index > 0) {
                // Scroll up
                sections[index - 1].scrollIntoView(options);
            }
        });
    });
});