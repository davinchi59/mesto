import { openCardPopup } from './utils.js'

export default class Card {
	constructor({ name, link, templateSelector }) {
		this._name = name
		this._link = link
		this._templateSelector = templateSelector
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.post')
			.cloneNode(true)
		return cardElement
	}

	_handleOpenPopup() {
		openCardPopup({ name: this._name, link: this._link })
	}

	_toggleLikeButton(buttonElement) {
		buttonElement.classList.toggle('post__like_active')
	}

	_removeElement() {
		this._element.remove()
	}

	_setEventListeners() {
		const image = this._element.querySelector('.post__image')
		image.addEventListener('click', () => this._handleOpenPopup())

		const likeButton = this._element.querySelector('.post__like')
		likeButton.addEventListener('click', (evt) =>
			this._toggleLikeButton(evt.target)
		)

		const removeButton = this._element.querySelector('.post__remove')
		removeButton.addEventListener('click', () => this._removeElement())
	}

	getMarkup() {
		this._element = this._getTemplate()
		this._setEventListeners()
		const imageElement = this._element.querySelector('.post__image')
		imageElement.src = this._link
		imageElement.alt = this._name
		this._element.querySelector('.post__title').textContent = this._name
		return this._element
	}
}
