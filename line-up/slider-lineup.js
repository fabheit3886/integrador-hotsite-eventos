const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let current = 0;

function goToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  current = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

/*setInterval(() => {
  current = (current + 1) % slides.length;
  goToSlide(current);
}, 5000);*/
