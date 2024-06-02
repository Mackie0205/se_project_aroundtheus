const initialCards = [
    {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
},
{
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
},
{
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
},
{
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
},
{
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
},
{
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
}
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileModalCloseButton = document.querySelector("#profile-modal-close-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleinput = document.querySelector("#profile-title-input");
const profileSubtitleinput = document.querySelector("#profile-subtitle-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");

function closePopup() {
    profileEditModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", () => {
 profileTitleinput.value = profileTitle.textContent;
 profileSubtitleinput.value = profileSubtitle.textContent;
 profileEditModal.classList.add("modal_opened");
});

profileModalCloseButton.addEventListener("click", () => {
 closePopup();    
});

profileEditForm.addEventListener("submit", (e) => {
 e.preventDefault();
 profileTitle.textContent = profileTitleinput.value;
 profileSubtitle.textContent = profileSubtitleinput.value;
 closePopup();
});