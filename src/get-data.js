import utilsList from "./utils";
// Лист переменных данных карточек
const MOCK_LIST = {
  "pictures": [`blue-blazes`, `fuga-da-new-york`, `accused`, `blackmail`, `moonrise`],
  "names": [`Incredibles 2`, `The Assassination Of Jessie James By The Coward Robert Ford`, `The Inception`, `Limitless`, `Tusk`, `A Clockwork Orange`, `The Shining`, `True Detective`, `Green Mile`, `The King's Speech`, `King Lion`, `Leon`, `The Shawshank Redemption`, `Gladiator`, `Green Book`],
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."
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
  data.text = obj.text.split(`,`);
  let textPool = new Set(data.text);

  console.log(data);
  return data;
};

export {MOCK_LIST, FILTER_LIST, generateData};
