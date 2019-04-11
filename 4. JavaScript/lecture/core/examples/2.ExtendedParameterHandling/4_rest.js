function fold (x, y) {
  let a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};
console.log(fold(1, 2, "hello", true, 7) === 9);


//    function(a, b, ...theArgs) {
//        // ...
//    }

function fnew (x, y, ...a) {
  return (x + y) * a.length
}
console.log(fnew(1, 2, "hello", true, 7) === 9);
