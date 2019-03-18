const toggle = document.querySelector(".menu-icon");
const menu = document.querySelector(".navmenu");

toggle.addEventListener("click", function toggleMenu() {
  console.log("Clicked");
  menu.classList.toggle("toggleMenu");
});
