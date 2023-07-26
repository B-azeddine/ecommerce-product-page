// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider img"));
let mainImage = document.querySelector(".selected_one-pop-up img");

// Get Number Of Slides
var slidesCount = sliderImages.length;
console.log(sliderImages);
console.log(slidesCount);

// Set Current Slide
var currentSlide = 1;

// Previous and Next Buttons
var nextButton = document.querySelector(".pop-up-btn-next");
var prevButton = document.querySelector(".pop-up-btn-prev");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Next Slide Function
function nextSlide() {
  if (currentSlide > slidesCount) {
    currentSlide = 1;
  } else {
    mainImage.src = `images/image-product-${currentSlide}.jpg`;
    currentSlide++;
  }
}

// Previous Slide Function
function prevSlide() {
  if (currentSlide >= 1) {
    mainImage.src = `images/image-product-${currentSlide}.jpg`;
    currentSlide--;
  } else {
    currentSlide = slidesCount;
  }
}
