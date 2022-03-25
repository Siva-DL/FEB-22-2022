// id,  class , elementName

// console.log(document.getElementById("demo"));

// console.log(document.getElementsByClassName("demo"));
// console.log(document.getElementsByTagName("div")[1]);

// for (var i = 0; i < document.getElementsByClassName("demo").length; i++) {
//   console.log(document.getElementsByClassName("demo")[i]);
// }

let $demo = document.getElementsByClassName("demo");
console.log($demo);

// Text Based: InnerText & innerHTML
// getter
console.log($demo[0].innerText);

//setter
// $demo[0].innerText = "<h1>From JS</h1>";
// console.log($demo[0].innerText);

// setter HMTL
$demo[0].innerHTML = "<h1>" + $demo[0].innerText + " From JS</h1>";

console.log($demo[0].innerHTML);

// Form Based Values
console.log(document.getElementById("inputElement").value);
console.log(document.querySelector(".demo"));

// Arributes:
console.log(document.querySelector("#demo"));
console.log(document.querySelector("a").href);
console.log(document.querySelector("img").src);

//setter
document.querySelector("#demo").setAttribute("id", "test123");
//getter
console.log(document.querySelector("#tester1234").getAttribute("class"));
