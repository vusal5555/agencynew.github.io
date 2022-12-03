// const navLinks = document.getElementById("navLinks");
// function showMenu() {
//   navLinks.style.left = "0";
// }
// function hideMenu() {
//   navLinks.style.left = "-300px";
// }

const navLinks = document.getElementById("navLinks");
const openMenu = document.querySelector(".fa-solid.fa-bars");
const closeMenu = document.querySelector(".fa-solid.fa-xmark");

openMenu.addEventListener("click", function () {
  navLinks.classList.add("hidden");
});
closeMenu.addEventListener("click", function () {
  navLinks.classList.remove("hidden");
});

const navbar = document.querySelector(".header--navbar-nav");

navbar.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header--navbar-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("hidden");
  }
});

const header = document.querySelector(".header");

const nav = document.querySelector(".header--navbar");

const navHeight = nav.getBoundingClientRect().height;

const navSticky = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const navObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);

const brandLogo = document.querySelector(".header--navbar--brand");

// brandLogo.addEventListener("click", function (e) {
//   e.preventDefault();
// });
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
