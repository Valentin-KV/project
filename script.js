"use strict";

if (4) {
    console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('OK');
}

(num === 50) ? console.log('OK!') : console.log('Error'); // Тернарный оператор с тремя элементами

const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;

    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз');
        break;
}