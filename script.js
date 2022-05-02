var timer;
var testTime = 5;
var score = 0;
var questionIndex = 0;
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
timerEl.innerText = `Time: ${testTime}`;
var questionsData = [
  {
    question: "What is my name?",
    choices: {
      A: "Allen",
      B: "Bernard",
      C: "Charles",
    },
    answer: "A",
  },
  {
    question: "What is Bitcoin?",
    choices: {
      A: "Magic Intenet Money",
      B: "Cash me outside",
      C: "The future",
    },
    answer: "B",
  },
];

document.getElementById("enter").addEventListener("click", () => {
  startGame();
  timer = setInterval(() => {
    testTime--;
    timerEl.innerText = `Time: ${testTime}`;
  }, 1000);
});
function startGame() {
  document.getElementById("welcome-page").classList.add("hide");
  questionsEl.classList.remove("hide");
}

function nextQuestion() {
  questionsEl.innerHTML = `
  <h3> ${questionsData[questionIndex].question} </h3>`;
}
