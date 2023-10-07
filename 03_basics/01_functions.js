function addTwoNumbers(number1, number2) {
  //? function with parameters
  console.log(number1 + number2);
}
// addTwoNumbers(3,4) //* function call with arguments

// const result = addTwoNumbers(4,6)
// console.log(result) // 10, undefined
// console.log("Result :", result) //* Result : undefined
//! undefined due to : this line.... console.log(number1 + number2) in addTwoNumbers function

//* This is how it solve
function addition(number1, number2) {
  return number1 + number2;
}
const result2 = addition(10, 12);
// console.log("Result2 :", result2) //* 22

//TODO:------------------- function with some real example -------------------------

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter the username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage()) //* undefined
// console.log(loginUserMessage("")) //*  just logged in
// console.log(loginUserMessage("Amit")) //* Amit just logged in

//* ---------------- Shopping Cart Problem --------------------------------------------

function calculateCartPrice(...itemPrices) {
  // using rest operator ...
  return itemPrices;
}

// console.log(calculateCartPrice(200, 400, 500, 1000)) //* [ 200, 400, 500, 1000 ]
//? all value are in now array..and you know how to iterate over the ...then you definately know hoe to sum  array values.... :)

//* ------------------------------ object with function ---------------------------
const user = {
  username: "amit8810",
  price: "999",
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user); //? way 1
// handleObject({ //? another way
//   username: "alex",
//   price: "399",
// });

//* ------------------------------ Array with function ---------------------------

const myArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray))
