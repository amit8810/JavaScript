// Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("i: " + i);
// }

function checkPalindrome(str) {
  if (str == "" || str === null) return true;

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] != str[j]) return false;
    i++;
    j--;
  }

  return true;
}

checkPalindrome("amit")
  ? console.log(`string is palindrome`)
  : console.log(`not a plaindrome`);

// function to reverse string
function reverseString(str) {
  let last = str.length - 1;
  let ans = "";
  for (let i = last; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

let result = reverseString("amit")
console.log(result)
