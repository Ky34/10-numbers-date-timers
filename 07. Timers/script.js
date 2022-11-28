'use strict';

// Таймеры

// setTimeout()
const ingridients = ['Лосось', ''];

const sushiTimer = setTimeout(
  (ingrid1, ingrid2) =>
    console.log(`ваши суши доставлены. Ингридиенты: ${ingrid1}, ${ingrid2}`),
  3000,
  ...ingridients
); // первый параметр - коллбек функция, 2-ой - колличество милисекунд через сколько произойдет запуск функции, аргументы передаются после таймера задержки
console.log('Ожидание....');

if (ingridients.includes('Тунец')) clearTimeout(sushiTimer); // при помощи clearTimeout удаляется код внутри таймаута

// setInterval()
setInterval(function () {
  // аналогично таймауту, только вызывается постоянно с интервалом значения после запятой
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  console.log(new Intl.DateTimeFormat(now, options).format(now));
}, 1000);
