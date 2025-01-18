//---- POPUP VARIABLES -> OPEN & CLOSE BUTTONS -----//
let profileEdit = document.querySelector(".profile__edit");
let popupForm = document.querySelector(".popup");
let closePopup = document.querySelector(".popup__close");

//---- OPEN POPUP -----//
function showPopup() {
  popupForm.classList.add("popup_opened");
}
//---- CLOSE POPUP -----//
function hiddenPopup(event) {
  event.preventDefault();
  popupForm.classList.remove("popup_opened");
}

profileEdit.addEventListener("click", showPopup);

closePopup.addEventListener("click", hiddenPopup);

//---- VARIABLES -> USER INFORMATON - NAME & DESCRIPTION -----//

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let saveButton = document.querySelector(".popup__button");
let inputName = document.querySelector("#name");
let inputDescription = document.querySelector("#description");

//---- SUBMIT USER INFORMATON - NAME & DESCRIPTION -----//
function submitUserInfo(event) {
  event.preventDefault();
  if (inputName.value != "") {
    profileName.textContent = inputName.value;
    inputName.value = "";
  }

  if (inputDescription.value != "") {
    profileDescription.textContent = inputDescription.value;
    inputDescription.value = "";
  }
  hiddenPopup(event);
}
saveButton.addEventListener("click", submitUserInfo);
