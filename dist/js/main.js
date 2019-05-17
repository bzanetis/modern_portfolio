// Select DOM Items
const menuBtn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
//since more than one nav item, need to use qSA
const navItem = document.querySelectorAll(".nav-items");

// Set Initial State of Menu
let showMenu = false;

// Need an event listener
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Add close class to menuBtn, and show class to rest
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // With navItems, since more than 1, need to loop through
    navItems.forEach(item => item.classList.add("show"));

    // Set the menu state
    showMenu = true;
  } else {
    // Want to do opposite of above for if the menu is shown
  }
}
