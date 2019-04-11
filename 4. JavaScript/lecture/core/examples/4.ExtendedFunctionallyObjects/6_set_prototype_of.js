/**
 * ECMAScript 6 расширяет возможность путем введения метода Object.setPrototypeOf(),
 * который позволяет изменять прототип любого переданного объекта.
 * Метод Object.setPrototypeOf() принимает два аргумента:
 * объект который нужно изменить и объект, который станет его прототипом
 * */
let person = {
  getGreeting() {
    return "Hello";
  }
};

let dog = {
  getGreeting() {
    return "Woof";
  }
};

// person — это прототип
let friend = Object.create(person);
console.log(friend.getGreeting()); // "Hello"
console.log(Object.getPrototypeOf(friend) === person); // true

// устанавливаем прототип dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting()); // "Woof"
console.log(Object.getPrototypeOf(friend) === dog); // true
