const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

nextButton.addEventListener('click', () => {
  index++;
  if (index >= track.children.length) index = 0;
  track.style.transform = `translateX(-${index * 420}px)`;
});

prevButton.addEventListener('click', () => {
  index--;
  if (index < 0) index = track.children.length - 1;
  track.style.transform = `translateX(-${index * 420}px)`;
});

