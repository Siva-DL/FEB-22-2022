var arr = [1, 2, 3];

let dataBase = [];

// dataBase[0] = 1;
// dataBase[] = 2;

dataBase.push({ name: "123" });
dataBase.push([1, 2, 3]);
dataBase.push("SOme value");

dataBase.unshift(0);
dataBase.unshift(-1);
dataBase.unshift(-2);

// dataBase.pop();
// dataBase.pop();
// dataBase.pop();

// dataBase.shift();
// dataBase.shift();
// dataBase.shift();

// dataBase.splice(0, 3);

let slicedValue = dataBase.slice(0, 1);

console.log(slicedValue);

console.log(dataBase);

// start and End - delete the values of array and return new arr; (function)
// push the sliced Value to new array; - function()
