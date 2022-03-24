console.log(typeof NaN); // number
console.log(typeof Infinity); // number

let abc = 1010.1212;

console.log(+abc + 10);
// console.log(parseInt(abc) + 20);
// console.log(parseFloat(abc) + 20);

let convertNum = 0;
if (typeof abc == "string") {
  convertNum = parseInt(abc);
}
console.log(convertNum + 20);
console.log(abc + 20);

console.log(Number(10));

// Math.round | Math.ceil | Math.floor | Math.random

console.log(Math.round(10.4)); // 10
console.log(Math.round(10.5)); // 11

console.log(Math.ceil(10.00001)); // 11

console.log(Math.floor(10.9999)); // 10

console.log(Math.random()); // 0 - 1;

console.log(Math.ceil(Math.random() * 10)); // 1 - 10
console.log(Math.floor(Math.random() * 10)); // 0 - 9

let q1 = prompt("Please choose a numbe b/w 1 - 10");
let a1 = Math.ceil(Math.random() * 10);
console.log(a1, q1);

if (a1 === parseInt(q1)) {
  alert("Number Matched..!");
}

// Task: rolling Dice for two times and match with your expecation values
