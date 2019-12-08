var slideIndex = 0;

esconderSlides();

function esconderSlides() {
    // coloca todos os slides em slides 
    slides = document.getElementsByClassName('slideshow-container');
    // Esconde todos os slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    //slideIndex = slideIndex + 1
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    // console.log('slide Index: ' + slideIndex);
    setTimeout(esconderSlides, 4000); // Change image every 2 seconds
}
