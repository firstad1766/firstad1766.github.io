var arrSliderControls = document.querySelectorAll(".slider-control");
var arrSlides = document.querySelectorAll(".slider-item");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide(){
	arrSlides[currentSlide].className = "slider-item";
	arrSliderControls[currentSlide].classList.toggle("active");
	currentSlide = (currentSlide + 1)%arrSlides.length;
	arrSlides[currentSlide].className = "slider-item show-slide";
	arrSliderControls[currentSlide].classList.toggle("active");
}
