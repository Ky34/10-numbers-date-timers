'use strict';

// Работа c Math

console.log(Math.sqrt(9));
console.log(9 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(3, 55, 44, 31, 2, 9)); // получаем максимальное значение 55
console.log(Math.max(3, '55', 44, '31', 2, 9)); // приводит тип к числовому
console.log(Math.min(3, '55', 44, '31', 2, 9));
console.log(Math.PI); // число PI
console.log(Math.PI * Number.parseInt('20px') ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.trunc(1.99)); // обрезает дробную часть (1)
console.log(Math.round(1.99)); // округляет до целого (2)

console.log(Math.ceil(1.99)); // округляет к верхней границе (2)
console.log(Math.ceil(1.39)); // округляет к верхней границе (2)

console.log(Math.floor('1.99')); // округляет к нижней границе  (1)
console.log(Math.floor(1.39)); // округляет к нижней границе (1)

console.log(Math.trunc(-1.99));
console.log(Math.floor(-1.99));

console.log(Math.PI);
console.log(Math.PI.toFixed(2)); // toFixed() нужно указать сколько знаков после запятой нужно ставить
console.log(+(1.34567).toFixed(2)); // Метод возвращает строку
