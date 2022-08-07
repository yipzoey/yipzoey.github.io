//Define questions.
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.correct = false;
  }
}
  
//Create the array of quiz flashcards
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+1?', '4'));
quiz.push(new question('What is 5-2?', '3'));
quiz.push(new question('What is 7*4?', '28'));


//Declare the variables flashcards and current index.
let flashcards = null;
let currentI = 0;

//Define the function pageLoad:
function pageLoad() {
  flashcards = document.getElementById("flashcards");
  //Show the first question
  flipCard(0);
}

//Define the function flipCard:
function flipCard(i) {
  //set the index to i
	currentI = i;
	flashcards.innerHTML = quiz[i].question;
}

//Define the function showNext:
function showNext() {
	document.getElementById("answer").innerHTML="";
  //If the current index is less than the array length -1, flipCard and increment
	if (currentI < quiz.length -1)
		flipCard(++currentI);
	else
		flipCard(0);
}
	

//Define the function to show the answer element
function showAnswer()
{
	document.getElementById("answer").innerHTML=quiz[currentI].answer;
	
}
