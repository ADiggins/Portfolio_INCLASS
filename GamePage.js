// console.log("Game Page script connected!");

var activeSlide = 0;
var slides = document.getElementsByClassName("slide");
displaySlide(0);

function displaySlide( newIndex ) {
    slides[activeSlide].style.display = "none";
    activeSlide = (newIndex+slides.length) % slides.length;
    slides[activeSlide].style.display = "block";
}

function changeSlide( by ) {
    displaySlide (activeSlide + by);
}