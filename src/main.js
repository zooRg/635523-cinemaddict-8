// Собираю импорты
import utilsList from "./utils";
import {renderFilter, handlePinClick as filterClickListeners} from "./filter-tabs";
import {
  CARD_WRAPPER as cardWrap,
  createCardList as generateList,
  createTemplateCard,
  placeCards,
  presetExtraFilms as renderAdditionalFilms
} from "./card";

// Объявляю врапперы для элементов разметки
const FILTER_WRAPPER = document.querySelector(`.main-navigation`);
const EXTRA_FILMS = document.querySelectorAll(`.films-list--extra .films-list__container`);
// Создаю темплейт карточки
createTemplateCard();
// Выполняю стэк
FILTER_WRAPPER.innerHTML = ``;
renderFilter();
utilsList.clearCanvas();
utilsList.cardList = [];
generateList(utilsList.getRandomNumber(2, 6));
placeCards(utilsList.cardList, cardWrap);
// Форыч, очищающий стек карточек, генерирует новые и вставляет их во врапперы. Думал сделать через копирование массива и его слайс, но скриптовая часть сохраняет ссылки на ноды и в итоге они туда-сюда скачут по блокам.
EXTRA_FILMS.forEach((cardWrapper) => {
  utilsList.cardList = [];
  generateList(2);
  cardWrapper.innerHTML = ``;
  placeCards(utilsList.cardList, cardWrapper);
});
// Финально рендерю и развешиваю листенеры
renderAdditionalFilms();
filterClickListeners();

