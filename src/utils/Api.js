export default class Api {
	constructor({ baseUrl, headers }) {
		this._baseUrl = baseUrl
		this._headers = headers
	}

	_handleResponse(result) {
		return result.ok
			? result.json()
			: Promise.reject(`Ошибка! Код: ${result.status}`)
	}

	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: this._headers,
		}).then(this._handleResponse)
	}

	addCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ name, link }),
		}).then(this._handleResponse)
	}

	deleteCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._handleResponse)
	}

	addCardLike(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		}).then(this._handleResponse)
	}

	deleteCardLike(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._handleResponse)
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
		}).then(this._handleResponse)
	}

	setUserInfo({ name, about }) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({ name, about }),
		}).then(this._handleResponse)
	}

	setUserAvatar(imageUrl) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({ avatar: imageUrl }),
		}).then(this._handleResponse)
	}
}
