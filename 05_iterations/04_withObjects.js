const myObject = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
    rb : 'ruby'
}

//? With for IN loop we can iterate over the object

for(const key in myObject) {
    // console.log(`${key}: ${myObject[key]}`);
}
//?Output
// js: javascript
// cpp: C++
// py: python
// rb: ruby

//!------------------------ For IN loop with Array
const programming = ['cpp','ruby','swipt','python']
for (const key in programming) {
    console.log(programming[key]);
}