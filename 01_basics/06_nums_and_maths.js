const score = 400 // javascript automatically detect it is a number
const balance = new Number(100) // explicitly defining data type
// console.log(`I have ${score} points in math`)
// console.log(`I have ${balance} balance in my Acoount`)
// console.log(score) //! 400
// console.log(balance) //! [Number: 100]
// console.log(balance.toString().length) //! 3

// console.log(balance.toFixed(2)); // 100.00 //! important

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)) // 23.9 //! important 
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)) // 124 //! important

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //! 10,00,000


// +++++++++++++++ Maths +++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-4)) //! 4
// console.log(Math.round(3.4)) //! 3
// console.log(Math.round(3.6)) //! 4
// console.log(Math.ceil(5.7)) //! 6
// console.log(Math.floor(5.7)) //! 5

// console.log(Math.min(1,2,3,4,5,6,7)) //! 1

// console.log(Math.random()) //! Always 0 to 1
// console.log((Math.random()*10) + 1)
// console.log(Math.floor(Math.random()*10) + 1)

//* Important concept
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Now random value btw 10 to 20
