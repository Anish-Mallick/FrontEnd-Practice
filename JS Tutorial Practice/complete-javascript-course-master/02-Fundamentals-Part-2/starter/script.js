"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can Drive");

// const interface = "Audio";
// const private = 543;

// ---------------Functions--------------

// function logger() {
//   console.log("My name is Anish");
// }

// const ans = logger(25, "Anish");
// console.log(ans);
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples & ${oranges} oranges`;
//   return juice;
// }

// const applesJuice = fruitProcessor(50, 100);
// console.log(applesJuice);

// const num = Number("67");
// const name = "Anish";
// console.log(typeof num);
// console.log(typeof name);

// function declaration
const age1 = calculateAge1(2049);
function calculateAge1(birthYear) {
  return 2078 - birthYear;
}

// function expression (anyonomous function)
// const age2 = calculateAge2(1996);
const calculateAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calculateAge2(1996);

console.log(age1, age2);

//  Arrow function
const calculateAge3 = (birthYear) => 2025 - birthYear;

const calculateAge4 = (birthYear, firstname) => {
  return `${firstname} is ${2021 - birthYear} years old.`;
};

const age3 = calculateAge3(1996);
const age4 = calculateAge4(1996, "Anish");
console.log(age3);
console.log(age4);
