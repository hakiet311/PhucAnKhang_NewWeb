"use strict";
const btnMenu = document.querySelector(".btn_menu");
const btnCloseMenu = document.querySelector(".btn_close_menu");
const nav = document.querySelector("nav ul");
const btnLienHes = document.querySelectorAll(".btn_lienhe");
const popUp = document.querySelector(".pop_up_container");
const btnClosePopUp = document.querySelector(".btn-close");
const sections = document.querySelectorAll(".section");
const navigationBar = document.querySelector("nav");

btnMenu.addEventListener("click", () => {
  nav.classList.remove("scale-x-0");
});
btnCloseMenu.addEventListener("click", () => {
  nav.classList.add("scale-x-0");
});

btnLienHes.forEach((btnLienHe) => {
  btnLienHe.addEventListener("click", () => {
    popUp.classList.remove("hide_popUp");
  });
});

btnClosePopUp.addEventListener("click", () => {
  popUp.classList.add("hide_popUp");
});

document.querySelector(".btn_explore").addEventListener("click", () => {
  document
    .querySelector(".section_product")
    .scrollIntoView({ behavior: "smooth" });
});

//
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navigationBar.classList.add("fixed");
        navigationBar.classList.add("w-screen");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  observer.observe(section);
});
