// *Global variables*
var userScore = 0;
var wins = 0;
var losses = 0;
var computerNumber = Math.floor(Math.random() * 102) + 19;
var crystalNumbers = [1, 2, 3, 4];
var crystal1 = crystalNumbers[0]
var crystal2 = crystalNumbers[1]
var crystal3 = crystalNumbers[2]
var crystal4 = crystalNumbers[3]


console.log('crystalNumbers: ', crystalNumbers);




// *FUNCTIONS*
function nextRound() {
   // Random number generator
computerNumber = Math.floor(Math.random() * 102) + 19;
crystalNumbers = [];
console.log('Function/crystalNumbers: ', crystalNumbers);
   // Create for loop to output 4 random numbers
   for (var i = 0; i < 4; i++) {
      crystalNumbers.push(Math.floor(Math.random() * 12) + 1)
   }
}
nextRound();