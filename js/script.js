let mainMenu = document.querySelector(".header--nav-nav");
const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");

openMenu.addEventListener("click", showm);
closeMenu.addEventListener("click", closeM);

function showm() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function closeM() {
  mainMenu.style.top = "-110%";
}
