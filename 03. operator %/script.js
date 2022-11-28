'use strict';

// Оператор Остаток

console.log(7 % 3); // возвращает остаток от деления 7 на 3 (вернет 1)
console.log(7 % 4); // вернет 3; 7 = 4 * 1 + 3

// четные числа дают в остатке от деления на 2 -  0
console.log(8 % 2);
console.log(108 % 2);
console.log(8564 % 2);

// нечетные числа дают в остатке от деления на 2 - 1
console.log(81 % 2);
console.log(109 % 2);
console.log(8561 % 2);

const isNumberOdd = x => x % 2 !== 0;
console.log(isNumberOdd(5)); // вернет true
console.log(isNumberOdd(7)); // вернет true
console.log(isNumberOdd(6)); // вернет false
console.log(isNumberOdd(10)); // вернет false
