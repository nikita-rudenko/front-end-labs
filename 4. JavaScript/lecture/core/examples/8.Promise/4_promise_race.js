import {createPromise} from "./src/createPromise.js";

Promise.race([
  createPromise(3000, true),
  createPromise(2000, true),
  createPromise(3000, true),
  createPromise(5000, true)
]).then(
  result => console.log(result),
  error => alert("ERROR")
);
