// Утилитарные функции получения рандомные значений для мока
const utilsList = {
  getRandomNumber: (min, max) => Math.floor(Math.random() * (max - min) + min),
  getRandFromArr: (arr) => {
    const index = utilsList.getRandomNumber(0, arr.length);
    return arr[index];
  },
};

export default utilsList;
