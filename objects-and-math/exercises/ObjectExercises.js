let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};


// After you have created the other object literals, add the astronautID property to each one.

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 1
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// Create an array to hold the animal objects.

let animalHouse = ['superChimpOne', 'salamander','superChimp2','beagle','tardigrade'];

function spaceName(animal) {
   animal.astronautID = Math.trunc(Math.random(11)*10);
   return animal;
}

function assignID(arr) {
   for (let i = 0; i < arr.length; i++) {
      spaceName(arr[i].astronautID);
   }
   console.log(animalHouse);
};

assignID(animalHouse);

// Print out the relevant information about each animal.

// Start an animal race!