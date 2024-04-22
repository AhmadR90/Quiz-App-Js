const questions = [
  {
    question: "Which is largest animal in world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is Smallest Continent in  the World?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is largest desert in  the World?",
    answers: [
      { text: "kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "antarctica", correct: true },
    ],
  },
  {
    question: "Which is smallest country in  the World?",
    answers: [
      { text: "Vatican city", correct: true },
      { text: "Bhuttan", correct: false },
      { text: "Nepal", correct: false },
      { text: "sri lanka", correct: false },
    ],
  },
];
const qsElement = document.getElementById("question");
const ansButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQustion();
}
function showQustion() {
    resetQs();
  let CurrentQs = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + CurrentQs.question;

  CurrentQs.answers.forEach(answer => {
    const button = document.createElement("Button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansButtons.appendChild(button);
  });

}
 function resetQs(){
    nextButton.style.display=none;
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }
 }
startquiz();