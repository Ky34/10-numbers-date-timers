'use strict';

// Работа с Датами

// Создание дат
// const now = new Date(); // получаем текущую дату время и часовой пояс
// console.log(now);

// const someDateString = 'Nov 28 2022 13:32:44';
// const someDate = new Date(someDateString); // получаем строку в формета даты
// console.log(someDate);
// console.log(new Date('Dec 31 2022')); // получаем строку в формате даты день месяц число время часовой пояс

// const account1 = {
//   userName: 'Cecil Ireland',
//   transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
//   interest: 1.5,
//   pin: 1111,
//   transactionsDates: [
//     '2020-10-02T14:43:31.074Z',
//     '2020-10-29T11:24:19.761Z',
//     '2020-11-15T10:45:23.907Z',
//     '2021-01-22T12:17:46.255Z',
//     '2021-02-12T15:14:06.486Z',
//     '2021-03-09T11:42:26.371Z',
//     '2021-05-21T07:43:59.331Z',
//     '2021-06-22T15:21:20.814Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// console.log(new Date(account1.transactionsDates[0]));
// console.log(new Date(2222, 1, 13, 11, 28, 59)); // год, месяц, день, часы, минуты, секунды (месяцы нумеруются с 0)
// console.log(new Date(2222, 0, 32)); // js автоматически добавит еще 1 день и выведет 1 февраля

// // Unix time stamp started Jan 1 1970
// console.log(new Date(0)); // Thu Jan 01 1970
// console.log(new Date(1 * 24 * 60 * 60 * 1000)); // Fri Jan 02 1970 - число в милисекундах
// console.log(new Date(7 * 24 * 60 * 60 * 1000)); // Thu Jan 08 1970

// Работа с датами при помощи методов

const futureDate = new Date(2222, 1, 13, 11, 28, 59);
console.log(futureDate);
console.log(futureDate.getFullYear()); // получаем год из даты
console.log(futureDate.getMonth()); // получаем месяц из даты (месяцы считаются с 0)
console.log(futureDate.getDate()); // получаем день из даты (13 число)
console.log(futureDate.getDay()); // получаем день недели, нумерация начинается с 0 и первый день воскресенье
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());
console.log(futureDate.toISOString()); // 2222-02-13T08:28:59.000Z   получаем дату в международном формате
console.log(futureDate.getTime()); // получаем колличество милисекунд, прошедших с 1 января 1970 до нашей даты
console.log(new Date(7956088139000));
console.log(Date.now()); // 1669633067974

futureDate.setFullYear(2223); // устанавливаем новый год, так же можно установить любой параметр даты
console.log(futureDate);

// Операции с Датами

console.log(Number(futureDate));
console.log(+futureDate);
console.log(-futureDate);

// вычисляем колличество дней между 2 датами
const getPassedBetween2Days = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days = getPassedBetween2Days(new Date(2021, 9, 1), new Date(2021, 9, 12));

console.log(days);
