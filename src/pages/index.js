import '../pages/index.css'

import {
	VALIDATE_SETTINGS,
	profileEditButton,
	profileAddPost,
} from '../utils/constants.js'
import FormValidator from '../components/FormValidator.js'
import initialCards from '../utils/cards.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

const formValidators = {}
enableValidation(VALIDATE_SETTINGS)

const userInfo = new UserInfo({
	nameSelector: '.profile__name',
	descriptionSelector: '.profile__description',
})

const cardList = new Section(
	{
		items: initialCards,
		renderer: (item) => {
			const cardElement = createCard(item)
			cardList.addItem(cardElement)
		},
	},
	'.posts'
)
cardList.renderItems()

const popupTypeImage = new PopupWithImage('.popup_type_image')

const popupTypeEditProfile = new PopupWithForm(
	'.popup_type_edit-profile',
	(values) => {
		userInfo.setUserInfo(values)
	},
	formValidators.profileEdit.resetValidation.bind(formValidators.profileEdit)
)

const popupTypeAddPost = new PopupWithForm(
	'.popup_type_add-post',
	({ place, link }) => {
		const cardElement = createCard({ name: place, link })
		cardList.addItem(cardElement)
	},
	formValidators.addPost.resetValidation.bind(formValidators.addPost)
)

profileEditButton.addEventListener('click', () => {
	const values = userInfo.getUserInfo()
	popupTypeEditProfile.open(values)
})
profileAddPost.addEventListener('click', () => popupTypeAddPost.open())

function handleCardClick(cardData) {
	popupTypeImage.open(cardData)
}

function createCard({ name, link }) {
	const card = new Card({
		name,
		link,
		templateSelector: '#post',
		handleCardClick,
	})
	const cardElement = card.getMarkup()
	return cardElement
}

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
