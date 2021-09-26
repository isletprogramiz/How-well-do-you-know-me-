var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  question: "What is my full name ",
  answer: "Shilpi kumari"
},
{
  question: "When is my birthday ",
  answer: "22 may"
},
{
  question: "which color is my favourite  ",
  answer: "black"
},
{
  question: "What is my favourite vegetable  ",
  answer: "Bhindi"
},
{
  question: "which animal i want to have as a pet  ",
  answer: "horse"
}
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " lets see how much do you know me");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("*******************************")
  console.log("");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You Scored: ", score);
  if (score > 2) {
    console.log("u r my truee frnd 😍😘");
  }
  else {
    console.log("break-up 😐");

  }
}
welcome();
game();
showScores();



