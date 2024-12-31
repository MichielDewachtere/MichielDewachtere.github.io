const timelineItems = document.querySelectorAll('.timeline-list li');
const logSections = document.querySelectorAll('.log-content article');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id.replace('content-', '');
            const timelineItem = document.querySelector(`#${id}`);
            if (entry.isIntersecting) {
                timelineItems.forEach((item) => item.classList.remove('active'));
                timelineItem.classList.add('active');
            }
        });
    },
    { threshold: 0.6 }
);

logSections.forEach((section) => observer.observe(section));
