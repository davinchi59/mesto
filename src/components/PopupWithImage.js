import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
	constructor(selector) {
		super(selector)
		this._imageElement = this._element.querySelector('.popup__image')
		this._imageTitleElement = this._element.querySelector('.popup__image-title')
		this.setEventListeners()
	}

	open({ name, link }) {
		this._imageElement.src = link
		this._imageElement.alt = name
		this._imageTitleElement.textContent = name
		super.open()
	}
}
