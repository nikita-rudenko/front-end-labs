class MyClass {

  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }

}

const instance = new MyClass();
const iterator = instance.createIterator();
console.log(iterator.next().value, iterator.next().value, iterator.next().value)
