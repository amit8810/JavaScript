class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is, ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)             //* attention needed *****************
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}


const deman = new Teacher("deman", "deman@gmail.com", "12345678")
deman.addCourse() //? A new course was added by deman

const lucifer = new User("lucifer")
lucifer.logMe() //? USERNAME is, lucifer
// lucifer.addCourse() //! give error