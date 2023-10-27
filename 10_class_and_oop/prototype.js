// let myName = "hitesh      "
// console.log(myName.length); // 12 (also counting space)
// console.log(myName.trueLength());

let myHeroes = ["thor", "spiderman", "batman"];

let heroPower = {
  thor: "hammer",
  spderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spderman}`);
  },
};

Object.prototype.amit = function () {
  console.log(`amit is present in all object`);
};

//* Attention needed *******************************************
heroPower.amit(); // amit is present in all object
myHeroes.amit(); // amit is present in all object

//********************** inheritance **********************************************/
const User = {
    fName : "amit",
    email: 'amit@gmail.com'
}

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport
};

// modern syntax // prototyple inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "amitSingh"
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"carla".trueLength()

