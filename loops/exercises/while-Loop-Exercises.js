//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel;
let numAstronauts;
let altitude;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
startingFuel = input.question("Please enter the starting fuel level: ");
startingFuel = Number(startingFuel);

while (startingFuel < 5000 || startingFuel > 30000) {
  console.log("The value you entered does not fit within acceptable parameters; please try again: ");
  startingFuel = Number(startingFuel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numAstronauts = input.question("Please enter the number of astronauts: ");
numAstronauts = Number(numAstronauts);

while (numAstronauts < 1 || numAstronauts > 7) {
  console.log("Please enter a valid number of astronauts with a maximum of 7: ");
  numAstronauts = Number(numAstronauts);
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
