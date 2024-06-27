var loader = document.getElementById('preloader');
var navbar_brand = document.getElementsByClassName('navbar-brand')[0];
var intro_title = document.getElementsByClassName('intro-title')[0];
var intro_tagline = document.getElementsByClassName('intro-tagline')[0];

function loading() {
    loader.style.display = "none";
    navbar_brand.classList.add("animate__tada");
    intro_title.classList.add("animate__backInLeft");
    intro_tagline.classList.add("typing");
}

function checkIntroLoad() {
    var introSection = document.getElementsByClassName('intro')[0];
    if (introSection) {
        var images = introSection.getElementsByTagName('img');
        var totalImages = images.length;
        var loadedImages = 0;

        for (var i = 0; i < totalImages; i++) {
            if (images[i].complete) {
                loadedImages++;
            } else {
                images[i].addEventListener('load', function() {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        loading();
                    }
                });
                images[i].addEventListener('error', function() {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        loading();
                    }
                });
            }
        }

        if (loadedImages === totalImages) {
            loading();
        }
    } else {
        loading();
    }
}

const toggle_button = document.getElementsByClassName('toggle-button')[0];
const toggle_button_main = document.getElementsByClassName('toggle-button-main')[0];
toggle_button.addEventListener('click', () => {
    const navbar_nav = document.getElementsByClassName('navbar-nav')[0];
    const navbar = document.getElementsByClassName('navbar')[0];
    navbar_nav.classList.toggle('active');
    navbar.classList.toggle('active');
    toggle_button_main.classList.toggle('fa-x');
    toggle_button_main.classList.toggle('fa-bars');
});

AOS.init();
