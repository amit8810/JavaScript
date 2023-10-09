//? jab aap assume krlete hai
// yahi hai truthy value
const userEmail = "amit@.ai";
if (userEmail) {
  console.log(`got user email`);
} else {
  console.log("no user email");
}

//* falsy values
//! false, 0, -0, BigInt, "", null, undefined, NaN
//?other than this all are truthy values

//*truthy values
// "0", 'false'," ",[],{}, function(){}

//---------------------------how to check objects---------------------------------------
const obj1 = {};

if (Object.keys(obj1).length === 0) {
  console.log("empty object"); // empty object
}

//!------------ Nullish Coalescing Operator (??): null undefined----------------------------

let val1;
//val1 = 5 ?? 10;
val1 = null ?? 10; // check krne ke liye hot ki database se null value to nhi aai hai
console.log(val1);

let val2;
val2 = undefined ?? 15;
console.log(val2); // check krne ke liye hot ki database se null value to nhi aai hai
