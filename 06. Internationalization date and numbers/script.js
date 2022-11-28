'use strict';

// Интернационализация дат
const now = new Date();
// устанавливаем объект, в котором указываем что будет отображаться
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: '2-digit', // 'long', 'numeric'
  year: 'numeric',
  weekday: 'long',
};
console.log(new Intl.DateTimeFormat('ru-RU', options).format(now)); // переводит дату в формат кода(locale) в скобкаx

// Интернационализация чисел

const a = 3254412323.21;
const optionsNumber = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
};

console.log('US', new Intl.NumberFormat('en-US', optionsNumber).format(a));
console.log('UA', new Intl.NumberFormat('uk-UA', optionsNumber).format(a));
console.log('RU', new Intl.NumberFormat('ru-RU', optionsNumber).format(a));
console.log('DE', new Intl.NumberFormat('de-DE', optionsNumber).format(a));
console.log('Syria', new Intl.NumberFormat('ar-SY', optionsNumber).format(a));
