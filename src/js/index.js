import "../pages/index.css";

const headerMenu = document.querySelector(".header__menu-mobile");
const openMenu = document.querySelector(".header__menu-logo");
const closeMenu = document.querySelector(".header__list-close");

function actionWithMenu() {
  headerMenu.classList.toggle("header__menu-mobile_is-active");
}

openMenu.addEventListener("click", actionWithMenu);
closeMenu.addEventListener("click", actionWithMenu);
