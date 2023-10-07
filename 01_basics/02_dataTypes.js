"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser
// console.log(3 + 3); console.log("Amit") // not good for readability

let name = "Amit" // string
let age = 18 // integer
let isLoggesIn = false // boolean
let state = null
let score

console.log(typeof score) // undefined
console.log(typeof age); // Number
console.log(typeof null); // object
console.log(typeof undefined) // undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123')

console.log(id == anotherId) // false;

const bigNumber = 3235454555454545n
console.log(typeof bigNumber) // bigInt

//# Reference Types

const heroes = ["superman", "spiderman", "shaktiman"];

let myObj ={
    name:"amit",
    age:20
}

const myFunction = function(){
    console.log("Hello world")
}

console.table([typeof heroes, typeof myObj, typeof myFunction]); // object, object, function




