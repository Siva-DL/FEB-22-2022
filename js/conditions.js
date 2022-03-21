//  if, elseIf and else
let a = 2;

if (a == "0") {
  console.log("a is valid with 0");
} else if (a == 1) {
  console.log("a is valid with 1");
} else {
  console.log("a is not valid with 0 or 1");
}

// switch

let movie = "iceAge1";

switch (movie) {
  case "iceAge1": {
    console.log("you are watching iceAge1!");
    break;
  }
  case "iceAge2": {
    console.log("you are watching iceAge2!");
    break;
  }
  case "iceAge3": {
    console.log("you are watching iceAge3!");
    break;
  }
  case "iceAge4": {
    console.log("you are watching iceAge4!");
    break;
  }
  default: {
    console.log("the movie is not in the list!");
  }
}

// ternary

const sum =
  10 + 10 !== 20
    ? console.log("sum of 10+10 is 20")
    : console.log("sum of two is not 20");

sum;
