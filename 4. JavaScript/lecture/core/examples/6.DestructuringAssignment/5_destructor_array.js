const colors = [ "red", "green", "blue" ];

const [ firstColor, secondColor ] = colors;

// с присвоением
// [ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"

const [ , , thirdColor ] = colors;

console.log(thirdColor); // "blue"


//Example
let a = 1,
  b = 2;

[ a, b ] = [ b, a ];

console.log(a); // 2
console.log(b); // 1
