var slideIndex = 1;
showSlides(slideIndex); // initial slide shown

/* move to next or previous slide */
function switchSlides(n) {
    showSlides(slideIndex += n);
}

function automaticSwitch(){
    showSlides(slideIndex += 1)
}

/* when dot is clicked, change to selected slide */
function currentSlide(n) {
    showSlides(slideIndex = n); 
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("rowtext");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activeDot", "");
    }

    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " activeDot";
    setTimeout(automaticSwitch, 8000);
}