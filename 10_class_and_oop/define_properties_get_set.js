//! how in old time getter and setter is defined

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this.email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this.password = value
        }
    })
}

const amit = new User("amit@yahoo.com", "dfjhfg")
console.log(amit.email)
console.log(amit.password)