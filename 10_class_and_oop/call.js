function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    // this.username = username
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const amit = new createUser("amit", "amit@gmail.com", "1234")
console.log(amit)