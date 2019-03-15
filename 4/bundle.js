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
/*! exports provided: renderCards, renderDefaultCards, renderTopRated, renderMostCommented, changeCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCards", function() { return renderCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDefaultCards", function() { return renderDefaultCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTopRated", function() { return renderTopRated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMostCommented", function() { return renderMostCommented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCards", function() { return changeCards; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data.js */ "./src/get-data.js");
/* harmony import */ var _film__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film */ "./src/film.js");
/* harmony import */ var _extra_film__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra-film */ "./src/extra-film.js");



 // Разбиваю по объектам утилитарные вещи: Количество карточек для основного блока, для Top rated и Top commented

const filmsContainers = document.querySelectorAll(`.${_utils__WEBPACK_IMPORTED_MODULE_0__["default"].classNames.FILMS_WRAPPER}`);
const AMOUNT_NUMBERS = {
  CARDS: 7,
  TOP: 2,
  MOST_COMMENTED: 2
};
const FILM_WRAPPER = {
  DEFAULT: filmsContainers[0],
  TOP_RATED: filmsContainers[1],
  MOST_COMMENTED: filmsContainers[2]
}; // Есть идеи по оптимизации, см. Readme.
// Создание классической карточки для блока с filter-tabs

const createCards = amount => {
  const cards = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    cards.appendChild(new _film__WEBPACK_IMPORTED_MODULE_2__["default"](_get_data_js__WEBPACK_IMPORTED_MODULE_1__["returnRandomData"]()).render());
  }

  return cards;
};

const renderCards = amount => {
  const newFilmsContainer = FILM_WRAPPER.DEFAULT.cloneNode(false);
  newFilmsContainer.appendChild(createCards(amount));
  FILM_WRAPPER.DEFAULT.parentElement.replaceChild(newFilmsContainer, FILM_WRAPPER.DEFAULT);
  FILM_WRAPPER.DEFAULT = newFilmsContainer;
}; // Отрисовка стандартной карточки

const renderDefaultCards = () => {
  // Убрал депс, т.к. нужен только сам враппер.
  const newFilmsContainer = FILM_WRAPPER.DEFAULT.cloneNode(false);
  newFilmsContainer.appendChild(createCards(AMOUNT_NUMBERS.CARDS));
  FILM_WRAPPER.DEFAULT.parentElement.replaceChild(newFilmsContainer, FILM_WRAPPER.DEFAULT);
  FILM_WRAPPER.DEFAULT = newFilmsContainer;
}; // На основе количества создаю карточки
// @param - количество создаваемых элементов

const createExtraCards = amount => {
  const cards = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    cards.appendChild(new _extra_film__WEBPACK_IMPORTED_MODULE_3__["default"](_get_data_js__WEBPACK_IMPORTED_MODULE_1__["returnRandomData"]()).render());
  }

  return cards;
};

const renderTopRated = () => {
  // Убрал депс, т.к. нужен только сам враппер.
  const newFilmsContainer = FILM_WRAPPER.TOP_RATED.cloneNode(false);
  newFilmsContainer.appendChild(createExtraCards(AMOUNT_NUMBERS.TOP));
  FILM_WRAPPER.TOP_RATED.parentElement.replaceChild(newFilmsContainer, FILM_WRAPPER.TOP_RATED);
  FILM_WRAPPER.TOP_RATED = newFilmsContainer;
}; // Отрисовываю 2 карточки в top Commented

const renderMostCommented = () => {
  // Убрал депс, т.к. нужен только сам враппер.
  const newFilmsContainer = FILM_WRAPPER.MOST_COMMENTED.cloneNode(false);
  newFilmsContainer.appendChild(createExtraCards(AMOUNT_NUMBERS.MOST_COMMENTED));
  FILM_WRAPPER.MOST_COMMENTED.parentElement.replaceChild(newFilmsContainer, FILM_WRAPPER.MOST_COMMENTED);
  FILM_WRAPPER.MOST_COMMENTED = newFilmsContainer;
}; // Отдаю на экспорт в filter-tabs.

const changeCards = (amount = AMOUNT_NUMBERS.CARDS) => {
  renderCards(amount);
};

