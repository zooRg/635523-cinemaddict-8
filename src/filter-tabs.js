import utilsList from "./utils";
import * as mockList from "./get-data.js";
import {CARD_WRAPPER as cardWrap, createCardList as generateList, placeCards} from "./card";
// Счетчик количества фильтров
const FILTER_COUNT = 5;
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
// Циклом перезаполняю фильтр
const renderFilter = () => {
  // Объявляю врапперы для элементов разметки
  const FILTER_WRAPPER = document.querySelector(`.main-navigation`);
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
      utilsList.cardList = [];
      generateList(utilsList.getRandomNumber(1, 8));
      utilsList.clearCanvas();
      placeCards(utilsList.cardList, cardWrap);
      filterPins.forEach((clearList) => {
        clearList.classList.remove(`main-navigation__item--active`);
      });
      targetPin.classList.add(`main-navigation__item--active`);
    });
  });
};

export {createFilterElem, handlePinClick, renderFilter};
