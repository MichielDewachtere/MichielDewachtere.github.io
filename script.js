let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
}

const projectsAnchor = document.querySelector('a[href="#projects"]');
const projectTargetSection = document.querySelector('#projects');

projectsAnchor.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  projectTargetSection.scrollIntoView({ behavior: 'smooth' });
});

const contactAnchor = document.querySelector('a[href="#contact"]');
const contactTargetSection = document.querySelector('#contact');

contactAnchor.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  contactTargetSection.scrollIntoView({ behavior: 'smooth' });
});

const aboutAnchor = document.querySelector('a[href="#about"]');
const aboutTargetSection = document.querySelector('#about');

aboutAnchor.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  aboutTargetSection.scrollIntoView({ behavior: 'smooth' });
});