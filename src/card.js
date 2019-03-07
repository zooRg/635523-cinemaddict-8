// Делаю клоннод подходящей карточки
const createTemplateCard = () => {
  const createEmptyTemplate = document.createElement(`template`);
  createEmptyTemplate.id = `film-card`;
  const clonedNode = document.querySelector(`.film-card`).cloneNode(true);
  createEmptyTemplate.content.appendChild(clonedNode);
  document.body.insertBefore(createEmptyTemplate, document.querySelector(`.main`));
};

// Работаю с инсертом фрагмента в документ
createTemplateCard();
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
  return cardTemplate;
};

export {createCardElem};
