import initialCards from './cards.js'
import Card from './Card.js'
import { openPopup, closePopup } from './utils.js'
import { VALIDATE_SETTINGS } from './constants.js'
import FormValidator from './FormValidator.js'

const profileName = document.querySelector('.profile__name')
const profileDescriprion = document.querySelector('.profile__description')

const profileEditButton = document.querySelector('.profile__edit-btn')
const postAddButton = document.querySelector('.profile__add-btn')

const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popupAddPost = document.querySelector('.popup_type_add-post')

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

const popups = Array.from(document.querySelectorAll('.popup'))

const posts = document.querySelector('.posts')

const formValidators = {}

const popupImage = document.querySelector('.popup_type_image')
const popupImageElement = popupImage.querySelector('.popup__image')
const popupImageTitle = popupImage.querySelector('.popup__image-title')

function handleCardClick(name, link) {
	popupImageElement.src = link
	popupImageElement.alt = name
	popupImageTitle.textContent = name
	openPopup(popupImage)
}

function handleSubmitProfileEditForm(evt) {
	profileName.textContent = profileEditInputName.value
	profileDescriprion.textContent = profileEditInputDescription.value
	evt.preventDefault()
	closePopup(popupEditProfile)
}

function handleSubmitAddPostForm(evt) {
	evt.preventDefault()
	const cardData = {
		name: postAddInputName.value,
		link: postAddInputLink.value,
	}
	posts.prepend(getCardMurkup(cardData))
	postAddForm.reset()
	closePopup(popupAddPost)
}

function handleProfileEditButtonClick() {
	profileEditInputName.value = profileName.textContent
	profileEditInputDescription.value = profileDescriprion.textContent
	formValidators[profileEditForm.getAttribute('name')].resetValidation()
	openPopup(popupEditProfile)
}

function handlePostAddButtonClick() {
	postAddForm.reset()
	formValidators[postAddForm.getAttribute('name')].resetValidation()
	openPopup(popupAddPost)
}

function handlePopupClick(evt) {
	if (
		evt.target.classList.contains('popup') ||
		evt.target.classList.contains('popup__close-btn')
	) {
		closePopup(evt.currentTarget)
	}
}

function getCardMurkup({ name, link }) {
	const card = new Card({
		name,
		link,
		templateSelector: '#post',
		handleCardClick,
	})
	return card.getMarkup()
}

profileEditButton.addEventListener('click', handleProfileEditButtonClick)

postAddButton.addEventListener('click', handlePostAddButtonClick)

popups.forEach((popup) => popup.addEventListener('click', handlePopupClick))

profileEditForm.addEventListener('submit', handleSubmitProfileEditForm)
postAddForm.addEventListener('submit', handleSubmitAddPostForm)

initialCards.forEach((card) => posts.append(getCardMurkup(card)))

const forms = [profileEditForm, postAddForm]
forms.forEach((formElement) => {
	const validator = new FormValidator({
		settings: VALIDATE_SETTINGS,
		formElement,
	})
	validator.enableValidation()
})

function enableValidation(settings) {
	const formList = Array.from(document.querySelectorAll(settings.formSelector))
	formList.forEach((formElement) => {
		const validator = new FormValidator({
			settings,
			formElement,
		})
		const formName = formElement.getAttribute('name')
		formValidators[formName] = validator
		validator.enableValidation()
	})
}

enableValidation(VALIDATE_SETTINGS)
