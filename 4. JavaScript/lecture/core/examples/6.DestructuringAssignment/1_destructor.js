const node = {
  type: "Identifier",
  name: "foo"
};

let { type, name } = node;
({ type, name } = node);

console.log(type); // "Identifier"
console.log(name); // "foo"
