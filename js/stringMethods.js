let _dbName = "     Test SomeName Test             ";

let tooBigData = JSON.stringify([
  { demo: "123Demo1" },
  { demo: 123 },
  { demo: 123 },
]);

// indexOf, lastIndexOf, search, startsWith, includes

_dbName = _dbName.trim();
let jsonObject = JSON.parse(tooBigData);
console.log(jsonObject[0].demo);

console.log(_dbName.length);
console.log(_dbName.indexOf("Test", 1)); // +ve / -1

console.log(_dbName.lastIndexOf("Test"));

console.log(_dbName.search("Test"));

console.log(_dbName.startsWith("Tes"));
console.log(_dbName.includes("SomeNamee"));

// const dummyValues = ['test', 'demo', 'dummy'];
// let string1 = "This is for Test"
// let string2 = "This is for demo"
// let string3 = "This is for dummy"

// ab are pair:
// const str = "abaabb" //valid
// const str1 = "abbb" // invalid;

// -- Extracting a string value
// Date: Methods

const str123 = "This is String to Slice out";

let slicedOutString = str123.slice(
  str123.indexOf("String"),
  str123.indexOf("String") + "String".length
);

console.log(str123.length, slicedOutString);

// subString()

console.log(
  str123.substring(
    str123.indexOf("String"),
    str123.indexOf("String") + "String".length
  )
);

console.log(str123.toUpperCase());
console.log(str123.toLowerCase());

console.log(str123.split("").join("|"));
