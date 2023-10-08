// Immediately Invoked Function Expression (IIFE)

//* global scope ke pollution se problem hoti  hai kayi baar....uske pollution ko hatane ke liye iife use hote hai

//? Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})(); //! don't forget to put semicolom without this it wont work.

//SYNTAX
// ()()

//? Without Named IIFE
( () => {
    console.log('I am a arrow function...iife');
} )();

( (name) => {
    console.log(`my name is ${name}`);
} )('Amit');