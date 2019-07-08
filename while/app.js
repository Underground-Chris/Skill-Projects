//Stores upper value for math.random
var upper = 10000;
//Random Number assigned
var randomNumber = getRandomNumber(upper);
//  global variable for computers guess of randomNumber
var guess;
// How many times did it take the computer to guess this.
var attempts = 0 ;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber (upper);
attempts ++;
}

  document.write('<p>The Random number was:  ' + randomNumber +'</p>')
  document.write('<p> It took the computer '+ attempts +'</p>')

