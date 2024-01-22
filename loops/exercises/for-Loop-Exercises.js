/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// // a.    
// for (i = 0; i < 21; i++) {
//   console.log(i);
// };
// // b.
// for (i = 3; i < 30; i += 2) {
//   console.log(i);
// };
// // c.
// for (i = 12; i > -15; i -= 2) {
//   console.log(i);
// }
// // d.
// let highNum = 50;
// let lowNum = 20;

// for (let i = highNum; i > lowNum; i -= 1) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

// let newString = "LaunchCode";
// let newArray = [1, 5, 'LC101', 'blue', 42];

// // a.
// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// // b.
// for (let j = newString.length -1; j >= 0; j--) {
//   console.log(newString[j]);
// }

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let newArray2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenArray = [];
let oddArray = [];

// a.
for (i = 0; i < newArray2.length; i++) {
  if (newArray2[i] %2 === 0) {
    evenArray.push(i);
  } else {
    oddArray.push(i);
  }
}

// b.
console.log(evenArray);
console.log(oddArray);
