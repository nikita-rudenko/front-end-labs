var count = 30;

// Ошибка
// let count = 40;

let x = 'outer';
function test(inner) {
  if (inner) {
    let x = 'inner';
    return x;
  }
  return x; // gets result 'outer'
}

console.log(test(false)); // outer
console.log(test(true)); // inner
