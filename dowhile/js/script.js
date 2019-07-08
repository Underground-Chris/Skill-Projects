var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}
do{
guess = prompt("I am thinking of a number between 1 and 10, what is it?");
  guessCount++;
  if(parseInt(guess) === randomNumber){

    correctGuess = true;
  }else if(isNaN(guess) ){ 
  alert("Please type a number!");
  }
} while( ! correctGuess)
  
 document.write("Wow you got it! " + randomNumber);
document.write(" it took " + guessCount + " tries")
