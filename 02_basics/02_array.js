const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) //? Avoid this

// console.log(marvel_heroes) //! [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3]) //! [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heroes[3][1]) //* flash

let allHeroes = marvel_heroes.concat(dc_heroes) //? you can do this
// console.log(allHeroes) //! [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //? using spread operation
// console.log(all_new_heroes) //! [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //* Interesting thing
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array) //! [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//* important + interesting
// console.log(Array.isArray("Amit")) //! false
// console.log(Array.from("Amit")) //* [ 'A', 'm', 'i', 't' ]
// console.log(Array.from({name:"Amit"})) //? interesting

//TODO : making array form variables
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3)); //? [ 100, 200, 300 ]