/***/ }),

/***/ "./src/extra-film.js":
/*!***************************!*\
  !*** ./src/extra-film.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtraFilm; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _film_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-detail */ "./src/film-detail.js");

 // Конструктор создания карточки в Top comments и Top rated

class ExtraFilm {
  // Распиливаю дату
  // @param Рандомно вытянутый объект из mockList
  constructor(data) {
    this._title = data.name;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.dur;
    this._genre = data.genre;
    this._poster = data.picture;
    this._description = data.description;
    this._comments = data.comments;
    this._element = null; // Байнд клика

    this._handleCommentButtonClick = this._handleCommentButtonClick.bind(this);
  } // Старая функция конвертер в часы, переделенная в гетер.


  get _hours() {
    return Math.floor(this._duration / _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR);
  }

  get _minutes() {
    return this._duration - this._hours * _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR;
  } // Гетер, возвращающий HTML разметку карточки для Top rated и Top comment


  get _template() {
    return `<article class="film-card film-card--no-controls">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._hours}h&nbsp;${this._minutes}m</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="./images/posters/${this._poster}.jpg" alt="${this._title}" class="film-card__poster">
      <button class="film-card__comments">${this._comments} comments</button>
    </article>`.trim();
  } // Хэндлер клика комментов и открытия карточки фильтра (Film detail).


  _handleCommentButtonClick(evt) {
    evt.preventDefault();
    const data = {
      title: this._title,
      rating: this._rating,
      year: this._year,
      duration: this._duration,
      genre: this._genre,
      poster: this._poster,
      description: this._description,
      comments: this._comments
    }; // @param дата, полученная при генерации ExtraFilm
    //  прокинутая вниз и инсерт ее в body

    const filmDetails = new _film_detail__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    document.querySelector(`body`).append(filmDetails.renderItem());
  } // Add листенера при рендере


  _setEventListener() {
    this._element.querySelector(`.${_utils__WEBPACK_IMPORTED_MODULE_0__["default"].classNames.FILM_BUTTONS.VIEW_COMMENTS}`).addEventListener(`click`, this._handleCommentButtonClick);
  } // Создаю карточку товара и возвращаю её, добавляю листенер
  // @param - разметка, прокинутая вниз


  render() {
    this._element = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createCardElement(this._template);

    this._setEventListener();

    return this._element;
  }

}

/***/ }),

