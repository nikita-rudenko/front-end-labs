class PersonClass {

  // эквивалент конструктору PersonType
  constructor(name) {
    this.name = name;
  }

  // эквивалент PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }

  // эквивалент PersonType.create
  static create(name) {
    return new PersonClass(name);
  }
}

let person = PersonClass.create("Nicholas");
