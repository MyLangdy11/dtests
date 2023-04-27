 document.addEventListener("DOMContentLoaded", function(event) { 

var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;

//Uncomment for auto play
// var slideInterval = setInterval(nextSlide,2000);
  
function nextSlide(){
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].classList.add("showing");
  console.log("next slide");
}

function prevSlide(){
  if(currentSlide > 0){
  slides[currentSlide].classList.remove("showing");
  currentSlide = (currentSlide-1)%slides.length;
  slides[currentSlide].classList.add("showing");
  console.log("prev slide");
  }
  console.log("no previous slide")
}

 
  
 });
