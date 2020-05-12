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
