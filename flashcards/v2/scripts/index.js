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
  //remove the answer from the previous question
  document.getElementById("answer").innerHTML = '';
  //when we still have quiz left
  if (count < quiz.length) {
    document.getElementById("instructions").innerHTML = "Click the question to see the answer";
    
    document.getElementById("question").innerHTML = quiz[i].question;
  }
  //when we are finished with the quiz set
  else {
    document.getElementById("instructions").innerHTML = "All Done!";
    
    //r exit iteration
    document.getElementById("question").innerHTML = "";
    return;
  }
}

//function to display the answer
function displayAnswer(i) {
  document.getElementById("answer").innerHTML = quiz[i].answer;
  ++count;
  
  document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
  document.querySelector('html').onclick = function() {nextQuestion();}
}

//function to call display question after displaying the answer
function nextQuestion() {
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

//set instructions when the webpage is opened
document.getElementById("instructions").innerHTML = "Click Anywhere to Begin!";

//display the first question when the user clicks on the page
document.querySelector('html').onclick = function() {displayQuestions(count);}
