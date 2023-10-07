//* Array
const myArr = [10,12,13,14,15]
// console.log(typeof myArr) //* object
// console.log(myArr[0]) //* 10
const myHeros = ["superman", "spiderman"]

//? const numbers = [1,2,3,4,5]
//? run console.log(number) and see its prototypes

myArr.push(6)
// console.log(myArr) //! [ 10, 12, 13, 14, 15, 6 ]
myArr.push(7)
// console.log(myArr) //! [ 10, 12, 13, 14, 15, 6, 7 ]
myArr.unshift(20)
// console.log(myArr) //! [ 20, 10, 12, 13, 14, 15, 6, 7 ]
myArr.shift()
// console.log(myArr) //! [ 10, 12, 13, 14, 15, 6, 7 ]

// console.log(myArr.includes(9)) //! false
// console.log(myArr.indexOf(10)) //! 0

const newArr = myArr.join()

// console.log(newArr) //! 10,12,13,14,15,6,7
// console.log(typeof newArr) //! string

//* Slice and Splice
// console.log("A " ,myArr) //* A [ 10, 12, 13, 14, 15, 6, 7 ]

const myn1 = myArr.slice(1, 3) 

// console.log(myn1) //* [ 12, 13 ]
// console.log("B ", myArr) //* B [ 10, 12, 13, 14, 15, 6, 7 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr) //* [10, 15, 6, 7]
console.log(myn2) //* [ 12, 13, 14 ] 