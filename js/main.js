const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector(".navmenu");
const logoimg = document.querySelector(".logo-img");

toggle.addEventListener("click", function toggleMenu() {
  console.log("Clicked");
  menu.classList.toggle("toggleMenu");
  logoimg.classList.toggle("toggleImg");
});
