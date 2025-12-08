// console.log("Game Page script connected!");

var activeSlide = 0;
var slides = document.getElementsByClassName("slide");
displaySlide(0);

function displaySlide( newIndex ) {
    slides[activeSlide].style.display = "none";
    activeSlide = (newIndex+slides.length) % slides.length;
    slides[activeSlide].style.display = "block";
}

function displaySlideWithAnimation( newIndex, direction ) {
    animatedSlideOut( slides[activeSlide], direction );
    activeSlide = (newIndex+slides.length) % slides.length;
    animatedSlideIn( slides[activeSlide], direction );
}

function changeSlide( by ) {
    displaySlideWithAnimation (activeSlide + by, by > 0 ? 'right':'left');
}

function animatedSlideIn(slide, direction) {
    slide.style.display = "block";
    slide.animate( 
    [
        { transform: `translateX(${ direction == 'right' ? '500px':'-500px' } )` },
        { transform: 'translateX(0px)'}
    ], 
    {
        duration: 600,
        // direction: 'alternate',
        // iterations: Infinity,
        easing: 'ease-out',
    } 
)
}

function animatedSlideOut(slide, direction) {
    slide.style.display = "block";
    var thisAnimation = slide.animate( 
    [
        { transform: 'translateX(0px)'},
        { transform: `translateX(${ direction == 'right' ? '-500px':'500px' } )` },
    ], 
    {
        duration: 600,
        // direction: 'alternate',
        // iterations: Infinity,
        easing: 'ease-out',
    } 
    )
    thisAnimation.finished.then( function() { slide.style.display = 'none' } )
}


