// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }
    
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const amit = new User("amit", "amit@gmail.com", "12345")

console.log(amit.encryptPassword())
console.log(amit.changeUsername())

//******************* behind the scene **************************************************

// function User (username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`;
// }

// const carla = new User("carla", "carla@gmail.com", "7859");
// console.log(carla.encryptPassword()) //! 7859abc