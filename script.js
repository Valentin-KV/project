"use strict";

// if (4) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK');
// }

// (num === 50) ? console.log('OK!') : console.log('Error'); // Тернарный оператор с тремя элементами

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;

//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 2;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries); // в консоль получим 0 - значение первого false (cola = 0)

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим');
// }

console.log(1 && 0); // получим 0, т.к. 0 это false и на нем остановится
console.log(1 && 5); // получим 5, т.к. оба значения true и выведет последнее
console.log(null && 5); // null это false поэтому вернуло первое false, т.е. null
console.log(0 && 'text'); // 0 это false поэтому вернуло первое false т.е. 0
// Оператор && (И) всегда возвращает первого ложное сообщение на котором он запинается
// Если все значения верные (true) тогда он возвращает последнее значение
// И запинается на Лжи, а ИЛИ запинается на Правде

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны');
// } else {
//     console.log('Мы уходим');
// }

console.log(hamburger || cola || fries); // вернёт первое правдивое значение, т.е. 3
// если все ложные, то вернет последнее ложное

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport); // возвращает 'done' (т.е. true), т.к. предыдущие все uderfined (т.е. false)

// const hamburger = 4;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 4 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны');
// } else {
//     console.log('Мы уходим');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // вернет 2, т.к. она последнее true в логическом И справа


console.log(!1); // оператор НЕ, возвращает противоположное значение, т.е. true в данном случае

// Задачки:
// Что выведет консоль
console.log( NaN || 2 || undefined ); // вернет 2 
console.log( NaN && 2 && undefined); // вернет NaN
console.log( 1 && 2 && 3 ); // вернет 3
console.log( !1 && 2 || !3 ); // вернет false
console.log( 25 || null && !3); //вернет 25
console.log( NaN || null || !3 || undefined || 5); // вернет 5
console.log( NaN || null && !3 && undefined || 5); // вернет 5
console.log( 5 === 5 && 3 > 1 || 5); // вернет true

// Выполняется ли условие?
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }
// console.log(hamburger === 3 && cola || fries === 3 && nuggets);
// условие выполняется, вернет 2

// Выполняется ли условие?
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!');
// }
// console.log(hamburger || cola || fries === 3 || nuggets);
// Условие выполняется, вернет 2

// Выполняется ли условие?
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')    
// }
// console.log(hamburger && cola || fries === 3 && nuggets);
// Не выполняется, вернет false
