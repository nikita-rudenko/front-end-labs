const lastName = "last name";

const person = {
  "first name": "Nicholas",
  [lastName]: "Zakas"
};

console.log(person["first name"]); // "Nicholas"
console.log(person[lastName]); // "Zakas"
