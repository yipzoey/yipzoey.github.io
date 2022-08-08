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

function displayQuestions(i) {
    document.getElementById("answer").innerHTML = '';
    if (count < quiz.length) {
      document.getElementById("instructions").innerHTML = "Hover over the question to see the answer!";
      document.getElementById("question").innerHTML = quiz[i].question;
    }
    else {
      document.getElementById("instructions").innerHTML = "All Done!";
      document.getElementById("question").innerHTML = "";
      return;
    }
  }
  function displayAnswer(i) {
    document.getElementById("answer").innerHTML = quiz[i].answer;
    ++count;
    document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
    nextQuestion();
  }
  
  function nextQuestion() {
    document.querySelector('html').onclick = function() {displayQuestions(count);}
  }
  
  document.getElementById("instructions").innerHTML = "Click to Begin!";
  document.querySelector('html').onclick = function() {displayQuestions(count);}