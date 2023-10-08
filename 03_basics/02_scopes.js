if (true) {
  //?iske andar jo likha hai wo hai block scope
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a) //*its scope lies with in the {}
// console.log(b) //*its scope lies with in the  {}

//? bracket ke bahar jo bhi likha hai wo hai global scope

// console.log(c); //! that the problem with var...it is accessible outside the {}....PLease avoid as much of possible of the use of var in the real world

function one() {
  const username = "Amit";

  function two() {
    const website = "youtube";
    //console.log(username);
  }
  //console.log(website); //! give error you try to access website outside its scope

  two();
}
one();

if (true) {
  const username = "Alex";
  if (username === "Alex") {
    const website = " youtube";
    //console.log(`username :${username} and website ${website}`);
  }
  //console.log(website); //! this line give error
}

// ++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++

console.log(addone(5)) //? yaha pe ye chal jayega
function addone(num){
    return num + 1;
}


// addTwo(5) //! ye nhi kar sakte error aayega
//*its is also known as expresssion
const addTwo = function(num) {
    return num+2;
}
addTwo(5) //* yaha kr sakte hai 

