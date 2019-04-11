const node = {
  type: "Identifier",
  name: "foo"
};

const { type, name, value = true } = node;

console.log(type); // "Identifier"
console.log(name); // "foo"
console.log(value); // true
