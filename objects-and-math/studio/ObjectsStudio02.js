// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  return Math.round(((Math.PI)*2)*radius);
};

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  return orbitTime = numOrbits * (Math.round((((orbitCircumference(orbitRadius))/orbitalSpeed))*100)/100);
}

console.log(`The mission will travel ${orbitCircumference(3)} km around the planet, 
and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  return arr[Math.floor(Math.random()*arr.length)];
 };

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let o2 = Math.round((missionDuration(3)*candidate.o2Used)*10)/10;
  console.log(`${candidate} will perform the spacewalk, which will last ${missionDuration()} hours and require ${o2} kg of oxygen.`)
}



// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let allCandidates = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

 oxygenExpended(selectRandomEntry(allCandidates)); // create array for all candidates