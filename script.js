// Functions
function printMe() {
  console.log("Printing...");
}
printMe();

function printThis(param) {
  console.log(param);
}
printThis("World");

const printMeAgain = function () {
  console.log("Print");
};
printMeAgain();

const printMeAgainWithParam = function (a, b) {
  console.log(a, b);
};
printMeAgainWithParam(20, 40);

function sum(x, y) {
  return x + y;
}
let add = sum(33, 76);
console.log(add);

// Default Parameters
function calc(a, b) {
  return 2 * (a + b);
}
let calcy = calc(5, 10);
console.log(calcy);

let casy = calc(3);
console.log(casy);

function castle(a, b = 8) {
  return 5 * (a + b);
}
let van = castle(12);
console.log(van);

// Rest Parameters
function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}

let Things = collectThings(5, 1, 3, 7, 9);
console.log(Things);

// Arrow Functions
const adding = (x, y) => {
  return x + y;
};

let addition = adding(5, 8);
console.log(addition);

const addy = (x, y) => x + y;

let additional = addy(6, 10);
console.log(additional);

// Nested Functions
