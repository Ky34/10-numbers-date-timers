'use strict';

//////////////////////////////////////////////////
// Преобразование И Проверка Чисел

console.log(10 === 10.0);

// 10  -  0-9;   1 / 10 = 0.1; 10 / 3 = 3.3333333
// 2   - 0, 1

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Converting strings to numbers
console.log(Number('11'));
console.log(+'11'); // знак + перед строкой приводит тип строки к числовому типу

// Parsing numbers from string
console.log(Number.parseInt('20%', 10)); // parsInt распознает число в строке, работает только если строка начинается с числа. Второй параметр - система исчисления
console.log(Number.parseInt('0011001%', 2)); // в двоичной системе

console.log(Number.parseInt('s20%', 10)); // не сработает
console.log(Number.parseFloat('9.7kg')); // распознает число с десятичной точкой

// Other methods from Number namespace
console.log(Number.isNaN(111)); // проверяет, является ли значение NaN
console.log(Number.isNaN('111')); // проверяет, является ли значение NaN
console.log(Number.isNaN(Number.parseInt('s20%', 10))); // true
console.log(Number.isNaN(+'s20%')); // true
console.log(Number.isNaN(11 / 0));
console.log(11 / 0); // Infinity - бесконечность

// Check if the velue is finite number (проверка, является ли число конечным)
// Можно использовать для проверки, является ли значение числом
console.log(Number.isFinite(111)); // true
console.log(Number.isFinite('111')); // false
console.log(Number.isFinite('111%')); // false
console.log(Number.isFinite(+'111$')); // false
console.log(Number.isFinite(11 / 0)); //false
