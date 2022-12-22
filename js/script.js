const closeMenu = document.querySelector(".closemenu");
const openMenu = document.querySelector(".openmenu");

const navLinks = document.getElementById("navLinks");

const header = document.querySelector(".header");
const btnAbout = document.querySelector(".btn-trial");

btnAbout.addEventListener("click", function (e) {
  e.preventDefault();
});

//mobile navbar
////////////

openMenu.addEventListener("click", function () {
  navLinks.classList.add("hidden");
});

closeMenu.addEventListener("click", function () {
  navLinks.classList.remove("hidden");
});

//smooth scrolling
/////////

const nav = document.querySelector(".header--nav-nav");

nav.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("header--nav-link")) {
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("hidden");
  }
});

//Opacity on navlinks
//////////////

const navbar = document.querySelector(".header--nav");

navbar.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("header--nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".header--nav")
      .querySelectorAll(".header--nav-link");

    const logo = link.closest(".header--nav").querySelector(".header--logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 0.5;
      }
      logo.style.opacity = 0.5;
    });
  }
});
navbar.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("header--nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".header--nav")
      .querySelectorAll(".header--nav-link");

    const logo = link.closest(".header--nav").querySelector(".header--logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 1;
      }
      logo.style.opacity = 1;
    });
  }
});

//Sticky navbar
///////

const navHeight = nav.getBoundingClientRect().height;

const navSticky = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
const navObserver = new IntersectionObserver(navSticky, {
  root: null,
  threshold: 0,
});

navObserver.observe(header);

const sectionAbout = document.querySelector(".about-us");

//reveal sections
///////
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const numbers = [10, 14, 23, 42, 12, 49, 60, 70];

const numbers2 = [80, 50, 44, 23, 30];
const numsDivSeven = [];

const numChecker = function (numbers) {
  for (const num of numbers) {
    if (num % 7 === 0) {
      numsDivSeven.push(num);
    }
  }
};

numChecker(numbers);

console.log(numsDivSeven);
