const fruits = [
  { id: 1, name: "Apple", price: 2.5, expiryDate: "2024-12-30" },
  { id: 2, name: "Banana", price: 1.2, expiryDate: "2024-12-25" },
  { id: 3, name: "Cherry", price: 3.0, expiryDate: "2025-01-05" },
  { id: 4, name: "Grapes", price: 4.0, expiryDate: "2025-01-10" },
  { id: 5, name: "Mango", price: 5.5, expiryDate: "2024-12-28" },
];  

// Remove all fruits with prices less than 3.
function ans01(){

    const ans=fruits.filter((ele)=> 3<ele.price)
    console.log(ans)
} 
ans01()

 
// Create a new array with only fruits that expire in 2024.
 function ans02 (){
     const ans=fruits.filter((ele) )
 }
// Increase the price of all fruits by 10%.
// Create a new array of fruits with an additional property discountedPrice (10% off).
// Remove the fruit with the highest price.
// Find the fruit with the shortest name.
// Replace the second fruit in the array with a new fruit.
// Create a new array of fruits sorted by expiry date.
// Combine this fruit array with another array of vegetables.
// Find the total number of characters in all fruit names combined.
// Create a new array containing only the names of fruits priced above 4.
// Remove the last two fruits from the array.
// Split the array into two arrays: one with fruits priced above 3 and one with the rest.
// Create a new array where the expiryDate is converted to a Date object.
