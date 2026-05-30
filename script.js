// Kezdő index
let slideIndex = 1;
showSlides(slideIndex);

// Nyíl kattintás kezelő
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Megjelenítő logika
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}