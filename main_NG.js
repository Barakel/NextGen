const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.textContent = currentYear.getFullYear();