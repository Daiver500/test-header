/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainMenu": function() { return /* binding */ mainMenu; }
/* harmony export */ });


var mainMenu = function mainMenu() {
  var openMenuSvg = document.querySelector('.header__toggle-open');
  var closeMenuSvg = document.querySelector('.header__toggle-close');
  var navigationMobile = document.querySelector('.header-list');
  var body = document.querySelector('.page');

  var openMenu = function openMenu() {
    navigationMobile.classList.add('is-active');
    openMenuSvg.classList.add('is-hidden');
    closeMenuSvg.classList.remove('is-hidden');
    body.classList.add('no-scroll');
  };

  var closeMenu = function closeMenu() {
    navigationMobile.classList.remove('is-active');
    openMenuSvg.classList.remove('is-hidden');
    closeMenuSvg.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  };

  openMenuSvg.addEventListener('click', openMenu);
  closeMenuSvg.addEventListener('click', closeMenu);
};



/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCards": function() { return /* binding */ createCards; }
/* harmony export */ });
var instrumentsArray = [{
  'id': 1,
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}, {
  'id': 2,
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}, {
  'id': 3,
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}, {
  'id': 4,
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}, {
  'id': 5,
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}, {
  'webp': 'img/instrument-4.webp',
  'webp2x': 'img/instrument-4@2x.webp 2x',
  'photo': 'img/instrument-4.jpg',
  'photo2x': 'img/instrument-4@2x.jpg 2x',
  'title': 'Дрель',
  'text': 'Супер дрель для сверления отверстий в стенах по утрам в выходные. Бесшумная'
}];
var cardsWrapper = document.querySelector('.catalog-list');

var createCards = function createCards() {
  var createCard = function createCard(item) {
    var newCard = document.createElement('li');
    newCard.classList.add('catalog-card');
    newCard.innerHTML = "\n    <div class=\"catalog-card__image-wrapper\">\n      <picture>\n        <source type=\"image/webp\" srcset=\"".concat(item.webp, ", ").concat(item.webp2x, "\" />\n        <img class=\"catalog-card__image\" src=\"").concat(item.photo, "\" srcset=\"").concat(item.photo2x, "\" alt=\"employer card\" width=\"300\" height=\"300\">\n      </picture>\n    </div>\n    <div class=\"catalog-card__details\">\n      <p class=\"title title--medium catalog-card__title\">").concat(item.title, "</p>\n      <div class=\"catalog-card__text\">\n        <p>").concat(item.text, "</p>\n      </div>\n    </div>\n    <a href=\"#\" class=\"link catalog-card__link\" aria-label=\"\u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\" target=\"_blank\"></a>");
    cardsWrapper.append(newCard);
  };

  var fillCardsList = function fillCardsList(array) {
    array.forEach(function (item) {
      createCard(item);
    });
  };

  fillCardsList(instrumentsArray);
};



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _create_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



window.addEventListener('DOMContentLoaded', function () {
  (0,_main_menu__WEBPACK_IMPORTED_MODULE_1__.mainMenu)();
  (0,_create_cards__WEBPACK_IMPORTED_MODULE_2__.createCards)();
});
}();
/******/ })()
;