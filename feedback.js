const slider = document.querySelector(".review-wrapper");
const reviews = document.querySelectorAll(".review-card");

let counter = 1;
const size = reviews[0].clientWidth;

setInterval(() => {
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-size * counter}px)`;
  counter++;
  if (counter === reviews.length) {
    counter = 0;
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0)`;
    }, 2000);
  }
}, 4000);