const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector(".navmenu");
const logoimg = document.querySelector(".logo-img");
const menuLinks = document.querySelector(".navmenu__items");

toggle.addEventListener("click", function toggleMenu() {
  console.log("Clicked");
  menu.classList.toggle("toggleMenu");
  logoimg.classList.toggle("toggleImg");
});

menuLinks.addEventListener("click", function toggleMenu() {
  console.log("Clicked");
  menu.classList.toggle("toggleMenu");
  logoimg.classList.toggle("toggleImg");
});
