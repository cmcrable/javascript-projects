const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


let oneStr = str.replace("Lau", "");
let twoStr = str.slice(0 ,3);

let finalStr = oneStr + twoStr

console.log(`The originial string is "${str}" and the modified string is "${finalStr}".`);


//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
