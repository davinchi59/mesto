function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => !inputElement.validity.valid)
}

function enableSubmitButton(buttonElement, inactiveButtonClass) {
	buttonElement.classList.remove(inactiveButtonClass)
	buttonElement.removeAttribute('disabled')
}

function disableSubmitButton(buttonElement, inactiveButtonClass) {
	buttonElement.classList.add(inactiveButtonClass)
	buttonElement.setAttribute('disabled', '')
}

function toggleSubmitButtonState(
	inputList,
	buttonElement,
	inactiveButtonClass
) {
	if (hasInvalidInput(inputList)) {
		disableSubmitButton(buttonElement, inactiveButtonClass)
	} else {
		enableSubmitButton(buttonElement, inactiveButtonClass)
	}
}

function togglePopupFormSubmitButtonState(popup) {
	const formElement = popup.querySelector(VALIDATE_SETTINGS.formSelector)
	if (!formElement) return
	const buttonElement = formElement.querySelector(
		VALIDATE_SETTINGS.submitButtonSelector
	)
	const inputList = Array.from(
		formElement.querySelectorAll(VALIDATE_SETTINGS.inputSelector)
	)
	toggleSubmitButtonState(
		inputList,
		buttonElement,
		VALIDATE_SETTINGS.inactiveButtonClass
	)
}

function showInputError(
	formElement,
	inputElement,
	inputErrorClass,
	errorClass,
	errorMessage
) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	inputElement.classList.add(inputErrorClass)
	errorElement.textContent = errorMessage
	errorElement.classList.add(errorClass)
}

function hideInputError(
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
) {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
	inputElement.classList.remove(inputErrorClass)
	errorElement.classList.remove(errorClass)
	errorElement.textContent = ''
}

function checkInputValidity(
	formElement,
	inputElement,
	inputErrorClass,
	errorClass
) {
	if (!inputElement.validity.valid) {
		showInputError(
			formElement,
			inputElement,
			inputErrorClass,
			errorClass,
			inputElement.validationMessage
		)
	} else {
		hideInputError(formElement, inputElement, inputErrorClass, errorClass)
	}
}

function enableValidation({
	formSelector,
	inputSelector,
	submitButtonSelector,
	inactiveButtonClass,
	inputErrorClass,
	errorClass,
}) {
	const formList = Array.from(document.querySelectorAll(formSelector))
	formList.forEach((formElement) => {
		const inputList = Array.from(formElement.querySelectorAll(inputSelector))
		const buttonElement = formElement.querySelector(submitButtonSelector)
		toggleSubmitButtonState(inputList, buttonElement, inactiveButtonClass)
		inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				checkInputValidity(
					formElement,
					inputElement,
					inputErrorClass,
					errorClass
				)
				toggleSubmitButtonState(inputList, buttonElement, inactiveButtonClass)
			})
		})
	})
}
