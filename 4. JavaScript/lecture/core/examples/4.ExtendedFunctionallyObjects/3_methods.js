//    Более лакончиный синтаксис инициализации метода

const firstPerson = {
  name: "Nicholas",
  sayName: function() {
    console.log(this.name);
  }
};

const secondPerson = {
  name: "Nicholas",
  sayName() {
    console.log(this.name);
  }
};