/***/ "./src/film-detail.js":
/*!****************************!*\
  !*** ./src/film-detail.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetails; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
 // Конструктор создания карточки фильма

class FilmDetails {
  // Распиливаю дату
  // @param Рандомно вытянутый объект из mockList
  constructor(data) {
    this._title = data.title;
    this._rating = data.rating;
    this._duration = data.duration;
    this._poster = data.poster;
    this._description = data.description;
    this.comments = data.comments; // Объявляю пустой элемент и объявляю хэндлеры.

    this._element = null;
    this._handleCloseButtonClick = this._handleCloseButtonClick.bind(this);
  } // Гетер, возвращающий HTML разметку карточки для основного блока


  get _template() {
    return `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${this._poster}.jpg" alt="${this._title}">
            <p class="film-details__age">18+</p>
          </div>
          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${this._title}</h3>
                <p class="film-details__title-original">Original: Невероятная семейка</p>
              </div>
              <div class="film-details__rating">
                <p class="film-details__total-rating">${this._rating}</p>
                <p class="film-details__user-rating">Your rate 8</p>
              </div>
            </div>
            <table class="film-details__table">
              <tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">Brad Bird</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">Brad Bird</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">Samuel L. Jackson, Catherine Keener, Sophia Bush</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">15 June 2018 (USA)</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${this._duration} min</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">USA</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  <span class="film-details__genre">Animation</span>
                  <span class="film-details__genre">Action</span>
                  <span class="film-details__genre">Adventure</span></td>
              </tr>
            </table>
            <p class="film-details__film-description">
              ${this._description}
            </p>
          </div>
        </div>
        <section class="film-details__controls">
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
          <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
          <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
          <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
          <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
        </section>
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">1</span></h3>
          <ul class="film-details__comments-list">
            <li class="film-details__comment">
              <span class="film-details__comment-emoji">😴</span>
              <div>
                <p class="film-details__comment-text">So long-long story, boring!</p>
                <p class="film-details__comment-info">
                  <span class="film-details__comment-author">Tim Macoveev</span>
                  <span class="film-details__comment-day">3 days ago</span>
                </p>
              </div>
            </li>
          </ul>
          <div class="film-details__new-comment">
            <div>
              <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
              <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">
              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
                <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
                <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
              </div>
            </div>
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment"></textarea>
            </label>
          </div>
        </section>
        <section class="film-details__user-rating-wrap">
          <div class="film-details__user-rating-controls">
            <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
            <button class="film-details__watched-reset" type="button">undo</button>
          </div>
          <div class="film-details__user-score">
            <div class="film-details__user-rating-poster">
              <img src="./images/posters/${this._poster}.jpg" alt="${this._title}" class="film-details__user-rating-img">
            </div>
            <section class="film-details__user-rating-inner">
              <h3 class="film-details__user-rating-title">${this._title}</h3>
              <p class="film-details__user-rating-feelings">How you feel it?</p>
              <div class="film-details__user-rating-score">
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1">
                <label class="film-details__user-rating-label" for="rating-1">1</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2">
                <label class="film-details__user-rating-label" for="rating-2">2</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3">
                <label class="film-details__user-rating-label" for="rating-3">3</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4">
                <label class="film-details__user-rating-label" for="rating-4">4</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5" checked>
                <label class="film-details__user-rating-label" for="rating-5">5</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6">
                <label class="film-details__user-rating-label" for="rating-6">6</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7">
                <label class="film-details__user-rating-label" for="rating-7">7</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8">
                <label class="film-details__user-rating-label" for="rating-8">8</label>
                <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9">
                <label class="film-details__user-rating-label" for="rating-9">9</label>
              </div>
            </section>
          </div>
        </section>
      </form>
    </section>`;
  } // Хэндлер клика закрытия попапа. И его удаление (Не грузим хип js'а)


  _handleCloseButtonClick() {
    this._element.parentElement.removeChild(this._element);

    this.removeItem();
  }

  _addEventListener() {
    this._element.querySelector(`.${_utils__WEBPACK_IMPORTED_MODULE_0__["default"].classNames.FILM_BUTTONS.CLOSE_DETAILS}`).addEventListener(`click`, this._handleCloseButtonClick);
  }

  _removeEventListener() {
    this._element.querySelector(`.${_utils__WEBPACK_IMPORTED_MODULE_0__["default"].classNames.FILM_BUTTONS.CLOSE_DETAILS}`).removeEventListener(`click`, this._handleCloseButtonClick);
  } // Рендер и анрендер карточки. Естественно, нужен при закрытии попапа.


  renderItem() {
    this._element = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createCardElement(this._template);

    this._addEventListener();

    return this._element;
  }

  removeItem() {
    this._removeEventListener();

    this._element = null;
  }

}

/***/ }),

/***/ "./src/film.js":
/*!*********************!*\
  !*** ./src/film.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Film; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _film_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-detail */ "./src/film-detail.js");

 // Генерация стандартной карточки фильма в блоке с табами.

class Film {
  // Распиливаю дату
  // @param Рандомно вытянутый объект из mockList
  constructor(data) {
    this._title = data.name;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.dur;
    this._genre = data.genre;
    this._poster = data.picture;
    this._description = data.description;
    this._comments = data.comments; // Объявляю пустой элемент и объявляю хэндлеры.

    this._element = null;
    this._handleCommentButtonClick = this._handleCommentButtonClick.bind(this);
  } // Старая функция конвертер в часы, переделенная в гетер
  // Думаю вынести ее в utilsList


  get _hours() {
    return Math.floor(this._duration / _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR);
  }

  get _minutes() {
    return this._duration - this._hours * _utils__WEBPACK_IMPORTED_MODULE_0__["default"].MIN_IN_HOUR;
  } // Гетер, возвращающий HTML разметку карточки для основного блока


