/**
 * Метод Object.assign () принимает любое количество объектов свойств.
 * Приемник будет получать свойства в том порядке, в котором объектов были указаны.
 * Это означает, что второй объект может перезаписать значение с первого объекта в получатели,
 * что и иллюстрирует этот пример:
 *
 * */
const receiver = {};

Object.assign(receiver,
  {
    type: "js",
    name: "file.js"
  },
  {
    type: "css"
  }
);

console.log(receiver.type); // "css"
console.log(receiver.name); // "file.js"
