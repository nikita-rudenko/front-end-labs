function incOld(number, increment) {
  increment = increment || 1; //Устанавливаем значение по-умолчанию
  return number + increment;
}
console.log(incOld(2, 2)); // 4
console.log(incOld(2));    // 3


function incNew(number, increment = 1) {
  return number + increment;
}
console.log(incNew(2, 2)); // 4
console.log(incNew(2));    // 3
