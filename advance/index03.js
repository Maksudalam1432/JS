// // const ans={
// //      name:"maksud",
     
// // }

// // const ans1={...ans}
// // console.log(ans1.name)
// // console.log(ans.name)
// // ans.id=5
// // console.log(ans)

// // console.log(ans1)

// const student = {
//   name: "Ali",
//   age: 22,
//   address: {
//     city: "Delhi",
//     pin: 110001
//   }
// };

// student.address.city="pune"



// const ans1=JSON.parse(JSON.stringify(student))
// // console.log(ans1)
// ans1.address.city="jaip"
// // console.log(ans1)

// // console.log(student)


// const num={
//     name:"anish",
//     "age":20
//     }
// // console.log(Object.keys(num))
//     // for(let key in num){
//     //    console.log(key , num[key])
//     // }

const student = {
  name: "Ali",
  age: 22,
  address: {
    city: "Delhi",
    state: "Delhi",
    pin: 110001
  }
};
// console.log(student.address.city)
// console.log(student.address.pin)
// const {city,pin}=student.address
// console.log(city)
// console.log(pin)
 /*
1. Nested Object Access

You have an object representing a student:

student has properties name, age, and address.

address is a nested object with city, state, and pin.

Task:

Access and print the student’s city and pin.

Add a new property country to the address.
 */

const library = {
  name: "City Library",
  books: [
    { title: "JavaScript Basics", author: "John", year: 2020 },
    { title: "Python Advanced", author: "Jane", year: 2021 },
    { title: "React Mastery", author: "Ali", year: 2022 }
  ]
};
//  console.log(library.books[1])
  
 /*Print the title of the second book.

Add a new book to the array.

Print all book authors using a loop.*/ 


const course={
     title:"js",
     duration:"4week"
}
 for(let key in course)
 {
     console.log(key,course[key])
 }