// Primitive Data Types: string, number, boolean, null, undefined
var a = 10;

var b = a;

a = 20;
b = 40;
console.log(a); //

// non-primitive Data Types: objects and Functions

var user = { _name: "somex" }; // store: 12: { _name: "somex" };
var user1 = user;

user1._name = "someY";

console.log(user, user1);
