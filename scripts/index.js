const profileName = document.querySelector('.profile__name')
const profileDescriprion = document.querySelector('.profile__description')

const profileEditButton = document.querySelector('.profile__edit-btn')
const postAddButton = document.querySelector('.profile__add-btn')

const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popupAddPost = document.querySelector('.popup_type_add-post')
const popupImage = document.querySelector('.popup_type_image')

const profileEditForm = popupEditProfile.querySelector('.popup__form')
const profileEditInputName = profileEditForm.querySelector(
	'.popup__input_type_name'
)
const profileEditInputDescription = profileEditForm.querySelector(
	'.popup__input_type_descr'
)

const postAddForm = popupAddPost.querySelector('.popup__form')
const postAddInputName = postAddForm.querySelector('.popup__input_type_place')
const postAddInputLink = postAddForm.querySelector('.popup__input_type_link')

const popupImageElement = popupImage.querySelector('.popup__image')
const popupImageTitle = popupImage.querySelector('.popup__image-title')

const popupCloseElements = [
	...Array.from(document.querySelectorAll('.popup__close-btn')),
	...Array.from(document.querySelectorAll('.popup__overlay')),
]

const VALIDATE_SETTINGS = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__save-btn',
	inactiveButtonClass: 'popup__save-btn_inactive',
	inputErrorClass: 'popup__input_invalid',
	errorClass: 'popup__error_active',
}

const templatePost = document
	.querySelector('#post')
	.content.querySelector('.post')

const posts = document.querySelector('.posts')

let openedPopup = null

function openPopup(popup) {
	openedPopup = popup
	document.addEventListener('keydown', handleKeyDown)
	popup.classList.add('popup_opened')
	const formElement = popup.querySelector(VALIDATE_SETTINGS.formSelector)
	if (!formElement) return
	const buttonElement = formElement.querySelector(
		VALIDATE_SETTINGS.submitButtonSelector
	)
	if (!buttonElement) return
	const inputList = Array.from(
		formElement.querySelectorAll(VALIDATE_SETTINGS.inputSelector)
	)
	toggleSubmitButtonState(
		inputList,
		buttonElement,
		VALIDATE_SETTINGS.inactiveButtonClass
	)
}
function closePopup(popup) {
	openedPopup = null
	document.removeEventListener('keydown', handleKeyDown)
	popup.classList.remove('popup_opened')
}

function handleSubmitProfileEditForm(evt) {
	profileName.textContent = profileEditInputName.value
	profileDescriprion.textContent = profileEditInputDescription.value
	evt.preventDefault()
	closePopup(popupEditProfile)
}

function handleSubmitAddPostForm(evt) {
	const name = postAddInputName.value
	const link = postAddInputLink.value
	posts.prepend(getCardMurkup(name, link))
	evt.preventDefault()
	closePopup(popupAddPost)
}

function handleProfileEditButtonClick() {
	profileEditInputName.value = profileName.textContent
	profileEditInputDescription.value = profileDescriprion.textContent
	openPopup(popupEditProfile)
}

function handlePostAddButtonClick() {
	postAddInputName.value = ''
	postAddInputLink.value = ''
	openPopup(popupAddPost)
}

function handlePopupCloseClick(evt) {
	evt.stopPropagation()
	closePopup(evt.target.closest('.popup'))
}

function getCardMurkup({ name, link }) {
	const card = templatePost.cloneNode(true)

	const image = card.querySelector('.post__image')
	image.src = link
	image.alt = name
	image.addEventListener('click', () => {
		popupImageElement.src = link
		popupImageElement.alt = name
		popupImageTitle.textContent = name
		openPopup(popupImage)
	})

	const title = card.querySelector('.post__title')
	title.textContent = name

	const likeButton = card.querySelector('.post__like')
	likeButton.addEventListener('click', (evt) =>
		evt.target.classList.toggle('post__like_active')
	)
	const removeButton = card.querySelector('.post__remove')
	removeButton.addEventListener('click', (evt) =>
		evt.target.closest('.post').remove()
	)

	return card
}

function handleKeyDown({ key }) {
	switch (key) {
		case 'Escape':
			return closePopup(openedPopup)
	}
}

profileEditButton.addEventListener('click', handleProfileEditButtonClick)

postAddButton.addEventListener('click', handlePostAddButtonClick)

popupCloseElements.forEach((el) =>
	el.addEventListener('click', handlePopupCloseClick)
)

profileEditForm.addEventListener('submit', handleSubmitProfileEditForm)
postAddForm.addEventListener('submit', handleSubmitAddPostForm)

initialCards.forEach((card) => posts.append(getCardMurkup(card)))

enableValidation(VALIDATE_SETTINGS)
