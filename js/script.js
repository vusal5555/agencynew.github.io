const mainMenu = document.querySelector(".header--nav-nav");
const closeMenu = document.querySelector(".fa-solid.fa-xmark");
const openMenu = document.querySelector(".fa-solid.fa-bars");

openMenu.addEventListener("click", showm);
closeMenu.addEventListener("click", closeM);

function showm() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function closeM() {
  mainMenu.style.top = "-100%";
}
