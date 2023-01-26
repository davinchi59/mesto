import { KEYS } from './constants.js'

function handleKeyDown({ key }) {
	switch (key) {
		case KEYS.ESC:
			const openedPopup = document.querySelector('.popup_opened')
			closePopup(openedPopup)
			break
	}
}

export function openPopup(popup) {
	document.addEventListener('keydown', handleKeyDown)
	popup.classList.add('popup_opened')
}

export function closePopup(popup) {
	document.removeEventListener('keydown', handleKeyDown)
	popup.classList.remove('popup_opened')
}
