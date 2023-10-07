let score = 35
console.log(typeof score) // number
console.log(typeof (score)) // number

//! # Conversions in Number
let valueInNumber = Number(score);
console.log(typeof valueInNumber)

let x = "33abc"
let b = Number(x);
console.log(typeof b) // number
console.log(b) // NaN
// if we convert
// "33" => 33 // possible
// "33abc" => NaN // not possible
// true => 1; false => 0 // possisble

//! # Conversion in Boolean
// let isLoggedIn = 1;
let isLoggedIn = "Amit";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)
// 1 => true; 0 => false
// "" => false
// "Amit" => true

//! # Conversion in String
let someNumber = 33;
let StringNumber = String(someNumber)
console.log(StringNumber, typeof StringNumber)