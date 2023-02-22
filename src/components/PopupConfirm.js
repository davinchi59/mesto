import { SUBMIT_BUTTON_STATE } from '../utils/constants.js'
import Popup from './Popup.js'

export default class PopupConfirm extends Popup {
	constructor(selector, buttonTexts) {
		super(selector)
		this._confirmButton = this._element.querySelector('.popup__save-btn')
		this._buttonTexts = buttonTexts
		this._confirmButton.textContent =
			this._buttonTexts[SUBMIT_BUTTON_STATE.Idle]
		this.setEventListeners()
	}

	_updateButtonText(state) {
		this._confirmButton.textContent = this._buttonTexts[state]
	}

	open(handleConfirm) {
		this._handleConfirm = handleConfirm
		super.open()
	}

	setEventListeners() {
		super.setEventListeners()
		this._confirmButton.addEventListener('click', () => {
			this._updateButtonText(SUBMIT_BUTTON_STATE.Loading)
			this._handleConfirm(
				this._updateButtonText.bind(this),
				this.close.bind(this)
			)
		})
	}
}
