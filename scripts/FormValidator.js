export default class FormValidator {
	constructor({ settings, formElement }) {
		this._settings = settings
		this._formElement = formElement

		this._inputsList = Array.from(
			formElement.querySelectorAll(settings.inputSelector)
		)
		this._submitButtonElement = formElement.querySelector(
			settings.submitButtonSelector
		)
	}

	_hasInvalidInput() {
		return this._inputsList.some((inputElement) => !inputElement.validity.valid)
	}

	_enableSubmitButton() {
		this._submitButtonElement.classList.remove(
			this._settings.inactiveButtonClass
		)
		this._submitButtonElement.removeAttribute('disabled')
	}

	_disableSubmitButton() {
		this._submitButtonElement.classList.add(this._settings.inactiveButtonClass)
		this._submitButtonElement.setAttribute('disabled', '')
	}

	_toggleSubmitButtonState() {
		if (this._hasInvalidInput()) {
			this._disableSubmitButton()
		} else {
			this._enableSubmitButton()
		}
	}

	_showInputError(inputElement, errorMessage) {
		const errorElement = this._formElement.querySelector(
			`.${inputElement.id}-error`
		)
		inputElement.classList.add(this._settings.inputErrorClass)
		errorElement.textContent = errorMessage
		errorElement.classList.add(this._settings.errorClass)
	}

	_hideInputError(inputElement) {
		const errorElement = this._formElement.querySelector(
			`.${inputElement.id}-error`
		)
		inputElement.classList.remove(this._settings.inputErrorClass)
		errorElement.classList.remove(this._settings.errorClass)
		errorElement.textContent = ''
	}

	_checkInputValidity(inputElement) {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage)
		} else {
			this._hideInputError(inputElement)
		}
	}

	_setEventListeners() {
		this._inputsList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				this._checkInputValidity(inputElement)
				this._toggleSubmitButtonState()
			})
		})
	}

	enableValidation() {
		this._toggleSubmitButtonState()
		this._setEventListeners()
	}

	resetValidation() {
		this._inputsList.forEach((inputElement) =>
			this._hideInputError(inputElement)
		)
		this._disableSubmitButton()
	}
}
