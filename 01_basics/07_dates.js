let myDate = new Date()
// console.log(myDate) //! 2023-10-07T14:18:28.493Z
// console.log(myDate.toString()) //! Sat Oct 07 2023 19:49:31 GMT+0530 (India Standard Time)
// console.log(myDate.toJSON()); //! 2023-10-07T14:20:06.798Z
// console.log(myDate.toDateString()) //! Sat Oct 07 2023
// console.log(myDate.toTimeString()) //! 19:51:38 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()) //! 7/10/2023
// console.log(typeof myDate) //! object
// console.log(myDate.toLocaleTimeString()) //! 7:54:01 pm

let myCreatedDate = new Date("01-14-2023")
// let myCreatedDate = new Date(2003, 7, 1) //! month start with 0 in java script
// console.log(myCreatedDate.toDateString()) // Fri Aug 01 2003

let myTimeStamp = Date.now()
// console.log(myTimeStamp) //! 1696689078432 milisecond mein
// console.log(myCreatedDate.getTime()) //! 1673634600000

// console.log(Date.now()) //! 1696689135383 in milisecond
// console.log(Math.floor(Date.now()/1000)) //! 1696689182 in second

let newDate = new Date()
// console.log(newDate.toDateString()) //! Sat Oct 07 2023
// console.log(newDate.getMonth() + 1) //! 10
// console.log(newDate.getDay()) //! 6

newDate.toLocaleString('default',{
    weekday:"long",
 
})
