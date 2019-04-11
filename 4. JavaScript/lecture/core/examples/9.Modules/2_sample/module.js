// экспортируем данные
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

// экспортируем функцию
export function sum(num1, num2) {
    return num1 + num1;
}

// экспортируем класс
export default class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// это приватная функция модуля
function subtract(num1, num2) {
    return num1 - num2;
}

// Описываем фнкцию …
function multiply(num1, num2) {
    return num1 * num2;
}

// … экспортируем позже
export { multiply };