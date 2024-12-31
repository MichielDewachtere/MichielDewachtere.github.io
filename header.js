const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navigation-list");

menuIcon.addEventListener("click", () => {
    // Toggle the 'open' class to show/hide the menu
    navList.classList.toggle("open");

    // Toggle the icon rotation
    menuIcon.classList.toggle("bx-x"); // Switch to the cross icon

    // Optionally, you can add a transition effect for rotating the menu icon
    menuIcon.style.transform = navList.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
});
