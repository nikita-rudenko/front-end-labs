/**
 * В ближайшее эквивалентом к классу было создание конструктору с последующим связыванием методов к прототипу конструктора,
 * такой подход, как правило, называется созданием собственных типов.
 *
 * */

function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function() {
  console.log(this.name);
};

let person = new PersonType("Nicholas");
person.sayName(); // "Nicholas"

console.log(person instanceof PersonType); // true
console.log(person instanceof Object); // true
