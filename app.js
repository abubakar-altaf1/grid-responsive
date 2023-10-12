const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const CloseBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed Class to navbar
window.addEventListener("scroll", function () {
    if(this.window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});
// show sidebar
navBtn.addEventListener("click" , function () {
    sidebar.classList.add("show-sidebar");
});
CloseBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});
// set year


date.innerHTML = year = new Date().getFullYear()