const carousel = document.querySelector('#carousel');
const slides = carousel.querySelectorAll('.slide');
const controls = document.querySelector('#controls');

// Get the current slide index
let currentSlide = 0;

// Set the current slide
slides[currentSlide].style.display = 'block';

// Add event listeners to the controls
controls.querySelector('a.previous').addEventListener('click', () => {
  // Go to the previous slide
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  // Set the current slide
  slides[currentSlide].style.display = 'block';
  slides[currentSlide - 1].style.display = 'none';
});

controls.querySelector('a.next').addEventListener('click', () => {
  // Go to the next slide
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Set the current slide
  slides[currentSlide].style.display = 'block';
  slides[currentSlide + 1].style.display = 'none';
});
