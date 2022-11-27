const profileNameEl = document.querySelector('.profile__name')
const profileDescrEl = document.querySelector('.profile__description')
const profileEditBtnEl = document.querySelector('.profile__edit-btn')
const popupEl = document.querySelector('.popup')
const popupCloseBtnEl = document.querySelector('.popup__close-btn')
const popupInputNameEl = document.querySelector('.popup__input_type_name')
const popupInputDescrEl = document.querySelector('.popup__input_type_descr')
const popupSaveBtnEl = document.querySelector('.popup__save-btn')

profileEditBtnEl.addEventListener('click', (evt) => {
	evt.preventDefault()
	togglePopup(true)
})

popupCloseBtnEl.addEventListener('click', (evt) => {
	evt.preventDefault()
	togglePopup(false)
})

popupSaveBtnEl.addEventListener('click', (evt) => {
	evt.preventDefault()
	profileNameEl.textContent = popupInputNameEl.value
	profileDescrEl.textContent = popupInputDescrEl.value
	togglePopup(false)
})

function togglePopup(isShow) {
	if (isShow) {
		popupInputNameEl.value = profileNameEl.textContent
		popupInputDescrEl.value = profileDescrEl.textContent
		popupEl.classList.add('popup_opened')
	} else popupEl.classList.remove('popup_opened')
}
