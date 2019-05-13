// *Global variables*
var userScore = 0;
var wins = 0;
var losses = 0;
var targetNumber = 0;
var crystalNumbers = [];
var crystal1 = crystalNumbers[0]
var crystal2 = crystalNumbers[1]
var crystal3 = crystalNumbers[2]
var crystal4 = crystalNumbers[3]

console.log('targetNumber: ', targetNumber);
console.log('crystalNumbers: ', crystalNumbers);




// *FUNCTIONS*
function newRound() {
   // Reset to 0
crystalNumbers = [];
   // Create for loop to output 4 random numbers
   for (var i = 0; i < 4; i++) {
      crystalNumbers.push(Math.floor(Math.random() * 12) + 1)
   }
   // Find a new target number
targetNumber = Math.floor(Math.random() * 102) + 19;

// Console Logs
console.log('function/crystalNumbers: ', crystalNumbers);
}
newRound();

// maybe need to have the loop in a function of its own to be called when needed.