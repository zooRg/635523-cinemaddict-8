import utilsList from "./utils";
// Лист переменных данных карточек
const MOCK_LIST = {
  "pictures": [`blue-blazes`, `fuga-da-new-york`, `accused`, `blackmail`, `moonrise`],
  "names": [`Incredibles 2`, `The Assassination Of Jessie James By The Coward Robert Ford`],
};

// Массив с данными фильтра
const FILTER_LIST = [
  {
    "text": `All movies`,
    "amount": utilsList.getRandomNumber(1, 20),
    "id": `#all`,
  },
  {
    "text": `Watchlist`,
    "amount": utilsList.getRandomNumber(1, 20),
    "id": `#watchlist`
  },
  {
    "text": `History`,
    "amount": utilsList.getRandomNumber(1, 20),
    "id": `#history`
  },
  {
    "text": `Favorites`,
    "amount": utilsList.getRandomNumber(1, 20),
    "id": `#favorites`
  },
  {
    "text": `Stats`,
    "prefix": `additional`,
    "id": `#stats`
  }
];
//  Генерирую мок и прогоняю по кейсам для дедлайнов и шаблона оформления
/* @param принимает на вход мок данных */
const generateData = (obj) => {
  let data = {};
  data.picture = utilsList.getRandFromArr(obj.pictures);
  data.name = utilsList.getRandFromArr(obj.names);
  return data;
};

export {MOCK_LIST, FILTER_LIST, generateData};
