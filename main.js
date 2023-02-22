/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector(".profile__edit-btn"),e=document.querySelector(".profile__add-btn"),n=document.querySelector(".avatar__edit"),r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_invalid",errorClass:"popup__error_active"},o={Idle:"idle",Loading:"loading"};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var u=function(){function t(e){var n=e.settings,r=e.formElement;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=n,this._formElement=r,this._inputsList=Array.from(r.querySelectorAll(n.inputSelector)),this._submitButtonElement=r.querySelector(n.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(t){return!t.validity.valid}))}},{key:"_enableSubmitButton",value:function(){this._submitButtonElement.classList.remove(this._settings.inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_disableSubmitButton",value:function(){this._submitButtonElement.classList.add(this._settings.inactiveButtonClass),this._submitButtonElement.setAttribute("disabled","")}},{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._settings.inputErrorClass),n.textContent=e,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._settings.inputErrorClass),e.classList.remove(this._settings.errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputsList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleSubmitButtonState()}))}))}},{key:"enableValidation",value:function(){this._toggleSubmitButtonState(),this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputsList.forEach((function(e){return t._hideInputError(e)})),this._disableSubmitButton()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e){var n=e.userId,r=e._id,o=e.name,i=e.link,a=e.likes,u=e.templateSelector,c=e.handleCardClick,l=e.deleteAvailable,s=e.handleCardDelete,f=e.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=n,this._id=r,this._name=o,this._link=i,this._likes=a,this._templateSelector=u,this._handleCardClick=c,this._deleteAvailable=l,this._handleCardDelete=s,this._handleCardLike=f}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".post").cloneNode(!0)}},{key:"_updateLikeState",value:function(t){this._likes=t,this._likeButtonElement.textContent=t.length,this._getIsLiked()?this._likeButtonElement.classList.add("post__like_active"):this._likeButtonElement.classList.remove("post__like_active")}},{key:"_removeElement",value:function(){this._element.remove()}},{key:"_getIsLiked",value:function(){return this._likes.map((function(t){return t._id})).includes(this._userId)}},{key:"_setEventListeners",value:function(){var t=this;this._imageElement.addEventListener("click",(function(){return t._handleCardClick({name:t._name,link:t._link})})),this._likeButtonElement.addEventListener("click",(function(){t._handleCardLike(t._getIsLiked(),t._id,t._updateLikeState.bind(t))})),this._removeButton.addEventListener("click",(function(){return t._handleCardDelete(t._id,t._removeElement.bind(t))}))}},{key:"getMarkup",value:function(){return this._element=this._getTemplate(),this._imageElement=this._element.querySelector(".post__image"),this._likeButtonElement=this._element.querySelector(".post__like"),this._removeButton=this._element.querySelector(".post__remove"),this._deleteAvailable||this._removeButton.remove(),this._setEventListeners(),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._likeButtonElement.textContent=this._likes.length,this._element.querySelector(".post__title").textContent=this._name,this._updateLikeState(this._likes),this._element}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._items.forEach((function(e){t._renderer(e)}))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e),this._handleEscCloseWithContext=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClick",value:function(t){var e=t.target.classList;(e.contains("popup")||e.contains("popup__close-btn"))&&this.close()}},{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseWithContext)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCloseWithContext)}},{key:"setEventListeners",value:function(){this._element.addEventListener("click",this._handleClick.bind(this))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._imageElement=e._element.querySelector(".popup__image"),e._imageTitleElement=e._element.querySelector(".popup__image-title"),e.setEventListeners(),e}return e=a,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._imageElement.src=n,this._imageElement.alt=e,this._imageTitleElement.textContent=e,_(S(a.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,i,a=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(i){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=a.call(this,t))._formElement=o._element.querySelector(".popup__form"),o._handleFormSubmit=e,o._inputList=Array.from(o._element.querySelectorAll(".popup__input")),o._resetValidation=n,o._buttonTexts=r,o._submitButton=o._formElement.querySelector('button[type="submit"]'),o.setEventListeners(),o}return e=u,n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){var n=e.name,r=e.value;t[n]=r})),t}},{key:"open",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(O(u.prototype),"open",this).call(this);var n=function(n){var r=t._inputList.find((function(t){return t.name===n}));if(void 0===r)return"continue";r.value=e[n]};for(var r in e)n(r)}},{key:"close",value:function(){L(O(u.prototype),"close",this).call(this),this._formElement.reset(),this._resetValidation()}},{key:"_updateButtonText",value:function(t){this._submitButton.textContent=this._buttonTexts[t]}},{key:"setEventListeners",value:function(){var t=this;L(O(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._updateButtonText(o.Loading),t._handleFormSubmit(t._getInputValues(),t._updateButtonText.bind(t),t.close.bind(t))}))}}],n&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.avatarSelector,r=e.nameSelector,o=e.descriptionSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(r),this._descriptionElement=document.querySelector(o),this._avatarElement=document.querySelector(n)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,description:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description;this._nameElement.textContent=e,this._descriptionElement.textContent=n}},{key:"setUserAvatar",value:function(t){this._avatarElement.src=t}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var R=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка! Код: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._handleResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"addCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteCardLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._handleResponse)}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=N(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function N(t){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},N(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=N(r);if(o){var n=N(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===U(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._confirmButton=e._element.querySelector(".popup__save-btn"),e.setEventListeners(),e}return e=a,(n=[{key:"open",value:function(t){this._handleConfirm=t,A(N(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;A(N(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(){t._handleConfirm(),t.close()}))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function F(){F=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new L(o||[]);return r(a,"_invoke",{value:S(t,n,u)}),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function y(){}var d={};c(d,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==e&&n.call(m,i)&&(d=m);var b=y.prototype=p.prototype=Object.create(d);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function o(r,i,a,u){var c=s(t[r],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==G(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=w(a,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function w(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=y,r(b,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:h,configurable:!0}),h.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(g.prototype),c(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new g(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function M(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===G(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function H(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function J(){var i;return i=F().mark((function i(){var a,c,l,f,p,y,d,v,m,b,_,g,S,E,k,L,j,O,C;return F().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return C=function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){var n=new u({settings:t,formElement:e}),r=e.getAttribute("name");p[r]=n,n.enableValidation()}))},O=function(t){var e=t._id,n=t.owner,r=t.name,o=t.link,i=t.likes;return new s({userId:g,_id:e,name:r,link:o,likes:i,templateSelector:"#post",handleCardClick:k,deleteAvailable:n._id===g,handleCardDelete:j,handleCardLike:L}).getMarkup()},j=function(t,e){m.open((function(){f.deleteCard(t).then(e).catch((function(t){return console.log(t)}))}))},L=function(t,e,n){(t?f.deleteCardLike:f.addCardLike).call(f,e).then((function(t){var e=t.likes;n(e)})).catch((function(t){return console.log(t)}))},k=function(t){y.open(t)},f=new R({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"e32193da-5eae-4794-b26e-ef37bd7713ab","Content-Type":"application/json"}}),p={},C(r),y=new w(".popup_type_image"),d=new P(".popup_type_edit-profile",(function(t,e,n){var r=t.name,i=t.description;f.setUserInfo({name:r,about:i}).then((function(t){var e=t.name,r=t.about;_.setUserInfo({name:e,description:r}),n()})).catch((function(t){return console.log(t)})).finally((function(){return e(o.Idle)}))}),p.profileEdit.resetValidation.bind(p.profileEdit),(M(a={},o.Idle,"Сохранить"),M(a,o.Loading,"Сохранение..."),a)),v=new P(".popup_type_add-post",(function(t,e,n){var r=t.place,i=t.link;f.addCard({name:r,link:i}).then((function(t){E.addItem(O(t)),n()})).catch((function(t){return console.log(t)})).finally((function(){return e(o.Idle)}))}),p.addPost.resetValidation.bind(p.addPost),(M(c={},o.Idle,"Создать"),M(c,o.Loading,"Создание..."),c)),m=new V(".popup_type_delete-confirm"),b=new P(".popup_type_update-avatar",(function(t,e,n){var r=t.link;f.setUserAvatar(r).then((function(t){var e=t.avatar;_.setUserAvatar(e),n()})).catch((function(t){return console.log(t)})).finally((function(){return e(o.Idle)}))}),p.updateAvatar.resetValidation.bind(p.updateAvatar),(M(l={},o.Idle,"Сохранить"),M(l,o.Loading,"Сохранение..."),l)),_=new T({nameSelector:".profile__name",descriptionSelector:".profile__description",avatarSelector:".avatar__image"}),i.next=16,f.getUserInfo().then((function(t){var e=t._id,n=t.name,r=t.about,o=t.avatar;g=e,_.setUserInfo({name:n,description:r}),_.setUserAvatar(o)})).catch((function(t){return console.log(t)}));case 16:return S=[],i.next=19,f.getInitialCards().then((function(t){return S=t})).catch((function(t){return console.log(t)}));case 19:(E=new h({items:S,renderer:function(t){E.addItem(O(t))}},".posts")).renderItems(),t.addEventListener("click",(function(){var t=_.getUserInfo();d.open(t)})),e.addEventListener("click",(function(){return v.open()})),n.addEventListener("click",(function(){return b.open()}));case 24:case"end":return i.stop()}}),i)})),J=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=i.apply(t,e);function a(t){H(o,n,r,a,u,"next",t)}function u(t){H(o,n,r,a,u,"throw",t)}a(void 0)}))},J.apply(this,arguments)}!function(){J.apply(this,arguments)}()})();