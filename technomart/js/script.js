/* slider */
var slides = document.querySelectorAll(".slide");
var switchers = document.querySelectorAll(".switcher");
var arrowNext = document.querySelector(".next");
var arrowPrevious = document.querySelector(".previous");
var slideInterval = setInterval(nextSlide, 2000);
var current = 0;

arrowNext.addEventListener("click", function(){
  nextSlide();
});

arrowPrevious.addEventListener("click", function(){
  slides[current].classList.remove("slide-current");
  switchers[current].classList.remove("switcher-current");
  if (current === 0) {
    current = slides.length;
  }
  current = (current - 1);
  slides[current].classList.add("slide-current");
  switchers[current].classList.add("switcher-current");
});

function nextSlide() {
  slides[current].classList.remove("slide-current");
  switchers[current].classList.remove("switcher-current");
  current = (current + 1)%slides.length;
  slides[current].classList.add("slide-current");
  switchers[current].classList.add("switcher-current");
}

/* slider-services*/
var serviceLinks = document.querySelectorAll(".service-link");
var currentLink = 0;
var serviceInterval = setInterval(nextService, 2000);

function nextService(){
  serviceLinks[currentLink].classList.remove("service-current");
  currentLink = (currentLink + 1)%serviceLinks.length;
  serviceLinks[currentLink].classList.add("service-current");
}

for (var i = 0; i < serviceLinks.length; i++) {
  serviceLinks[i].addEventListener("click", function(evt){
    evt.preventDefault();
    var serviceCurrent = document.querySelector(".service-current");
    serviceCurrent.classList.remove("service-current");
    this.classList.add("service-current");
    currentLink = this.getAttribute("name");
  });
  serviceLinks[i].setAttribute("name", i);
}

/* modal map */
var mapLink = document.querySelector(".show-map");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});

mapClose.addEventListener("click", function() {
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (map.classList.contains("modal-show") && evt.keyCode === 27) {
    evt.preventDefault();
    map.classList.remove("modal-show");
  }
});


/* modal modal-write-us */
var writeUsLink = document.querySelector(".write-us-link");
var writeUs = document.querySelector(".modal-write-us");
var form = writeUs.querySelector("form");
var writeUsClose = writeUs.querySelector(".modal-close");
var userName = writeUs.querySelector("#user-name");
var userEmail = writeUs.querySelector("#user-email");
var userMessage = writeUs.querySelector("#user-message");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUs.classList.add("modal-show");
  if (storageName && storageEmail) {
    userName.value = storageName;
    userEmail.value = storageEmail;
    userMessage.focus();
  } else {
    userName.focus();
  }
});

writeUsClose.addEventListener("click", function() {
  writeUs.classList.remove("modal-show");
  writeUs.classList.remove("modal-error");
  userName.classList.remove("red");
  userEmail.classList.remove("red");
  userMessage.classList.remove("red");
});

window.addEventListener("keydown", function(evt) {
  if (writeUs.classList.contains("modal-show") && evt.keyCode === 27) {
    evt.preventDefault();
    writeUs.classList.remove("modal-show");
    writeUs.classList.remove("modal-error");
    userName.classList.remove("red");
    userEmail.classList.remove("red");
    userMessage.classList.remove("red");
  }
});

form.addEventListener("submit", function(evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeUs.classList.remove("modal-error");
    writeUs.offsetWidth = writeUs.offsetWidth;
    writeUs.classList.add("modal-error");
    if (!userName.value) {
      userName.focus();
      userName.classList.add("red");
    } else if (!userEmail.value) {
      userName.classList.remove("red");
      userEmail.focus();
      userEmail.classList.add("red");
    } else if (!userMessage.value) {
        userName.classList.remove("red");
        userEmail.classList.remove("red");
        userMessage.focus();
        userMessage.classList.add("red");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});
