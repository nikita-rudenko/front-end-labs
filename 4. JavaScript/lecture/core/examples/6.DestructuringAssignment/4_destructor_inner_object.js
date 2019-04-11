const node = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end: {
      line: 1,
      column: 4
    }
  }
};

const { loc: { start }} = node;

console.log(start.line); // 1
console.log(start.column); // 1

// использовать другие имена для локальных переменных
// достаем node.loc.start
const { loc: { start: localStart }} = node;

console.log(localStart.line); // 1
console.log(localStart.column); // 1
