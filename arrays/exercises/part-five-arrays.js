let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
//The parameter inside the parentheses defines the delimiter used to separate the string into array indexes...
console.log(str.split());       // when no parameter is defined, the entire string is placed as a single index inside the array
console.log(str.split('e'));    // the 'e' parameter splits the string into a new index in the array wherever an 'e' is present; the character is used to split and therefore is excluded
console.log(str.split(' '));    // the ' ' (space) parameter splits the string into a new index in the array wherever a space is present, effectively splitting the string by words
console.log(str.split(''));     // the '' (null) parameter splits the string into a new index in the array by character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());        // when no parameter is defined the array elements are placed in a string separated by comma connectors
console.log(arr.join('a'));     // the 'a' parameter joins the array elements into a string by the that connector, effectively creating a new string
console.log(arr.join(' '));     // the ' ' (space) parameter joins the array elements into a string separated by that space connector
console.log(arr.join(''));      // the '' (null) parameter joins the array elements into a string with no connectors

//3) Do split or join change the original string/array? <<NO>>

console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let newArray = cargoHold.split(',');
console.log(newArray);
newArray.sort();
console.log(newArray.join(', '));

// or do the same thing using a single chained statement:

console.log(cargoHold.split(',').sort().join(', '));