class PersonClass {

  // эквивалент конструктора PersonType
  constructor(name) {
    this.name = name;
  }

  // эквивалент PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
}

const person = new PersonClass("Nicholas");
person.sayName(); // "Nicholas"

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"
