"use strict";
const btnMenu = document.querySelector(".btn_menu");
const btnCloseMenu = document.querySelector(".btn_close_menu");
const nav = document.querySelector("nav ul");

btnMenu.addEventListener("click", () => {
  nav.classList.remove("scale-x-0");
});
btnCloseMenu.addEventListener("click", () => {
  nav.classList.add("scale-x-0");
});
