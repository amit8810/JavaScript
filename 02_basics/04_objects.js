// const tinderUser = new Object() //? this is singleton object
const tinderUser = {}; //? non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Amit";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

//TODO:  object with in object
const regularUser = {
  email: "chai@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Amit",
      lastname: "Singh",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname); //* Amit

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = { ...obj1, ...obj2 }; //? using spread operator // use always this
// console.log(obj3); //* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = Object.assign({}, obj1, obj2); //? another way
// console.log(obj4) //* { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//TODO : important when you fetch data // object inside on Object
const users = [
  {
    id: 12,
    fname: "amit",
  },
  {
    id: 13,
    fname: "alex",
  },
  {
    id: 14,
    fname: "mike",
  },
];
// console.log(users[0].fname) //? access

//! Important
// console.log(Object.keys(tinderUser)); //* [ 'id', 'name', 'isLoggedIn' ] // all keys are in array
// console.log(Object.values(tinderUser)); //* [ '123abc', 'Amit', false ] // all values are in array
// console.log(Object.entries(tinderUser)); //* [ [ 'id', '123abc' ], [ 'name', 'Amit' ], [ 'isLoggedIn', false ] ]

//TODO: to check whether this thing present in a object or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true //? isLoggedIn present in tinderUser object

//? ++++++++++++++++++++++ Destructure Object +++++++++++++++++++++++++++

const course = {
  coursename: "master javascript",
  price: "999",
  courseInstructor: "james",
};

const {courseInstructor} = course //? use this to destructuring
// console.log(courseInstructor); //* james
// const {courseInstructor : instructor} = course //? another way
// console.log(instructor); //* james

//? ----------------------- API small introduction -----------------------------------------
//TODO: Json Format 
// {
//   "fname" : "Amit",
//   "course" : "Btech",
//   "price" : "free"
// }



