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


// *FUNCTIONS*
   // Checks to see whether game was won or lost
function gameStatus() {
   if (userScore === targetNumber) {
      alert("You Win!");
      wins++;
      newRound();
   }
   else if (userScore > targetNumber) {
      alert("You Lose!");
      losses++;
      newRound();
   }
   else {}
}

function newRound() {
   // Reset crystal numbers array to null
crystalNumbers = [];
userScore = 0;

   // Create for loop to output 4 random numbers
   for (var i = 0; i < 4; i++) {
      crystalNumbers.push(Math.floor(Math.random() * 12) + 1);
   }
crystal1 = crystalNumbers[0]
crystal2 = crystalNumbers[1]
crystal3 = crystalNumbers[2]
crystal4 = crystalNumbers[3]

   // Find new target number
targetNumber = Math.floor(Math.random() * 102) + 19;

// Html outputs
$("#target-number").html(targetNumber);
$("#crystal1").text(crystal1);
$("#crystal2").text(crystal2);
$("#crystal3").text(crystal3);
$("#crystal4").text(crystal4);
$("#wins").text(wins);
$("#losses").text(losses);
$("#user-score").text(userScore);

// Console Logs
// console.log('function/targetNumber: ', targetNumber);
// console.log('function/crystalNumbers: ', crystalNumbers);
}
newRound();

// Click actions
// $("#crystal1").click(function(){
//    userScore += crystal1

//    $("#user-score").text(userScore);
//    gameStatus();
// });

$(".crystal-btn").click(function(){
   var div_id=$(this).attr("id"); // gives you the ID of the clicked div
   userScore += eval(div_id);

   $("#user-score").text(userScore);
   gameStatus();
   // if(div_id==="crystal1") functionForDiv1();
   // else if(div_id==="crystal2") functionForDiv2();
   // else if(div_id==="crystal3") functionForDiv3();
   // else if(div_id==="crystal4") functionForDiv4();
});


// Global Console Logs
// console.log("-----Globals------");
// console.log('targetNumber: ', targetNumber);
// console.log('crystalNumbers: ', crystalNumbers);
// console.log('crystal1: ', crystal1);
// console.log('crystal2: ', crystal2);
// console.log('crystal3: ', crystal3);
// console.log('crystal4: ', crystal4);