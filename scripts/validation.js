// Utility functions for showing and hiding input errors
function showInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  
  function hideInputError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }
  
  // Function to check the validity of an input field
  function checkInputValidity(formEl, inputEl, options) {
    if (inputEl.validity.valid) {
      hideInputError(formEl, inputEl, options);
    } else {
      showInputError(formEl, inputEl, options);
    }
  }
  
  // Function to check if there is any invalid input in a list of inputs
  function hasInvalidInput(inputs) {
    return inputs.some((inputEl) => !inputEl.validity.valid);
  }
  
  // Function to toggle the state of the submit button
  function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
    if (hasInvalidInput(inputEls)) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  }
  
  // Function to set event listeners on input fields and handle input events
  function setEventListeners(formEl, options) {
    const { inputSelector, submitButtonSelector } = options;
    const inputEls = Array.from(formEl.querySelectorAll(inputSelector));
    const submitButton = formEl.querySelector(submitButtonSelector);
  
    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }
  
  // Function to enable validation on forms with the provided options
  function enableValidation(options) {
    const formElements = Array.from(document.querySelectorAll(options.formSelector));
    formElements.forEach((formEl) => {
      formEl.addEventListener("submit", (e) => {
        e.preventDefault();
      });
  
      setEventListeners(formEl, options);
    });
  }
  
  // Configuration object for validation
  const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };
  
  // Initialize validation with the configuration
  enableValidation(config);