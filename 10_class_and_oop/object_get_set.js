const User = {
    _email : "amit@google.com",
    _password : "afrjf",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)