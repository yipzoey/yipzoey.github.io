//Define questions.
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
  
//Create the array of quiz flashcards
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+1?', '4'));
quiz.push(new question('What is 5-2?', '3'));
quiz.push(new question('What is 7*4?', '28'));


let count = 0;

//Function to display the question on the webpage
function displayQuestions(i) {
	// only display the question if count is within the length of the array, otherwise return
	if (count < quiz.length) {
	  console.log(quiz[i].question + ': ');
	  
	  //once the question is displayed, wait for a click to call displayAnswer
	  document.querySelector('html').onclick = function() {
		displayAnswer(i);
	  }
	}
	else {
	  return;
	}
  }
  
  //function to display the question's answer
  function displayAnswer(i) {
	console.log(quiz[i].answer + '\n');
	
	//incremement the count and call displayQuestions for the next question
	++count;
	document.querySelector('html').onclick = function() {displayQuestions(count);}
  }
  
  // call displayQuestions to start iterating through the flashcards array
  document.querySelector('html').onclick = function() {displayQuestions(count);}