const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
]

const profileNameEl = document.querySelector('.profile__name')
const profileDescrEl = document.querySelector('.profile__description')

const profileEditBtnEl = document.querySelector('.profile__edit-btn')
const addPostBtnEl = document.querySelector('.profile__add-btn')

const popupEditProfile = document.querySelector('.popup_type_edit-profile')
const popupAddPost = document.querySelector('.popup_type_add-post')
const popupImage = document.querySelector('.popup_type_image')

const editProfileFormEl = popupEditProfile.querySelector('.popup__form')
const editProfileInputNameEl = editProfileFormEl.querySelector(
	'.popup__input_type_name'
)
const editProfileInputDescriptionEl = editProfileFormEl.querySelector(
	'.popup__input_type_descr'
)

const addPostFormEl = popupAddPost.querySelector('.popup__form')
const addPostInputNameEl = addPostFormEl.querySelector(
	'.popup__input_type_place'
)
const addPostInputLinkEl = addPostFormEl.querySelector(
	'.popup__input_type_link'
)

const popupImageImgEl = popupImage.querySelector('.popup__image')
const popupImageTitleEl = popupImage.querySelector('.popup__image-title')

const popupCloseBtns = document.querySelectorAll('.popup__close-btn')

const postsEl = document.querySelector('.posts')

function togglePopup(popup) {
	popup.classList.toggle('popup_opened')
}

function saveProfile(evt) {
	profileNameEl.textContent = editProfileInputNameEl.value
	profileDescrEl.textContent = editProfileInputDescriptionEl.value
	evt.preventDefault()
	togglePopup(popupEditProfile)
}

function addPost(evt) {
	const name = addPostInputNameEl.value
	const link = addPostInputLinkEl.value
	postsEl.prepend(getCardMurkup(name, link))
	evt.preventDefault()
	togglePopup(popupAddPost)
}

function getCardMurkup(name, link) {
	const templateEl = document.querySelector('#post').content
	const cardEl = templateEl.querySelector('.post').cloneNode(true)

	const imageEl = cardEl.querySelector('.post__image')
	imageEl.src = link
	imageEl.alt = name
	imageEl.addEventListener('click', () => {
		popupImageImgEl.src = link
		popupImageImgEl.alt = name
		popupImageTitleEl.textContent = name
		togglePopup(popupImage)
	})

	const titleEl = cardEl.querySelector('.post__title')
	titleEl.textContent = name

	const likeBtnEl = cardEl.querySelector('.post__like')
	likeBtnEl.addEventListener('click', (evt) =>
		evt.target.classList.toggle('post__like_active')
	)
	const removeBtnEl = cardEl.querySelector('.post__remove')
	removeBtnEl.addEventListener('click', (evt) =>
		evt.target.closest('.post').remove()
	)

	return cardEl
}

profileEditBtnEl.addEventListener('click', () => {
	editProfileInputNameEl.value = profileNameEl.textContent
	editProfileInputDescriptionEl.value = profileDescrEl.textContent
	togglePopup(popupEditProfile)
})

addPostBtnEl.addEventListener('click', () => {
	addPostInputNameEl.value = ''
	addPostInputLinkEl.value = ''
	togglePopup(popupAddPost)
})

popupCloseBtns.forEach((el) =>
	el.addEventListener('click', (evt) => {
		togglePopup(evt.target.closest('.popup'))
	})
)

editProfileFormEl.addEventListener('submit', saveProfile)
addPostFormEl.addEventListener('submit', addPost)

initialCards.forEach(({ name, link }) =>
	postsEl.append(getCardMurkup(name, link))
)
