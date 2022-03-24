// This

console.log(this); // global Object;

demo();
function demo() {
  function demo1() {
    console.log(this);
  }
  demo1();
  console.log(this);
}
