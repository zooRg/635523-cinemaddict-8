// Утилитарные функции получения рандомные значений для мока

const CARD_WRAPPER = document.querySelector(`.films-list .films-list__container`);
const utilsList = {
  KEY_CODE: {
    ENTER: 13,
    ESC: 27,
  },
  MIN_IN_HOUR: 60,
  cardList: [],
  getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min),
  getRandFromArr: (arr) => {
    const index = utilsList.getRandomNumber(0, arr.length);
    return arr[index];
  },
  // Однострочная функция очищающая блок с карточками при клике по табу и лоаду страницы, делаю клоннод с одной из карточек
  clearCanvas: () => {
    CARD_WRAPPER.innerHTML = ``;
  }
};

export default utilsList;
