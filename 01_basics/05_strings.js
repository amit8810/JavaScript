// let str1 = 'amit' // single quote
// let str2 = " singh" // double quote
// console.log(str1 + str2) // amit singh

const name = "amit"
const repoCount = 50
// console.log(name + repoCount + "hello ji"); //amit50hello ji
// modern way : using back tick
// console.log(`Hello my name is ${name} and repoCount is ${repoCount}`); //! modern way

// it is also a modern way of declare a string
const gameName =  new String('Tekken')
// console.log(gameName[0]) // T
console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // TEKKEN
console.log(gameName.charAt(2)); // k
console.log(gameName.indexOf('n')); // 5

const newString  = gameName.substring(0,4)
console.log(newString) // Tekk //note : gameName[4] are not included

const anotherString = gameName.slice(2, 4)
console.log(anotherString) // kk

const newStringOne = "  amit   ";
console.log(newStringOne) // "  amit   "
console.log(newStringOne.trim()); //"amit"  //! important

const url = "https://amit.com/amit%20singh" //! important
console.log(url.replace('%20', '-'))
console.log(url.includes('amit')) // true
console.log(url.includes('sorry')) // false

const tempGameName = "my-name-is-amit-singh"
console.log(tempGameName.split(" ")) // [ 'my', 'name', 'is', 'amit', 'singh' ] //! split basis of ' 'space
console.log(tempGameName.split('-')) // [ 'my', 'name', 'is', 'amit', 'singh' ] //! split basis of '-' 




