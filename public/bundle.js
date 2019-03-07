/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: createCardElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardElem", function() { return createCardElem; });
// Делаю клоннод подходящей карточки
const createTemplateCard = () => {
  const createEmptyTemplate = document.createElement(`template`);
  createEmptyTemplate.id = `film-card`;
  const clonedNode = document.querySelector(`.film-card`).cloneNode(true);
  createEmptyTemplate.content.appendChild(clonedNode);
  document.body.insertBefore(createEmptyTemplate, document.querySelector(`.main`));
}; // Работаю с инсертом фрагмента в документ


createTemplateCard();

const createCardTemp = () => {
  const cardNode = document.querySelector(`#film-card`).content.querySelector(`.film-card`).cloneNode(true);
  const frag = document.createDocumentFragment();
  return frag.appendChild(cardNode);
}; // Вычищаю мусор с клон ноды и добавляю аттрибуты из мока

/* @param = принимает на вход массив сгенерированных данных */


const createCardElem = arrList => {
  const cardTemplate = createCardTemp();
  cardTemplate.querySelector(`.film-card__title`).innerHTML = arrList.name;
  cardTemplate.querySelector(`.film-card__poster`).src = `./images/posters/${arrList.picture}.jpg`;
  return cardTemplate;
};



/***/ }),

/***/ "./src/filter-tabs.js":
/*!****************************!*\
  !*** ./src/filter-tabs.js ***!
  \****************************/
/*! exports provided: createFilterElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterElem", function() { return createFilterElem; });
// Функция, возвращает элемент фильтра, принимает на вход текст, число и айдишник фильтра с опциональными статусами

/* @param Текст из массива, название ссылки
*  @param Результирующее количество, выводящееся справа от текста. Если параметр эмпти - ничего не выводится
*  @param Якорь фильтра, нужен будет в дальнейшем построении
*  @param Префикс для особенных пунктов фильтра, например для Stats*/
const createFilterElem = (linkText, linkAmount = false, linkAnchor, linkPrefix = false) => `
    <a
      class="main-navigation__item ${linkPrefix !== false ? `main-navigation__item--${linkPrefix}` : ``}"
      href="${linkAnchor}"
      >
      ${linkText}${linkAmount !== false ? `(${linkAmount})` : ``}
    </a>
  `;

/***/ }),

/***/ "./src/get-data.js":
/*!*************************!*\
  !*** ./src/get-data.js ***!
  \*************************/
/*! exports provided: MOCK_LIST, FILTER_LIST, generateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_LIST", function() { return MOCK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LIST", function() { return FILTER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateData", function() { return generateData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
 // Лист переменных данных карточек

const MOCK_LIST = {
  "pictures": [`blue-blazes`, `fuga-da-new-york`, `accused`, `blackmail`, `moonrise`],
  "names": [`Incredibles 2`, `The Assassination Of Jessie James By The Coward Robert Ford`]
}; // Массив с данными фильтра

const FILTER_LIST = [{
  "text": `All movies`,
  "amount": _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 20),
  "id": `#all`
}, {
  "text": `Watchlist`,
  "amount": _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 20),
  "id": `#watchlist`
}, {
  "text": `History`,
  "amount": _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 20),
  "id": `#history`
}, {
  "text": `Favorites`,
  "amount": _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 20),
  "id": `#favorites`
}, {
  "text": `Stats`,
  "prefix": `additional`,
  "id": `#stats`
}]; //  Генерирую мок и прогоняю по кейсам для дедлайнов и шаблона оформления

/* @param принимает на вход мок данных */

const generateData = obj => {
  let data = {};
  data.picture = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(obj.pictures);
  data.name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(obj.names);
  return data;
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data.js */ "./src/get-data.js");
/* harmony import */ var _filter_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-tabs */ "./src/filter-tabs.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/card.js");
// Собираю импорты



 // Счетсчик количества фильтров

const FILTER_COUNT = 5; // Объявляю врапперы для элементов разметки

const FILTER_WRAPPER = document.querySelector(`.main-navigation`);
const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`);
const EXTRA_FILMS = document.querySelectorAll(`.films-list--extra .films-list__container`); // На лоаде карточек вычищаю ненужные ноды;

const presetExtraFilms = () => {
  const itemsNode = document.querySelectorAll(`.films-list--extra .films-list__container .film-card`);
  itemsNode.forEach(node => {
    node.classList.add(`film-card--no-controls`);
    let nodeDescription = node.querySelector(`.film-card__description`);
    let nodeActions = node.querySelector(`.film-card__controls`);
    node.removeChild(nodeDescription);
    node.removeChild(nodeActions);
  });
}; // Однострочная функция очищающая блок с карточками при клике по табу и лоаду страницы, делаю клоннод с одной из карточек


const clearCanvas = () => {
  CARD_WRAPPER.innerHTML = ``;
}; // Объявляю массив для карточек


let cardList = []; // Собираю все в объект

/* @param Количество карточек */

const createCardList = repeats => {
  for (let i = 0; i < repeats; i++) {
    let card = Object(_card__WEBPACK_IMPORTED_MODULE_3__["createCardElem"])(_get_data_js__WEBPACK_IMPORTED_MODULE_1__["generateData"](_get_data_js__WEBPACK_IMPORTED_MODULE_1__["MOCK_LIST"]));
    cardList.push(card);
  }

  return cardList;
}; // Размещаю в дом

/* @param Принимает нодлист из карточек
*  @param Принимает ноду, в которую вставляет карточки */


const placeCards = (arr, parentNode) => {
  for (let i = 0; i < arr.length; i++) {
    parentNode.appendChild(arr[i]);
  }
}; // Циклом перезаполняю фильтр


const renderFilter = () => {
  for (let i = 0; i < FILTER_COUNT; i++) {
    FILTER_WRAPPER.insertAdjacentHTML(`beforeend`, Object(_filter_tabs__WEBPACK_IMPORTED_MODULE_2__["createFilterElem"])(_get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].text, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].amount, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].id, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].prefix));
  }
}; // Эвентлистнеры для клика


const handlePinClick = () => {
  // Очищаю табы
  const filterPins = document.querySelectorAll(`.main-navigation__item`);
  filterPins.forEach((filterPin, i) => {
    if (i === 0) {
      filterPin.classList.add(`main-navigation__item--active`);
    }

    filterPin.addEventListener(`click`, evt => {
      const targetPin = evt.target;
      cardList = [];
      createCardList(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 8));
      clearCanvas();
      placeCards(cardList, CARD_WRAPPER);
      filterPins.forEach(clearList => {
        clearList.classList.remove(`main-navigation__item--active`);
      });
      targetPin.classList.add(`main-navigation__item--active`);
    });
  });
}; // Выполняю стэк


FILTER_WRAPPER.innerHTML = ``;
renderFilter();
cardList = [];
createCardList(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(2, 6));
clearCanvas();
placeCards(cardList, CARD_WRAPPER); // Форыч, очищающий стек карточек, генерирует новые и вставляет их во врапперы. Думал сделать через копирование массива и его слайс, но скриптовая часть сохраняет ссылки на ноды и в итоге они туда-сюда скачут по блокам.

EXTRA_FILMS.forEach(cardWrapper => {
  cardList = [];
  createCardList(2);
  cardWrapper.innerHTML = ``;
  placeCards(cardList, cardWrapper);
}); // Финально рендерю и развешиваю листенеры

presetExtraFilms();
handlePinClick();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Утилитарные функции получения рандомные значений для мока
const utilsList = {
  getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min),
  getRandFromArr: arr => {
    const index = utilsList.getRandomNumber(0, arr.length);
    return arr[index];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utilsList);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map