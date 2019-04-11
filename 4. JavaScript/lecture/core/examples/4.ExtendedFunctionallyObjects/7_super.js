/**
 *  Еще одним улучшением является введение ссылки super, которое делает более легким доступ к функционалу прототипа.
 **/
let person = {
  getGreeting() {
    return "Hello";
  }
};

// person — это прототип
let friend = {
  getGreeting() {
    return super.getGreeting() + ", hi!";
  }
};
Object.setPrototypeOf(friend, person);


// friend — это прототип
let relative = Object.create(friend);

console.log(person.getGreeting()); // "Hello"
console.log(friend.getGreeting()); // "Hello, hi!"
console.log(relative.getGreeting()); // "Hello, hi!"
