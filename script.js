const toggle_button = document.getElementsByClassName('toggle-button')[0]
toggle_button.addEventListener('click', () =>{
    const navbar_nav = document.getElementsByClassName('navbar-nav')[0]
    const navbar = document.getElementsByClassName('navbar')[0]
    navbar_nav.classList.toggle('active')
    navbar.classList.toggle('active')
})