// <, >, <=, >=, ==, !=

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy"); // if both conditions are met then this will be printed in console
}

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("Welcome back!");
// }

//! -------------------Terniary Operator ----------------------------------------
// condition ? true : false

const price = 10;

price >= 10
  ? console.log(`you have valid amount`)
  : console.log(`you do not have enough money`);
