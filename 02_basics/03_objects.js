//* singleton
// object.create

//* object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Amit",
    "full name": "Amit Singh",
    age : 20,
    location : "noida",
    email: "amit@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "Saturday"],
    [mySym] : "mykey1" // syntax for symbol
}

//TODO : access - .notation , using[]

// console.log(jsUser); //? object literal
// console.log(jsUser.email)
// console.log(jsUser[email])
// console.log(jsUser["full name"]) //* main use case of accessing using []bracket
// console.log(typeof jsUser[mySym])

jsUser.email = "amitsingh@gmail.com"
// console.log(jsUser.email) // amitsingh@gmail.com
// Object.freeze(jsUser) //! to freeze changes in object..now you cannot change anything
jsUser.email = "amit@microsoft.com"
// console.log(jsUser.email) // amitsingh@gmail.com //! nothing get changed

jsUser.greeting = function() {
    console.log("hello Js user")
}

jsUser.greetingTwo = function() {
    console.log(`hello Js user ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
