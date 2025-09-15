let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

function plusSlides(n) {
    clearTimeout();
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlidesManual();
}

function currentSlide(n) {
    clearTimeout();
    slideIndex = n + 1;
    showSlidesManual();
}

function showSlidesManual() {
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex - 1].classList.add('active');
}

// Inicia o slideshow
showSlides();