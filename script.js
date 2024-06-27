var loader = document.getElementById('preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"

})


const toggle_button = document.getElementsByClassName('toggle-button')[0]
const toggle_button_main = document.getElementsByClassName('toggle-button-main')[0]
toggle_button.addEventListener('click', () => {
    const navbar_nav = document.getElementsByClassName('navbar-nav')[0]
    const navbar = document.getElementsByClassName('navbar')[0]
    navbar_nav.classList.toggle('active')
    navbar.classList.toggle('active')
    toggle_button_main.classList.toggle('fa-x');
    toggle_button_main.classList.toggle('fa-bars');

})


