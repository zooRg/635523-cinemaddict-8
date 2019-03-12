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
/*! exports provided: createTemplateCard, createCardElem, placeCards, createCardList, presetExtraFilms, CARD_WRAPPER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTemplateCard", function() { return createTemplateCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardElem", function() { return createCardElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeCards", function() { return placeCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardList", function() { return createCardList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetExtraFilms", function() { return presetExtraFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_WRAPPER", function() { return CARD_WRAPPER; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data.js */ "./src/get-data.js");

 // Делаю клоннод подходящей карточки

const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`); // Объявляю массив для карточек

const createTemplateCard = () => {
  const createEmptyTemplate = document.createElement(`template`);
  createEmptyTemplate.id = `film-card`;
  const clonedNode = document.querySelector(`.film-card`).cloneNode(true);
  createEmptyTemplate.content.appendChild(clonedNode);
  document.body.insertBefore(createEmptyTemplate, document.querySelector(`.main`));
}; // Работаю с инсертом фрагмента в документ.


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
  cardTemplate.querySelector(`.film-card__year`).innerHTML = arrList.year;
  cardTemplate.querySelector(`.film-card__duration`).innerHTML = `${Math.floor(arrList.dur / _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR)}h&nbsp;${arrList.dur - Math.floor(arrList.dur / _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR) * _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR}m`;
  cardTemplate.querySelector(`.film-card__comments`).innerHTML = `${arrList.comments} comments`;
  cardTemplate.querySelector(`.film-card__description`).innerHTML = arrList.description;
  cardTemplate.querySelector(`.film-card__genre`).innerHTML = arrList.genre;
  cardTemplate.querySelector(`.film-card__rating`).innerHTML = arrList.rating;
  return cardTemplate;
}; // Собираю все в объект

/* @param Количество карточек */


const createCardList = repeats => {
  for (let i = 0; i < repeats; i++) {
    let card = createCardElem(_get_data_js__WEBPACK_IMPORTED_MODULE_1__["generateData"](_get_data_js__WEBPACK_IMPORTED_MODULE_1__["MOCK_LIST"]));
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList.push(card);
  }

  return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList;
}; // Размещаю в дом

/* @param Принимает нодлист из карточек
*  @param Принимает ноду, в которую вставляет карточки */


const placeCards = (arr, parentNode) => {
  for (let i = 0; i < arr.length; i++) {
    parentNode.appendChild(arr[i]);
  }
}; // На лоаде карточек вычищаю ненужные ноды;


const presetExtraFilms = () => {
  const itemsNode = document.querySelectorAll(`.films-list--extra .films-list__container .film-card`);
  itemsNode.forEach(node => {
    node.classList.add(`film-card--no-controls`);
    let nodeDescription = node.querySelector(`.film-card__description`);
    let nodeActions = node.querySelector(`.film-card__controls`);
    node.removeChild(nodeDescription);
    node.removeChild(nodeActions);
  });
};



/***/ }),

/***/ "./src/filter-tabs.js":
/*!****************************!*\
  !*** ./src/filter-tabs.js ***!
  \****************************/
/*! exports provided: createFilterElem, handlePinClick, renderFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterElem", function() { return createFilterElem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePinClick", function() { return handlePinClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFilter", function() { return renderFilter; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data.js */ "./src/get-data.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/card.js");


 // Счетчик количества фильтров

const FILTER_COUNT = 5; // Функция, возвращает элемент фильтра, принимает на вход текст, число и айдишник фильтра с опциональными статусами

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
  `; // Циклом перезаполняю фильтр


const renderFilter = () => {
  // Объявляю врапперы для элементов разметки
  const FILTER_WRAPPER = document.querySelector(`.main-navigation`);

  for (let i = 0; i < FILTER_COUNT; i++) {
    FILTER_WRAPPER.insertAdjacentHTML(`beforeend`, createFilterElem(_get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].text, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].amount, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].id, _get_data_js__WEBPACK_IMPORTED_MODULE_1__["FILTER_LIST"][i].prefix));
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
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList = [];
      Object(_card__WEBPACK_IMPORTED_MODULE_2__["createCardList"])(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 8));
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].clearCanvas();
      Object(_card__WEBPACK_IMPORTED_MODULE_2__["placeCards"])(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList, _card__WEBPACK_IMPORTED_MODULE_2__["CARD_WRAPPER"]);
      filterPins.forEach(clearList => {
        clearList.classList.remove(`main-navigation__item--active`);
      });
      targetPin.classList.add(`main-navigation__item--active`);
    });
  });
};



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

