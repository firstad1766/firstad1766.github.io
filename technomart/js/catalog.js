/* modal modal-cart */
var buyLink = document.querySelectorAll(".buy");
var cart = document.querySelector(".modal-cart");
var cartClose = cart.querySelector(".modal-close");
var cartContinue = cart.querySelector(".continue");

for (var i = 0; i < buyLink.length; i++) {
  buyLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cart.classList.add("modal-show");
  });
}

cartClose.addEventListener("click", function() {
  cart.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function() {
  cart.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (cart.classList.contains("modal-show") && evt.keyCode === 27) {
    evt.preventDefault();
    cart.classList.remove("modal-show");
  }
});
