//! New way of defining getter and setter now days

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase() //! _(underscore) without this we get error
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new User("amit@gmail.com", "abc")
console.log(hitesh.password);
console.log(hitesh.email);