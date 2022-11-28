const profileNameEl = document.querySelector('.profile__name')
const profileDescrEl = document.querySelector('.profile__description')
const profileEditBtnEl = document.querySelector('.profile__edit-btn')
const popupEl = document.querySelector('.popup')
const popupCloseBtnEl = document.querySelector('.popup__close-btn')
const popupInputNameEl = document.querySelector('.popup__input_type_name')
const popupInputDescrEl = document.querySelector('.popup__input_type_descr')
const popupSaveBtnEl = document.querySelector('.popup__save-btn')

function togglePopup() {
	popupEl.classList.toggle('popup_opened')
	const isShow = popupEl.classList.contains('popup_opened')
	if (isShow) {
		popupInputNameEl.value = profileNameEl.textContent
		popupInputDescrEl.value = profileDescrEl.textContent
	}
}

function saveProfile(evt) {
	profileNameEl.textContent = popupInputNameEl.value
	profileDescrEl.textContent = popupInputDescrEl.value
	evt.preventDefault()
	togglePopup()
}

profileEditBtnEl.addEventListener('click', togglePopup)

popupCloseBtnEl.addEventListener('click', togglePopup)

popupSaveBtnEl.addEventListener('click', saveProfile)
