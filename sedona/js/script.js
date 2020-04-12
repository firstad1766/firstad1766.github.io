var formSwitcher = document.querySelector(".toggle-form");
var form = document.querySelector(".modal-form");
var checkIn = form.querySelector("#check-in");
var checkOut = form.querySelector("#check-out");
var adults = form.querySelector("#adults");
var formFields = [checkIn, checkOut, adults];
function unredFields (arr) {
  for (var i = 0; i < arr.length; i++ ){
    if (arr[i].classList.contains("modal-error")) {
      arr[i].classList.remove("modal-error");
    }
  }
}

unredFields(formFields);

formSwitcher.addEventListener("click", function(evt){
  evt.preventDefault();
  form.classList.toggle("modal-show");
  unredFields(formFields);
});

form.addEventListener("submit", function(evt){
  for (var i = 0; i < formFields.length; i++ ){
    if (!formFields[i].value) {
      evt.preventDefault();
      formFields[i].classList.add("modal-error");
    }
  }
});
