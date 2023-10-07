const accountId = 456;
let accountEmail = "temp@gmail.com";
var accountPassword = "temp1234";
accountCity = "jaipur"; //not a good practice

// accountId = 2; const keyword cannot changes
// console.log(accountId); // Give error

accountEmail = "amit@gmail.com";  //let is mutable
accountPassword = "12345"; // var is also mutable
accountCity = "Bengaluru";

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

/**
Note : Prefer not to use var
because due to scope
*/

let accountName; //undefined
console.table([accountId, accountEmail, accountPassword, accountCity, accountName]);


