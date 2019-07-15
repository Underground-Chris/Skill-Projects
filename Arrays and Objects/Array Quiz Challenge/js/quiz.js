var quiz = [];
var answer = '';
var correctAnswers = 0;

function print(message) {
  document.write(message);
}


quiz = [
  ['Who is the best Cat?', 'mogwai'],
  ['What is the best food?', 'pizza'],
  ['What is the best day?', 'saturday']
];

// loops through the two-dimensional array asking the question.
for(var i=0; i < quiz.length; i++){
  if(quiz[0]){
    //asks question indexing the row of the array but the 0 position for questions
    answer = prompt(quiz[i][0]);
    
    //make sure to set the question to lowercase
    answer = answer.toLowerCase();
    
    //conditional checks if answer matches the 1 index else displays the answer as wrong
    if(answer === quiz[i][1]){
       print('</br>'+'Wow great job ' +'<Strong>'+ quiz[i][1] +'</Strong>'+ ' is correct!');
      correctAnswers++;
      }else {
        print('</br>'+'Sorry the answer is ' +  '<Strong>'+ quiz[i][1] +'</Strong> not ' + answer +  ' :<' );
      }
  }
}
print('</br> You got '+ correctAnswers + ' Correct Answers.');