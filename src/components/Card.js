export default class Card {
	constructor({ name, link, templateSelector, handleCardClick }) {
		this._name = name
		this._link = link
		this._templateSelector = templateSelector
		this._handleCardClick = handleCardClick
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.post')
			.cloneNode(true)
		return cardElement
	}

	_toggleLikeButton() {
		this._likeButtonElement.classList.toggle('post__like_active')
	}

	_removeElement() {
		this._element.remove()
	}

	_setEventListeners() {
		this._imageElement.addEventListener('click', () =>
			this._handleCardClick({ name: this._name, link: this._link })
		)

		this._likeButtonElement.addEventListener('click', () =>
			this._toggleLikeButton()
		)

		const removeButton = this._element.querySelector('.post__remove')
		removeButton.addEventListener('click', () => this._removeElement())
	}

	getMarkup() {
		this._element = this._getTemplate()
		this._imageElement = this._element.querySelector('.post__image')
		this._likeButtonElement = this._element.querySelector('.post__like')
		this._setEventListeners()
		this._imageElement.src = this._link
		this._imageElement.alt = this._name
		this._element.querySelector('.post__title').textContent = this._name
		return this._element
	}
}
