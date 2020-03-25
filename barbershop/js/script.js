var link = document.querySelector(".login-link");
var popupLogin = document.querySelector(".modal-login");
var popupLoginClose = popupLogin.querySelector(".modal-close");
var form = popupLogin.querySelector("form");
var login = popupLogin.querySelector("[name=login]");
var password = popupLogin.querySelector("[name=password]");
var storage = "";
var isStorageSupport = true;

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupLogin.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

form.addEventListener("submit", function(evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popupLogin.classList.remove("modal-error");
		popupLogin.offsetWidth = popupLogin.offsetWidth;
		popupLogin.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
		}
	}
});

popupLoginClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupLogin.classList.remove("modal-show");
	popupLogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt){
	if (popupLogin.classList.contains("modal-show") && (evt.keyCode === 27)) {
		evt.preventDefault();
		popupLogin.classList.remove("modal-show");
		popupLogin.classList.remove("modal-error");
	}
});

var mapLink = document.querySelector(".js-button-map");
var mapLinkFooter = document.querySelector(".to-map");
var popupMap = document.querySelector(".modal-map");
var mapClose = popupMap.querySelector(".modal-close");

if (mapLink) {
	mapLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.remove("modal-show");
	});
				
	window.addEventListener("keydown", function(evt){
		if (popupMap.classList.contains("modal-show") && (evt.keyCode === 27)) {
			evt.preventDefault();
			popupMap.classList.remove("modal-show");
		}
	});
}