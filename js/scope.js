var abc = 32; // global scope;

const _class = "UI";
let _name = "";
function demo() {
  _name = "someName " + _class;
  def = 12; // local scope
  console.log(def);
  console.log(abc + def);
}
// var def = "new Value";
demo();
console.log(def);
console.log(_name);

function add() {
  let num1 = 10;
  return num1;
}

console.log(add());

var _Math = (function () {
  var obj = { name: "test" };

  return obj;
})();

console.log(_Math.name);

// _Math.add(10, 10) // 20
// _Math.sub(10, 10) // 0
// _Math.mul(10, 10) // 100

// var Console = (function(){
//     function log(str, somvale){

//     }
// })();

// Console.log();
