// this. current context ko refers krta hai
//? context : kis ke baare mein baat hori hai
const user = {
  username: "Amit",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage(); //* Amit, welcome to website
user.username = "carla";
// user.welcomeMessage(); //* carla, welcome to website

//------------------------------- Interesting ----------------------------------------------
// console.log(this); //* {} yaha empty object hai kyuki hum abhi node environment mein hai but
//? browser ke ander console.log(this); karoge to window object dega

// function chai() {
//     let username = "Amit"
//     console.log(this.username);
// }
// chai() //* undefined kyoki function ke andr this kaam nhi karega...objec tke andr hi karega

const chai = () => {
    let username = 'Amit'
    console.log(this.username);
}

// chai() //* undefined arrow function ke andr bhi use nhi kar sakte


//++++++++++++++++++++++ Arrow function +++++++++++++++++++++++

//* basic layout of Arrow fucntion
const addTwo = (num1, num2) => { //? karli braces likha isliye return likhna pada
    return num1+num2;
}
// console.log(addTwo(3,4)) //! 7

//* implicit layout of arrow function
const addThree = (num1, num2, num3) => (num1+num2+num3); //? return keyword nhi likhna pada
// console.log(addThree(1,2,3)) //! 6

//? ispe dhayan do kiya hua hai yaha...object return karaya hai on the basis of parameters
const addSum = (num1, num2) => ({username : "amit"})
// console.log(addSum(2,3)) //* { username: 'amit' }


// const arr = [1,2,3,4,5,6]
// arr.forEach(() => ())
