export default class Card {
	constructor({
		userId,
		_id,
		name,
		link,
		likes,
		templateSelector,
		handleCardClick,
		deleteAvailable,
		handleCardDelete,
		handleCardLike,
	}) {
		this._userId = userId
		this._id = _id
		this._name = name
		this._link = link
		this._likes = likes
		this._templateSelector = templateSelector
		this._handleCardClick = handleCardClick
		this._deleteAvailable = deleteAvailable
		this._handleCardDelete = handleCardDelete
		this._handleCardLike = handleCardLike
	}

	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
			.content.querySelector('.post')
			.cloneNode(true)
		return cardElement
	}

	_updateLikeState(likes) {
		this._likes = likes
		this._likeButtonElement.textContent = likes.length
		if (this._getIsLiked()) {
			this._likeButtonElement.classList.add('post__like_active')
		} else {
			this._likeButtonElement.classList.remove('post__like_active')
		}
	}

	_removeElement() {
		this._element.remove()
	}

	_getIsLiked() {
		return this._likes.map(({ _id }) => _id).includes(this._userId)
	}

	_setEventListeners() {
		this._imageElement.addEventListener('click', () =>
			this._handleCardClick({ name: this._name, link: this._link })
		)

		this._likeButtonElement.addEventListener('click', () => {
			this._handleCardLike(
				this._getIsLiked(),
				this._id,
				this._updateLikeState.bind(this)
			)
		})

		this._removeButton.addEventListener('click', () =>
			this._handleCardDelete(this._id, this._removeElement.bind(this))
		)
	}

	getMarkup() {
		this._element = this._getTemplate()
		this._imageElement = this._element.querySelector('.post__image')
		this._likeButtonElement = this._element.querySelector('.post__like')
		this._removeButton = this._element.querySelector('.post__remove')
		if (!this._deleteAvailable) this._removeButton.remove()
		this._setEventListeners()
		this._imageElement.src = this._link
		this._imageElement.alt = this._name
		this._likeButtonElement.textContent = this._likes.length
		this._element.querySelector('.post__title').textContent = this._name
		this._updateLikeState(this._likes)
		return this._element
	}
}
