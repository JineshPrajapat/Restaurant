let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-slide');
const controls = document.querySelectorAll('.slideshow-control');

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'));
  controls.forEach(control => control.classList.remove('active'));
  slides[n].classList.add('active');
  controls[n].classList.add('active');
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);

controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});
