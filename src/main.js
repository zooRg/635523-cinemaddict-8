// Собираю импорты
import utilsList from "./utils";
import * as mockList from "./get-data.js";
import {createFilterElem} from "./filter-tabs";
import {createCardElem as createElem} from "./card";
// Счетсчик количества фильтров
const FILTER_COUNT = 5;
// Объявляю врапперы для элементов разметки
const FILTER_WRAPPER = document.querySelector(`.main-navigation`);
const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`);
const EXTRA_FILMS = document.querySelectorAll(`.films-list--extra .films-list__container`);
// На лоаде карточек вычищаю ненужные ноды;
const presetExtraFilms = () => {
  const itemsNode = document.querySelectorAll(`.films-list--extra .films-list__container .film-card`);
  itemsNode.forEach((node) => {
    node.classList.add(`film-card--no-controls`);
    let nodeDescription = node.querySelector(`.film-card__description`);
    let nodeActions = node.querySelector(`.film-card__controls`);
    node.removeChild(nodeDescription);
    node.removeChild(nodeActions);
  });
};
// Однострочная функция очищающая блок с карточками при клике по табу и лоаду страницы, делаю клоннод с одной из карточек
const clearCanvas = () => {
  CARD_WRAPPER.innerHTML = ``;
};
// Объявляю массив для карточек
let cardList = [];
// Собираю все в объект
/* @param Количество карточек */
const createCardList = (repeats) => {
  for (let i = 0; i < repeats; i++) {
    let card = createElem(mockList.generateData(mockList.MOCK_LIST));
    cardList.push(card);
  }
  return cardList;
};
// Размещаю в дом
/* @param Принимает нодлист из карточек
*  @param Принимает ноду, в которую вставляет карточки */
const placeCards = (arr, parentNode) => {
  for (let i = 0; i < arr.length; i++) {
    parentNode.appendChild(arr[i]);
  }
};
// Циклом перезаполняю фильтр
const renderFilter = () => {
  for (let i = 0; i < FILTER_COUNT; i++) {
    FILTER_WRAPPER.insertAdjacentHTML(`beforeend`, createFilterElem(mockList.FILTER_LIST[i].text, mockList.FILTER_LIST[i].amount, mockList.FILTER_LIST[i].id, mockList.FILTER_LIST[i].prefix));
  }
};
// Эвентлистнеры для клика
const handlePinClick = () => {
  // Очищаю табы
  const filterPins = document.querySelectorAll(`.main-navigation__item`);
  filterPins.forEach((filterPin, i) => {
    if (i === 0) {
      filterPin.classList.add(`main-navigation__item--active`);
    }
    filterPin.addEventListener(`click`, (evt) => {
      const targetPin = evt.target;
      cardList = [];
      createCardList(utilsList.getRandomNumber(1, 8));
      clearCanvas();
      placeCards(cardList, CARD_WRAPPER);
      filterPins.forEach((clearList) => {
        clearList.classList.remove(`main-navigation__item--active`);
      });
      targetPin.classList.add(`main-navigation__item--active`);
    });
  });
};

// Выполняю стэк
FILTER_WRAPPER.innerHTML = ``;
renderFilter();
cardList = [];
createCardList(utilsList.getRandomNumber(2, 6));
clearCanvas();
placeCards(cardList, CARD_WRAPPER);

// Форыч, очищающий стек карточек, генерирует новые и вставляет их во врапперы. Думал сделать через копирование массива и его слайс, но скриптовая часть сохраняет ссылки на ноды и в итоге они туда-сюда скачут по блокам.
EXTRA_FILMS.forEach((cardWrapper) => {
  cardList = [];
  createCardList(2);
  cardWrapper.innerHTML = ``;
  placeCards(cardList, cardWrapper);
});
// Финально рендерю и развешиваю листенеры
presetExtraFilms();
handlePinClick();