const RESTRICTIONS_LIST = {
  RATING: {
    MIN: 1,
    MAX: 10
  },
  YEAR: {
    MIN: 1971,
    MAX: 2019
  },
  DUR: {
    MIN: 90,
    MAX: 210
  },
  MAX_COMM: 3,
  DESCRIPTION_LEN: 3
};
const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna,
  non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex,
  convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit,
  eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.
  Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`.`);
const MOCK_LIST = {
  "pictures": [`blue-blazes`, `fuga-da-new-york`, `accused`, `blackmail`, `moonrise`],
  "names": [`Incredibles 2`, `The Assassination Of Jessie James By The Coward Robert Ford`, `The Inception`, `Limitless`, `Tusk`, `A Clockwork Orange`, `The Shining`, `True Detective`, `Green Mile`, `The King's Speech`, `King Lion`, `Leon`, `The Shawshank Redemption`, `Gladiator`, `Green Book`],
  "genres": [`Action`, `Drama`, `Detective`, `Animation`, `Biography`, `Fantasy`]
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
}];

const getRandomDescription = () => {
  return new Array(RESTRICTIONS_LIST.DESCRIPTION_LEN).fill().map(() => DESCRIPTION[_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(0, DESCRIPTION.length - 1)]).join(` `);
}; //  Генерирую мок и прогоняю по кейсам для дедлайнов и шаблона оформления

/* @param принимает на вход мок данных */


const generateData = obj => {
  let data = {};
  data.picture = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(obj.pictures);
  data.name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(obj.names);
  data.genre = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(obj.genres);
  data.year = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(RESTRICTIONS_LIST.YEAR.MIN, RESTRICTIONS_LIST.YEAR.MAX);
  data.comments = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(1, 20);
  data.description = getRandomDescription();
  data.dur = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(RESTRICTIONS_LIST.DUR.MIN, RESTRICTIONS_LIST.DUR.MAX);
  data.rating = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(RESTRICTIONS_LIST.RATING.MIN, RESTRICTIONS_LIST.RATING.MAX);
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
/* harmony import */ var _filter_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-tabs */ "./src/filter-tabs.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./src/card.js");
// Собираю импорты


 // Объявляю врапперы для элементов разметки

const FILTER_WRAPPER = document.querySelector(`.main-navigation`);
const EXTRA_FILMS = document.querySelectorAll(`.films-list--extra .films-list__container`); // Создаю темплейт карточки

Object(_card__WEBPACK_IMPORTED_MODULE_2__["createTemplateCard"])(); // Выполняю стэк

FILTER_WRAPPER.innerHTML = ``;
Object(_filter_tabs__WEBPACK_IMPORTED_MODULE_1__["renderFilter"])();
_utils__WEBPACK_IMPORTED_MODULE_0__["default"].clearCanvas();
_utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList = [];
Object(_card__WEBPACK_IMPORTED_MODULE_2__["createCardList"])(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(2, 6));
Object(_card__WEBPACK_IMPORTED_MODULE_2__["placeCards"])(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList, _card__WEBPACK_IMPORTED_MODULE_2__["CARD_WRAPPER"]); // Форыч, очищающий стек карточек, генерирует новые и вставляет их во врапперы. Думал сделать через копирование массива и его слайс, но скриптовая часть сохраняет ссылки на ноды и в итоге они туда-сюда скачут по блокам.

EXTRA_FILMS.forEach(cardWrapper => {
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList = [];
  Object(_card__WEBPACK_IMPORTED_MODULE_2__["createCardList"])(2);
  cardWrapper.innerHTML = ``;
  Object(_card__WEBPACK_IMPORTED_MODULE_2__["placeCards"])(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].cardList, cardWrapper);
}); // Финально рендерю и развешиваю листенеры

Object(_card__WEBPACK_IMPORTED_MODULE_2__["presetExtraFilms"])();
Object(_filter_tabs__WEBPACK_IMPORTED_MODULE_1__["handlePinClick"])();

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
const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`);
const utilsList = {
  KEY_CODE: {
    ENTER: 13,
    ESC: 27
  },
  MIN_IN_HOUR: 60,
  cardList: [],
  getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min),
  getRandFromArr: arr => {
    const index = utilsList.getRandomNumber(0, arr.length);
    return arr[index];
  },
  // Однострочная функция очищающая блок с карточками при клике по табу и лоаду страницы, делаю клоннод с одной из карточек
  clearCanvas: () => {
    CARD_WRAPPER.innerHTML = ``;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (utilsList);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map