export default class UserInfo {
	constructor({ avatarSelector, nameSelector, descriptionSelector }) {
		this._nameElement = document.querySelector(nameSelector)
		this._descriptionElement = document.querySelector(descriptionSelector)
		this._avatarElement = document.querySelector(avatarSelector)
	}

	getUserInfo() {
		return {
			name: this._nameElement.textContent,
			description: this._descriptionElement.textContent,
		}
	}

	setUserInfo({ name, description }) {
		this._nameElement.textContent = name
		this._descriptionElement.textContent = description
	}

	setUserAvatar(imageUrl) {
		this._avatarElement.src = imageUrl
	}
}
