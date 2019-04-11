const methodName = "sayName";

class PersonClass {

  constructor(name) {
    this.name = name;
  }

  [methodName]() {
    console.log(this.name);
  }
};

const me = new PersonClass("Nicholas");
me.sayName(); // "Nicholas"


const propertyName = "html";

class CustomHTMLElement {

  constructor(element) {
    this.element = element;
  }

  get [propertyName]() {
    return this.element.innerHTML;
  }

  set [propertyName](value) {
    this.element.innerHTML = value;
  }
}
