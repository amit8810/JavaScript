if(true) {
    //?iske andar jo likha hai wo hai block scope
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a) //*its scope lies with in the {}
// console.log(b) //*its scope lies with in the  {}

//? bracket ke bahar jo bhi likha hai wo hai global scope


console.log(c)  //! that the problem with var...it is accessible outside the {}....PLease avoid as much of possible of the use of var in the real world