import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
	constructor(selector, handleFormSubmit, resetValidation) {
		super(selector)
		this._formElement = this._element.querySelector('.popup__form')
		this._handleFormSubmit = handleFormSubmit
		this._inputList = Array.from(
			this._element.querySelectorAll('.popup__input')
		)
		this._resetValidation = resetValidation
		this.setEventListeners()
	}

	_getInputValues() {
		const values = {}
		this._inputList.forEach(({ name, value }) => {
			values[name] = value
		})
		return values
	}

	open(values = {}) {
		super.open()
		for (let key in values) {
			const input = this._inputList.find(({ name }) => name === key)
			if (input === undefined) continue
			input.value = values[key]
		}
	}

	close() {
		super.close()
		this._formElement.reset()
		this._resetValidation()
	}

	setEventListeners() {
		super.setEventListeners()
		this._formElement.addEventListener('submit', (event) => {
			event.preventDefault()
			this._handleFormSubmit(this._getInputValues())
			this.close()
		})
	}
}
