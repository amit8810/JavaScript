const coding = ["js", "ruby", "java", "python", "cpp" ]

//************************ ForEach Return kuch nhi karta hai
const values  = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
// console.log(values);

//*************************** Filters Introduction

const myNums = [10,11,12,13,14,15,16,17]

const newNums = myNums.filter( (num) => num > 15 )

// console.log(newNums); //* [ 16, 17 ]

const newNums2 = []
myNums.forEach( (num) => {
    if(num>15){
        newNums2.push(num)
    }
} )
// console.log(newNums2); //* [ 16, 17 ]


const books = [
    {title: 'Book-1', genre: 'Fiction', publish:'1986'},
    {title: 'Book-2', genre: 'History', publish:'1987'},
    {title: 'Book-3', genre: 'Horror', publish:'1988'},
    {title: 'Book-4', genre: 'Science', publish:'1989'},
    {title: 'Book-5', genre: 'Horror', publish:'1993'},
    {title: 'Book-6', genre: 'Romantic', publish:'1992'},
    {title: 'Book-7', genre: 'Fiction', publish:'1991'},
    {title: 'Book-8', genre: 'Romantic', publish:'1995'},
    {title: 'Book-9', genre: 'History', publish:'2003'},
    {title: 'Book-10', genre: 'Romantic', publish:'2010'},

]

let userBooks = books.filter( (bk) => bk.genre === 'History' )
// console.log(userBooks)
// [
    //     { title: 'Book-2', genre: 'History', publish: '1987' },
    //     { title: 'Book-9', genre: 'History', publish: '2003' }
// ]    
userBooks = books.filter( (bk) => {
    return bk.publish > 1990 && bk.genre === 'History'
} )
console.log(userBooks)
// [ { title: 'Book-9', genre: 'History', publish: '2003' } ]