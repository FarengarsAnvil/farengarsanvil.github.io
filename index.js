
/* Assignment of HTML attributes */
const toggle = document.querySelector(".ToggleMenu");
const navLinks = document.querySelector(".links");
const nav = document.querySelector(".menucontainer")




toggle.addEventListener("click", function() {
    nav.classList.toggle('active');

})
