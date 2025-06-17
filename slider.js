// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// const slideWidth = slides[0].clientWidth;

// slider.style.transform = translateX(-${slideWidth * currentSlide}px);

// const goToLeft = () => {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   }
//   slider.style.transform = translateX(-${slideWidth * currentSlide}px);
// };

// const goToRight = () => {
//   currentSlide++;
//   if (currentSlide > slides.length - 1) {
//     currentSlide = 0;
//   }
//   slider.style.transform = translateX(-${slideWidth * currentSlide}px);
// };

// document.querySelector('.slide-left').addEventListener('click', goToLeft);
// document.querySelector('.slide-right').addEventListener('click', goToRight);

// setInterval(() => {
//   goToRight();
// }, 6000);