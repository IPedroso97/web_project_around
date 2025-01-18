const profileEdit = document.querySelector(".profile__edit");
const popupForm = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

function showPopup() {
  popupForm.classList.add("popup_opened");
}
function hiddenPopup(event) {
  event.preventDefault();
  popupForm.classList.remove("popup_opened");
}

profileEdit.addEventListener("click", showPopup);

closePopup.addEventListener("click", hiddenPopup);

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const saveButton = document.querySelector(".popup__button");
const inputName = document.querySelector("#name");
const inputDescription = document.querySelector("#description");

function submitUserInfo(event) {
  event.preventDefault();
  if (inputName != "") {
    profileName.textContent = inputName;
  }

  if (inputDescription != "") {
    profileDescription.textContent = inputDescription;
  }
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
}

saveButton.addEventListener("click", submitUserInfo);
