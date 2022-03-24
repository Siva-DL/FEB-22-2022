// Date;

let _date = new Date("3/24/2022");

console.log(_date);

let dayArray = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday"];

let _getDay = _date.getDay();
console.log(dayArray[_getDay]);

let _getDate = _date.getDate();
console.log(_getDate);

let _getMonth = _date.getMonth() + 1;
console.log(_getMonth);

let _getYear = _date.getFullYear();
console.log(_getYear);

// 24/3/2022

const istDateFormat = _getMonth + "-" + _getDate + "-" + _getYear;

console.log(istDateFormat);

// 3/24/2022

// Task:
// getMonth - Print Month;
// getDays -  Print Days;
