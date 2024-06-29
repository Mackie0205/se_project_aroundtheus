/* ------------------------------ IMAGES/NAMES ------------------------------ */

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
    },
];

/* -------------------------------------------------------------------------- */
/*                                   ELEMENTS                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------- PROFILE MODAL ELEMENTS ------------------------- */

const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = document.querySelector(".modal__close-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");

/* ---------------------------- TEMPLATE ELEMENTS --------------------------- */
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");

/* ------------------------------ CARD ELEMENTS ----------------------------- */
const cardAddPopUp = document.querySelector("#profile-add");
const cardAddButton = document.querySelector("#profile-add-button");
const pictureNameInput = document.querySelector("#pic-name-input");
const pictureLinkInput = document.querySelector("#link-input");
const cardAddCloseButton = document.querySelector("#add-close");
const cardAddForm = document.querySelector("#add-card-form");

/* -------------------------- IMAGE MODAL ELEMENTS -------------------------- */
const cardImageModal = document.querySelector("#card__image-modal");
const imageClose = document.querySelector("#close-image");
const modalImagePopup = document.querySelector(".modal__image");
const modalImageTitle = document.querySelector(".modal__title");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

function openModal(modal) {
    modal.classList.add("modal_opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    const likeButton = cardElement.querySelector(".card__like-button");
    const trashButton = cardElement.querySelector(".card__delete-button");

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button_active");
    });

    cardImageEl.addEventListener("click", () => {
        modalImagePopup.src = cardData.link;
        modalImageTitle.textContent = cardData.name;
        modalImagePopup.alt = cardData.name;
        openModal(cardImageModal);
    });

    trashButton.addEventListener("click", (e) => {
        e.target.closest(".card").remove();
    });

    cardTitleEl.textContent = cardData.name;
    cardImageEl.alt = cardData.name;
    cardImageEl.src = cardData.link;

    return cardElement;
}

function renderCard(cardElement, container) {
    container.prepend(cardElement);
}

/* -------------------------------------------------------------------------- */
/*                               EVENT HANDLERS                               */
/* -------------------------------------------------------------------------- */

function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
}

/* -------------------------------------------------------------------------- */
/*                               EVENT LISTENERS                              */
/* -------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profileEditModal);
});

cardAddButton.addEventListener("click", () => {
    openModal(cardAddPopUp);
});

cardAddCloseButton.addEventListener("click", () => {
    closeModal(cardAddPopUp);
});

profileCloseButton.addEventListener("click", () => {
    closeModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

imageClose.addEventListener("click", () => {
    closeModal(cardImageModal);
});

cardAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const link = pictureLinkInput.value;
    const title = pictureNameInput.value;
    const cardView = getCardElement({
        name: title,
        link: link,
    });
    renderCard(cardView, cardListEl);
    cardAddForm.reset();
    closeModal(cardAddPopUp);
});

/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

initialCards.forEach((cardData) => {
    const cardView = getCardElement(cardData);
    renderCard(cardView, cardListEl);
});