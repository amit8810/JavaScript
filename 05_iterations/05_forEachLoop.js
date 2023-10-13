//! +++++++++++++++++++++++++++++  ForEach Loop
const coding = ['js', 'cpp', 'rb', 'java', 'py']

//Variation 1
coding.forEach( function (item) {
    // console.log(`I love ${ item }`) // I love js, cpp...
} )

//Variation 2
coding.forEach( (item) => {
    // console.log(item);
} )

//Variation 3
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

//! Interesting  things....................................................................
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )
// js 0 [ 'js', 'cpp', 'rb', 'java', 'py' ]
// cpp 1 [ 'js', 'cpp', 'rb', 'java', 'py' ]
// rb 2 [ 'js', 'cpp', 'rb', 'java', 'py' ]
// java 3 [ 'js', 'cpp', 'rb', 'java', 'py' ]
// py 4 [ 'js', 'cpp', 'rb', 'java', 'py' ]

//? ****************************** Iterating over the Array Objects ***************************************
const myCoding = [
    {
        name: "JS",
        lang:"JavaScript"

    },
    {
        name: "CPP",
        lang:"C++"
    },
    {
        name: "PY",
        lang:"Python"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lang);
})