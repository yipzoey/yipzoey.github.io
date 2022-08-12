//Define questions.
class question {
  constructor(question, answer,image) {
    this.question = question;
    this.answer = answer;
    this.image = image;
  }
}
  
//Create the array of quiz flashcards
let quiz = [];

//Add the three objects to the array.
quiz.push(new question('What is 3+1?', '4','/Users/yezi/Desktop/IWP/flashcards/vImage/image/4.jpeg'));
quiz.push(new question('What is 5-2?', '3','/Users/yezi/Desktop/IWP/flashcards/vImage/image/3.jpeg'));
quiz.push(new question('What is 7*4?', '28','/Users/yezi/Desktop/IWP/flashcards/vImage/image/28.jpeg'));


//Declare the variables flashcards and current index.
let count = 0;

//function to display the question
function displayQuestions(i) {
  //reset 'answer' to be blank
  document.getElementById("answer").innerHTML = '';
  
  //remove image from previous question
  if (i > 0) {
    img.parentNode.removeChild(img);
  }
  
  if (count < quiz.length) {
    //update the on-screen instructions and display the question
    document.getElementById("instructions").innerHTML = "Hover over the question to see the answer!";
    document.getElementById("question").innerHTML = quiz[i].question;
  }
  else {
    //update instructions and reset 'question' to be blank
    document.getElementById("instructions").innerHTML = "All Done!";
    document.getElementById("question").innerHTML = "";
    return;
  }
}

//define the image object with restricted size
var img = document.createElement('img');
img.style.width = '300px';
img.style.height = '300px';

//function to display the answer
function displayAnswer(i) {
  //display the answer for the given question
  document.getElementById("answer").innerHTML = quiz[i].answer;
  
  //display the image
  img.src = quiz[i].picture;
  document.getElementById('body').appendChild(img);
  
  //update the instructions
  document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
  
  // call nextQuestion
  ++count;
  nextQuestion();
}

//function to display the next question on click
function nextQuestion() {
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

//set the instructions for the start of the 'quiz'
document.getElementById("instructions").innerHTML = "Click to Begin!";

//call displayQuestions on the first click
document.querySelector('html').onclick = function() {displayQuestions(count);}