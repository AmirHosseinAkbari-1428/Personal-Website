const navOpen = document.querySelector(".nav__toggle-icon");
const menuOpen = document.querySelector(".nav__menu");
const cover = document.querySelector(".cover")


navOpen.addEventListener("click", function(){
    this.classList.toggle("nav__toggle--open")
    menuOpen.classList.toggle("nav-menu__toggle--open")
    cover.classList.toggle("cover--open")
})