import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
	constructor(selector) {
		super(selector)
		this._confirmButton = this._element.querySelector('.popup__save-btn')
		this.setEventListeners()
	}

	open(handleConfirm) {
		this._handleConfirm = handleConfirm
		super.open()
	}

	setEventListeners() {
		super.setEventListeners()
		this._confirmButton.addEventListener('click', () => {
			this._handleConfirm()
			this.close()
		})
	}
}
