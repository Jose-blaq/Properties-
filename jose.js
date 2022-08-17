var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("us");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
}
    setInterval(showSlides, 3000)


    

    var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides(n) {
    showSlides1(slideIndex1 += n);
}

function currentSlides(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("ok");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex1-1].style.display = "block";
    dots[slideIndex1-1].className += " active"
}




function openNav() {
    document.getElementById("tog").style.width = "100%";
}

function closeNav() {
    document.getElementsByClassName("sidenav").style.width = "0";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

function lusSlides(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("class");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}



var tog = document.querySelector('#tog');
var menu = document.querySelector('#menu');
var menuItems = document.querySelector('#menu li a');
tog.addEventListener('click', function(){
    if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
        this.setAttribute('aria-expanded','true')
    }
});