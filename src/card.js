import utilsList from "./utils";
import * as mockList from "./get-data.js";


// Делаю клоннод подходящей карточки
const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`);
// Объявляю массив для карточек
const createTemplateCard = () => {
  const createEmptyTemplate = document.createElement(`template`);
  createEmptyTemplate.id = `film-card`;
  const clonedNode = document.querySelector(`.film-card`).cloneNode(true);
  createEmptyTemplate.content.appendChild(clonedNode);
  document.body.insertBefore(createEmptyTemplate, document.querySelector(`.main`));
};
// Работаю с инсертом фрагмента в документ.
const createCardTemp = () => {
  const cardNode = document.querySelector(`#film-card`)
    .content
    .querySelector(`.film-card`)
    .cloneNode(true);
  const frag = document.createDocumentFragment();
  return frag.appendChild(cardNode);
};
// Вычищаю мусор с клон ноды и добавляю аттрибуты из мока
/* @param = принимает на вход массив сгенерированных данных */
const createCardElem = (arrList) => {
  const cardTemplate = createCardTemp();
  cardTemplate.querySelector(`.film-card__title`).innerHTML = arrList.name;
  cardTemplate.querySelector(`.film-card__poster`).src = `./images/posters/${arrList.picture}.jpg`;
  cardTemplate.querySelector(`.film-card__year`).innerHTML = arrList.year;
  cardTemplate.querySelector(`.film-card__duration`).innerHTML = `${Math.floor(arrList.dur / utilsList.MIN_IN_HOUR)}h&nbsp;${arrList.dur - (Math.floor(arrList.dur / utilsList.MIN_IN_HOUR) * utilsList.MIN_IN_HOUR)}m`
  cardTemplate.querySelector(`.film-card__comments`).innerHTML = `${arrList.comments} comments`;
  cardTemplate.querySelector(`.film-card__description`).innerHTML = arrList.description;
  cardTemplate.querySelector(`.film-card__genre`).innerHTML = arrList.genre;
  cardTemplate.querySelector(`.film-card__rating`).innerHTML = arrList.rating;
  return cardTemplate;
};
// Собираю все в объект
/* @param Количество карточек */
const createCardList = (repeats) => {
  for (let i = 0; i < repeats; i++) {
    let card = createCardElem(mockList.generateData(mockList.MOCK_LIST));
    utilsList.cardList.push(card);
  }
  return utilsList.cardList;
};
// Размещаю в дом
/* @param Принимает нодлист из карточек
*  @param Принимает ноду, в которую вставляет карточки */
const placeCards = (arr, parentNode) => {
  for (let i = 0; i < arr.length; i++) {
    parentNode.appendChild(arr[i]);
  }
};
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

export {createTemplateCard, createCardElem, placeCards, createCardList, presetExtraFilms, CARD_WRAPPER};
