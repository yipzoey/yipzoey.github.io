//Define questions.
class question {
  constructor(question, answe,image) {
    this.question = question;
    this.answer = answer;
    this.image = image;
    this.correct = false;
  }
}
  
//Create the array of quiz flashcards
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+1?', '4','http://yipzoey.github.io/flashcards/image/4.jpeg'));
quiz.push(new question('What is 5-2?', '3','http://yipzoey.github.io/flashcards/image/3.jpeg'));
quiz.push(new question('What is 7*4?', '28','http://yipzoey.github.io/flashcards/image/28.jpeg'));


//Declare the variables flashcards and current index.
let flashcards = null;
let currentIndex = 0;

//Define the function pageLoad that add an event listener to flashcard variable
function pageLoad() {
	flashcards=document.getElementById("flashcards");
	flashcards.addEventListener("mouseover", function () {showAnswer()});
	document.getElementById("btnNext").addEventListener("click", function() {showNext()});
	let message=document.getElementById("message");
	message.innerHTML = "Please hover your cursor over the question to see the answer.";
	
	flipCard(0);
}


//Define the function flipCard
function flipCard(i) {
  //set the index to i
	currentIndex = i;
	flashcards.innerHTML = quiz[i].question;
}

//Define the function showNext:
function showNext() {
	document.getElementById("answer").innerHTML="";
	document.getElementById("image").src="";
	if (currentIndex < quiz.length -1)
		flipCard(++currentIndex);
	else
		flipCard(0);
}
	

//Define the function to show the answer element
function showAnswer()
{
	document.getElementById("answer").innerHTML=quiz[currentIndex].answer;
	document.getElementById("image").src="../"+quiz[currentIndex].image;
	
}