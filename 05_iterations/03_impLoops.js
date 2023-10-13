//? Array specific Loops
//["", "", ""]
//[{}, {}, {}]

//TODO       -------------------------- for of Loop
const arr = [10, 20, 30, 40, 50]

for (const val of arr) {
    // console.log(val) //? it print the value of arr : 10,20,30,40,50
}

const fnames = ['Amit', 'Varsha', 'Arslaan', 'Shivang']
const greeting = "Hello! "
for(const val of fnames){
    // console.log(`${greeting}${val}`)
}


//TODO ======================= Map in Js
// - its stores the unique
const myMap = new Map()

myMap.set('IN', "India")
myMap.set('USA', "United states of America")
myMap.set('Fr', "France")

// console.log(myMap)
//output
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United states of America',
  'Fr' => 'France'
}
*/

for(const [key] of myMap){
    console.log(key); //* IN, USA, Fr
}
for(const [key, value] of myMap){
    console.log(key, ':-' ,value);
}
// IN :- India
// USA :- United states of America
// Fr :- France


//! for OF loop don't work for Objects


