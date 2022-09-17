// const mainMenu = document.querySelector(".header--nav-nav");
// const closeMenu = document.querySelector(".closemenu");
// const openMenu = document.querySelector(".openmenu");

// openMenu.addEventListener("click", showm);
// closeMenu.addEventListener("click", closeM);

// function showm() {
//   mainMenu.style.display = "flex";
//   mainMenu.style.top = 0;
// }

// function closeM() {
//   mainMenu.style.top = "-110%";
// }

// const hamburger = document.getElementById("hamburger");
// const navUl = document.getElementById("navUl");

// hamburger.addEventListener("click", () => {
//   navUl.classList.toggle("show");
//   navUl.style.transition = "0.5s";
// });

// const hamburger = document.querySelector(".openmenu");
// const navMenu = document.querySelector(".header--nav-nav");
// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

const navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.left = "0";
}
function hideMenu() {
  navLinks.style.left = "-300px";
}
