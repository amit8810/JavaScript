let score = 35
// console.log(typeof score) // number
// console.log(typeof (score)) // number

//! # Conversions in Number
let valueInNumber = Number(score);
// console.log(typeof valueInNumber)

let x = "33abc"
let b = Number(x);
// console.log(typeof b) // number
// console.log(b) // NaN
// if we convert
// "33" => 33 // possible
// "33abc" => NaN // not possible
// true => 1; false => 0 // possisble

//! # Conversion in Boolean
// let isLoggedIn = 1;
let isLoggedIn = "Amit";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn)
// 1 => true; 0 => false
// "" => false
// "Amit" => true

//! # Conversion in String
let someNumber = 33;
let StringNumber = String(someNumber)
// console.log(StringNumber, typeof StringNumber)

// ********************** Operations ********************

let value = 3
let negValue = -value
// console.log(negValue) // -3

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = " Amit"
let str3 = str1 + str2
// console.log(str3) // hello Amit

// console.log("1" + 2); // 12 string
// console.log(1 + "2"); // 12 string
// console.log("1" + 2 + 2); // 122 string
// console.log(1 + 2 + "2"); // 32
//? for more visit tc39.com (ecmaScript)

// console.log(+true); // 1
// console.log(true-); //error
//console.log(+""); // 1

// let num1, num2, num3  //! avoid this kind of things
// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter // preincrement
// console.log(gameCounter) //111
++gameCounter // postincrement
// console.log(gameCounter) // 112



