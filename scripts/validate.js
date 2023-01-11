function hasInvalidInput(inputList) {
	return inputList.some((inputElement) => !inputElement.validity.valid)
}

function toggleSubmitButtonState(
	inputList,
	buttonElement,
	inactiveButtonClass
) {
	if (hasInvalidInput(inputList)) {
		buttonElement.classList.add(inactiveButtonClass)
	} else {
		buttonElement.classList.remove(inactiveButtonClass)
	}
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
				console.log('qweqwe')
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
