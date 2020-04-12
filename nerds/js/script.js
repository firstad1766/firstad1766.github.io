
var link = document.querySelector(".button-write-us");
var popup = document.querySelector(".modal-write-us");
var form = popup.querySelector(".form-write-us");
var fullname = form.querySelector("[name=fullname]");
var email = form.querySelector("[name=user-email]");
var message = form.querySelector("[name=message]");
var error = popup.querySelector(".error-informer");
var closeModal = popup.querySelector(".button-close");
var nameStorage = "";
var emailStorage = "";
var isStorageSupport = true;

try {
	nameStorage = localStorage.getItem("fullname");
} catch(err) {
	isStorageSupport = false;
	console.log("не работает localStorage");
}

try {
	emailStorage = localStorage.getItem("email");
} catch(err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (!error.classList.contains("visually-hidden")) {
			error.classList.add("visually-hidden");
		}
	if (nameStorage) {
		fullname.value = nameStorage;
		if (emailStorage) {
			email.value = emailStorage;
			message.focus();
		} else {
			email.focus();
		}
	} else {
		fullname.focus();
	}
});

closeModal.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
	if (popup.classList.contains("modal-show") && evt.keyCode === 27){
		evt.preventDefault();
		popup.classList.remove("modal-show");
	}
});

form.addEventListener("submit", function(evt){
	if(!fullname.value || !email.value || !message.value) {
		evt.preventDefault();
		if (error.classList.contains("visually-hidden")) {
			error.classList.remove("visually-hidden");
		}
	} else {
		if (isStorageSupport) {
			localStorage.setItem("fullname", fullname.value);
			localStorage.setItem("email", email.value);
		}
	}
});
