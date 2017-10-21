function updateSiteTheme(theme, el) {
    var x = document.getElementsByClassName("theme-picker");
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    el.parentNode.classList.add("active");

    switch (theme) {
        case 'pop':
            document.getElementById('CssTheme').href = '../Content/Pop.min.css';
            break;
        case 'fun':
            document.getElementById('CssTheme').href = '../Content/Fun.min.css';
            break;
        case 'vintage':
            document.getElementById('CssTheme').href = '../Content/Vintage.min.css';
            break;
        case 'neon':
            document.getElementById('CssTheme').href = '../Content/Neon.min.css';
            break;
        case 'retro':
            document.getElementById('CssTheme').href = '../Content/Retro.min.css';
            break;
        default:
            document.getElementById('CssTheme').href = '../Content/Neon.min.css';
            break;
    }
}

var slideIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

currentSlide(1);
//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    slides[slideIndex - 1].style.display = "block";
//    setTimeout(showSlides, 80000); // Change image every 2 seconds
//}