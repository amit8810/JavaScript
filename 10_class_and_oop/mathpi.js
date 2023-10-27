const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor) //! Attention needed
/*
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable:  true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name")) //! Attention needed
/*
{
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
}
*/

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name")) //! Attention needed
/*
{
    value: 'ginger chai',
    writable: false,
    enumerable: false,
    configurable: true
}
*/
//? Important 
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

//! see output : name is not iterate bcoz we have done enumerable = false
/*
price : 250
isAvailable : true
*/
