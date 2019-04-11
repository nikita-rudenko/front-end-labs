function add(first, second = first) {
  return first + second;
}

console.log(add(1, 1));     // 2
console.log(add(1));        // 2

function getValue(value) {
  return value + 5;
}


function add2(first, second = getValue(first)) {
  return first + second;
}

console.log(add2(1, 1));     // 2
console.log(add2(1));        // 7

function add3(first = second, second) {
  return first + second;
}

console.log(add3(1, 1));     // 2
console.log(add3(1));        //Error
