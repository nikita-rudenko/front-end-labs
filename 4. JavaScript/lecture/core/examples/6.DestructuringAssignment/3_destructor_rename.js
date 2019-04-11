const node = {
  type: "Identifier",
  name: "foo"
};

const { type: localType, name: localName } = node;

//    with default
//    let { type: localType, name: localName = "bar" } = node;

console.log(localType); // "Identifier"
console.log(localName); // "foo"
