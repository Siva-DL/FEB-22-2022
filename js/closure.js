function abc() {
  var a = 10;

  var result = function () {
    var b = 20;
    return a + b;
  };

  return result();
}

console.log(abc());

// ----------------------------------
// Encapsulation
const _Math = (function () {
  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  return {
    addition: add,
    substraction: sub,
  };
})();

console.log(_Math.substraction(10, 10));
