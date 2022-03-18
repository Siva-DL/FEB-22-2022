// console.log(10 + 10);
// console.log(10 + 20);
// console.log(30 + 20);
// console.log(30 + 20);

// function Decleration
var num1 = 20;

add(num1, 20);
add(11, 20);
add(12, 20);
add(13, 20);
add(14, 20);

function add(a, b) {
  return a + b;
}

// Invoking | calling a function
// add();

// function with no Name:
// fExpression(); // error
var fExpression = function (a, b) {
  //   add(25, 25);
  //   console.log("This is Function Expression!", a - b);
  return a - b;
};
// print the values

// IIFE

(function (a, b) {
  console.log("IIFE", a * b);
})(20, fExpression(20, 10));

// ES6 - Arrow - FatArrow

var arrFn = (a, b) => {
  console.log("Testing a Arraow function", a / b);
};

console.log(add(20, 10));
arrFn(add(20, 10), 10);
