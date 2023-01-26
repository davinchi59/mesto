import { KEYS, VALIDATE_SETTINGS } from './constants.js'

const popupImage = document.querySelector('.popup_type_image')
const popupImageElement = popupImage.querySelector('.popup__image')
const popupImageTitle = popupImage.querySelector('.popup__image-title')

export function openCardPopup({ name, link }) {
	popupImageElement.src = link
	popupImageElement.alt = name
	popupImageTitle.textContent = name
	openPopup(popupImage)
}

let openedPopup = null

function handleKeyDown({ key }) {
	switch (key) {
		case KEYS.ESC:
			closePopup(openedPopup)
			break
	}
}

export function openPopup(popup) {
	openedPopup = popup
	document.addEventListener('keydown', handleKeyDown)
	popup.classList.add('popup_opened')
	togglePopupFormSubmitButtonState(popup)
}

export function closePopup(popup) {
	openedPopup = null
	document.removeEventListener('keydown', handleKeyDown)
	popup.classList.remove('popup_opened')
	const submitButtonElement = popup.querySelector(
		VALIDATE_SETTINGS.submitButtonSelector
	)
	submitButtonElement.classList.add(VALIDATE_SETTINGS.inactiveButtonClass)
	submitButtonElement.setAttribute('disabled', '')
}
