/* bookmark, cart, modal-cart */
var bookmark = document.querySelectorAll(".bookmark");
var buyLink = document.querySelectorAll(".buy");
var bookmarks =document.querySelector(".bookmarks");
var cart = document.querySelector(".cart");
var cartModal = document.querySelector(".modal-cart");
var cartClose = cartModal.querySelector(".modal-close");
var cartContinue = cartModal.querySelector(".continue");

for (var i = 0; i < bookmark.length; i++) {
  bookmark[i].addEventListener("click", function(evt){
    evt.preventDefault();
    bookmarks.classList.add("red");
  });
  buyLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartModal.classList.add("modal-show");
    cart.classList.add("red");
  });
}

cartClose.addEventListener("click", function() {
  cartModal.classList.remove("modal-show");
});

cartContinue.addEventListener("click", function() {
  cartModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (cartModal.classList.contains("modal-show") && evt.keyCode === 27) {
    evt.preventDefault();
    cartModal.classList.remove("modal-show");
  }
});
