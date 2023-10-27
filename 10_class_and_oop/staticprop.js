class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

    static createId(){ //? not give access to outer bodies, it can use only in this class
        return `123`;
    }
}

const amit = new User("amit")
// console.log(amit.createId()) //! give error [due to access the createId bcoz it is static]

class Teacher{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const vijay = new Teacher("vijay", "vijay@gmail.com")
console.log(vijay.createId()) //! give error [due to use of static]