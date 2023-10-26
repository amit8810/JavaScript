const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //Database calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});
/*
Async task is complete
Promise consumed
*/

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Task 2 completed");
});

/*
Async task 2
Task 2 completed
*/

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Amit", email: "amit@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});
/*
{ username: 'Amit', email: 'amit@gmail.com' }
*/

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Alex", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or rejected!");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javscript", password: "123456789" });
    } else {
      reject("ERROR : Js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
