const colors = [ "red", "green", "blue" ];

const [ firstColor, ...restColors ] = colors;

console.log(firstColor); // "red"
console.log(restColors.length); // 2
console.log(restColors[0]); // "green"
console.log(restColors[1]); // "blue"

// Example copy
const [ ...clonedColors ] = colors;

console.log(clonedColors); //"[red,green,blue]"
