// *Global variables*
var userScore = 0;
var wins = 0;
var losses = 0;
var targetNumber = 0;
var crystalNumbers = [];
var crystal1;
var crystal2;
var crystal3;
var crystal4;

console.log('Global targetNumber: ', targetNumber);
console.log('Global crystalNumbers: ', crystalNumbers);
console.log('crystal1: ', crystal1);
console.log('crystal2: ', crystal2);
console.log('crystal3: ', crystal3);
console.log('crystal4: ', crystal4);



// *FUNCTIONS*
function newRound() {
   // Reset to 0
crystalNumbers = [];
   // Create for loop to output 4 random numbers
   for (var i = 0; i < 4; i++) {
      crystalNumbers.push(Math.floor(Math.random() * 12) + 1);
   }
   // Find a new target number
targetNumber = Math.floor(Math.random() * 102) + 19;

$("#target-number").html(targetNumber);
$("#crystal1").html(crystal1);
$("#crystal2").html(crystal2);
$("#crystal3").html(crystal3);
$("#crystal4").html(crystal4);

// Console Logs
console.log('function/targetNumber: ', targetNumber);
console.log('function/crystalNumbers: ', crystalNumbers);
}
newRound();