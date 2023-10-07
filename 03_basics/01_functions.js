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

//TODO:------------------- fuction with some real example -------------------------
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