  get _template() {
    return `<article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
      <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${this._year}</span>
        <span class="film-card__duration">${this._hours}h&nbsp;${this._minutes}m</span>
        <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="./images/posters/${this._poster}.jpg" alt="${this._title}" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
      <button class="film-card__comments">${this._comments} comments</button>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`.trim();
  } // Хэндлер клика комментов и открытия карточки фильтра (FilmDetail).


  _handleCommentButtonClick(evt) {
    evt.preventDefault();
    const data = {
      title: this._title,
      rating: this._rating,
      year: this._year,
      duration: this._duration,
      genre: this._genre,
      poster: this._poster,
      description: this._description,
      comments: this._comments
    }; // @param дата, полученная при генерации Film
    //  прокинутая вниз и инсерт ее в body

    const filmDetails = new _film_detail__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    document.querySelector(`body`).append(filmDetails.renderItem());
  } // Add листенера при рендере


  _setEventListener() {
    this._element.querySelector(`.${_utils__WEBPACK_IMPORTED_MODULE_0__["default"].classNames.FILM_BUTTONS.VIEW_COMMENTS}`).addEventListener(`click`, this._handleCommentButtonClick);
  } // Создаю карточку товара и возвращаю её, добавляю листенер
  // @param - разметка, прокинутая вниз


  render() {
    this._element = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].createCardElement(this._template);

    this._setEventListener();

    return this._element;
  }

}

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
/* harmony import */ var _get_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data.js */ "./src/get-data.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/card.js");

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
  FILTER_WRAPPER.innerHTML = ``;

  for (let i = 0; i < FILTER_COUNT; i++) {
    FILTER_WRAPPER.insertAdjacentHTML(`beforeend`, createFilterElem(_get_data_js__WEBPACK_IMPORTED_MODULE_0__["FILTER_LIST"][i].text, _get_data_js__WEBPACK_IMPORTED_MODULE_0__["FILTER_LIST"][i].amount, _get_data_js__WEBPACK_IMPORTED_MODULE_0__["FILTER_LIST"][i].id, _get_data_js__WEBPACK_IMPORTED_MODULE_0__["FILTER_LIST"][i].prefix));
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
      Object(_card__WEBPACK_IMPORTED_MODULE_1__["changeCards"])();
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
/*! exports provided: MOCK_LIST, FILTER_LIST, returnRandomData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_LIST", function() { return MOCK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_LIST", function() { return FILTER_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnRandomData", function() { return returnRandomData; });
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
}; // Отдает рандомный объект


const returnRandomData = () => {
  const data = {};
  data.picture = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(MOCK_LIST.pictures);
  data.name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(MOCK_LIST.names);
  data.genre = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandFromArr(MOCK_LIST.genres);
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
/* harmony import */ var _filter_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-tabs */ "./src/filter-tabs.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/card.js");

 // Сделал роутер приватным, импортирую только фильтр и только карточку
// Отрисовка фильтров и клики (Старый бандл)

Object(_filter_tabs__WEBPACK_IMPORTED_MODULE_0__["renderFilter"])();
Object(_filter_tabs__WEBPACK_IMPORTED_MODULE_0__["handlePinClick"])(); // Новый дроп карточек

Object(_card__WEBPACK_IMPORTED_MODULE_1__["renderDefaultCards"])();
Object(_card__WEBPACK_IMPORTED_MODULE_1__["renderTopRated"])();
Object(_card__WEBPACK_IMPORTED_MODULE_1__["renderMostCommented"])();

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
  // Согласно ООП постарался выделить классы в суммирующий объект
  classNames: {
    FILMS_WRAPPER: `films-list__container`,
    FILM_BUTTONS: {
      VIEW_COMMENTS: `film-card__comments`,
      CLOSE_DETAILS: `film-details__close-btn`
    }
  },
  // Новый шаблон генерации
  createCardElement: cardTemp => {
    const createNewTag = document.createElement(`template`);
    createNewTag.innerHTML = cardTemp.trim();
    return createNewTag.content.firstChild;
  },
  // Кейкоды для работы с попапами
  KEY_CODE: {
    ENTER: 13,
    ESC: 27
  },
  MIN_IN_HOUR: 60,
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