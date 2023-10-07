// Stack Memory used for (primitive), Heap (non-Primitive)

// Primitive mein copy milta hai
let myYoutubename  = "amit"
let anotherName = myYoutubename
anotherName = "sumit"

console.log(myYoutubename)
console.log(anotherName)

// non primitive (heap) mein jata hai // Reference milta hai

let userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "amit@gmail.com"

console.log(userOne.email); // amit@gmail.com
console.log(userTwo.email); // amit@gmail.com