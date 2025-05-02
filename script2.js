
const text = document.getElementById("animated-text");
const truck = document.getElementById("truck");

const words = ["НЭГДСЭН ТҮГЭЭЛТ- ХҮРЭХ ГАЗАРТ ТҮРҮҮЛЖ ОЧНО!", "ТАНЫ ИТГЭЛ-МАНАЙ ХАРИУЦЛАГА", "МОНГОЛД ДАЯАР-ШИЙДЛИЙГ БИД ТҮГЭЭНЭ"];
let wordIndex = 0;

function updateScene() {
  wordIndex = (wordIndex + 1) % words.length;
  text.style.opacity = 0;
  setTimeout(() => {
    text.textContent = words[wordIndex];
    text.style.opacity = 1;
  }, 500);

  truck.style.transition = 'none';
  truck.style.transform = 'translateX(-100%)';

  setTimeout(() => {
    truck.style.transition = 'transform 9s linear';
    truck.style.transform = 'translateX(100%)';
  }, 50);
}

updateScene();
setInterval(updateScene, 10000);


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

