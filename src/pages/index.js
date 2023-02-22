import '../pages/index.css'

import {
	VALIDATE_SETTINGS,
	profileEditButton,
	profileAddPost,
	avatarEditButton,
	SUBMIT_BUTTON_STATE,
} from '../utils/constants.js'
import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../utils/Api.js'
import PopupConfirm from '../components/PopupConfirm'

async function startApp() {
	const api = new Api({
		baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
		headers: {
			authorization: 'e32193da-5eae-4794-b26e-ef37bd7713ab',
			'Content-Type': 'application/json',
		},
	})

	const formValidators = {}
	enableValidation(VALIDATE_SETTINGS)

	const popupTypeImage = new PopupWithImage('.popup_type_image')

	const popupTypeEditProfile = new PopupWithForm(
		'.popup_type_edit-profile',
		({ name, description }, updateButtonText, close) => {
			api
				.setUserInfo({ name, about: description })
				.then(({ name, about }) => {
					userInfo.setUserInfo({ name, description: about })
					close()
				})
				.catch((error) => console.log(error))
				.finally(() => updateButtonText(SUBMIT_BUTTON_STATE.Idle))
		},
		formValidators.profileEdit.resetValidation.bind(formValidators.profileEdit),
		{
			[SUBMIT_BUTTON_STATE.Idle]: 'Сохранить',
			[SUBMIT_BUTTON_STATE.Loading]: 'Сохранение...',
		}
	)

	const popupTypeAddPost = new PopupWithForm(
		'.popup_type_add-post',
		({ place, link }, updateButtonText, close) => {
			api
				.addCard({ name: place, link })
				.then((card) => {
					cardList.addItem(createCard(card))
					close()
				})
				.catch((error) => console.log(error))
				.finally(() => updateButtonText(SUBMIT_BUTTON_STATE.Idle))
		},
		formValidators.addPost.resetValidation.bind(formValidators.addPost),
		{
			[SUBMIT_BUTTON_STATE.Idle]: 'Создать',
			[SUBMIT_BUTTON_STATE.Loading]: 'Создание...',
		}
	)

	const popupTypeDeleteConfirm = new PopupConfirm('.popup_type_delete-confirm')

	const popupTypeUpdateAvatar = new PopupWithForm(
		'.popup_type_update-avatar',
		({ link }, updateButtonText, close) => {
			api
				.setUserAvatar(link)
				.then(({ avatar }) => {
					userInfo.setUserAvatar(avatar)
					close()
				})
				.catch((error) => console.log(error))
				.finally(() => updateButtonText(SUBMIT_BUTTON_STATE.Idle))
		},
		formValidators.updateAvatar.resetValidation.bind(
			formValidators.updateAvatar
		),
		{
			[SUBMIT_BUTTON_STATE.Idle]: 'Сохранить',
			[SUBMIT_BUTTON_STATE.Loading]: 'Сохранение...',
		}
	)

	const userInfo = new UserInfo({
		nameSelector: '.profile__name',
		descriptionSelector: '.profile__description',
		avatarSelector: '.avatar__image',
	})
	let userId
	await api
		.getUserInfo()
		.then(({ _id, name, about, avatar }) => {
			userId = _id
			userInfo.setUserInfo({ name, description: about })
			userInfo.setUserAvatar(avatar)
		})
		.catch((error) => console.log(error))

	let initialCards = []
	await api
		.getInitialCards()
		.then((cards) => (initialCards = cards))
		.catch((error) => console.log(error))
	const cardList = new Section(
		{
			items: initialCards,
			renderer: (card) => {
				cardList.addItem(createCard(card))
			},
		},
		'.posts'
	)
	cardList.renderItems()

	profileEditButton.addEventListener('click', () => {
		const values = userInfo.getUserInfo()
		popupTypeEditProfile.open(values)
	})
	profileAddPost.addEventListener('click', () => popupTypeAddPost.open())
	avatarEditButton.addEventListener('click', () => popupTypeUpdateAvatar.open())

	function handleCardClick(cardData) {
		popupTypeImage.open(cardData)
	}

	function handleCardLike(isLiked, cardId, updateLikeState) {
		const apiFunction = isLiked ? api.deleteCardLike : api.addCardLike
		apiFunction
			.call(api, cardId)
			.then(({ likes }) => {
				updateLikeState(likes)
			})
			.catch((error) => console.log(error))
	}

	function handleCardDelete(cardId, deleteCard) {
		popupTypeDeleteConfirm.open(() => {
			api
				.deleteCard(cardId)
				.then(deleteCard)
				.catch((error) => console.log(error))
		})
	}

	function createCard({ _id, owner, name, link, likes }) {
		const card = new Card({
			userId,
			_id,
			name,
			link,
			likes,
			templateSelector: '#post',
			handleCardClick,
			deleteAvailable: owner._id === userId,
			handleCardDelete,
			handleCardLike,
		})
		const cardElement = card.getMarkup()
		return cardElement
	}

	function enableValidation(settings) {
		const formList = Array.from(
			document.querySelectorAll(settings.formSelector)
		)
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
}

startApp()
