import { KEYS } from '../utils/constants.js'

export default class Popup {
	constructor(selector) {
		this._element = document.querySelector(selector)
		this._handleEscCloseWithContext = this._handleEscClose.bind(this)
	}

	_handleEscClose({ key }) {
		switch (key) {
			case KEYS.ESC:
				this.close()
				break
		}
	}

	_handleClick(event) {
		const { classList: targetClassList } = event.target
		if (
			targetClassList.contains('popup') ||
			targetClassList.contains('popup__close-btn')
		) {
			this.close()
		}
	}

	open() {
		this._element.classList.add('popup_opened')
		document.addEventListener('keydown', this._handleEscCloseWithContext)
	}

	close() {
		this._element.classList.remove('popup_opened')
		document.removeEventListener('keydown', this._handleEscCloseWithContext)
	}

	setEventListeners() {
		this._element.addEventListener('click', this._handleClick.bind(this))
	}
}
