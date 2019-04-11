const colors = [ "red", [ "green", "lightgreen" ], "blue" ];

const [ firstColor, [ secondColor ] ] = colors;

console.log(firstColor); // "red"
console.log(secondColor); // "green"
