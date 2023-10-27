// const user = {
//   username: "Amit",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from database")
//     console.log(this.username);
//   },
// };
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
//* without using new keyword print userOne and userTwo....the value are getting overwrite
// const userOne = User("carla", 12, true)
// const userTwo = User("amit", 11, false)
// console.log(userOne);
// console.log(userTwo);

//! new keyword helping avoid overwriting of value
const userOne = new User("carla", 12, true)
const userTwo = new User("amit", 11, false)
console.log(userOne);
console.log(userTwo);

