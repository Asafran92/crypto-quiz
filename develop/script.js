var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var startButtonEl = document.querySelector("#btns");
var quizBoxEl = document.querySelector("section");

var questionIndex = 0;
var correctCount = 0;

var time = 30;
var intervalId;

var questions = [
  {
    question: "Which of these cryptocurrencies is the oldest?",
    choices: ["Ether", "Tether", "Bicoin"],
    answer: "Bitcoin",
  },
  {
    question: "What is a CBDC??",
    choices: [
      "Magic Intenet Money",
      "Reward for ledning BTC",
      "Digital currency issued by a central bank",
    ],
    answer: "Digital currency issued by a central bank",
  },
  {
    question: "What is the worlds most actively traded crypto coin?",
    choices: ["Bitcoin", "Tether", "Dogecoin"],
    answer: "Tether",
  },
  {
    question: "Where do you store cryptocurrency?",
    choices: ["Blockchain", "Chain Wallet", "Private Keys"],
    answer: "Blockchain",
  },
  {
    question: "What is a smart contract?",
    choices: [
      "A cloud based contract",
      "A computer protocol",
      "A contract written by lawyers",
    ],
    answer: "A computer protocol",
  },
  {
    question: "Who invented Bitcoin?",
    choices: ["The magic wizard", "US government", "Satoshi Nakamoto"],
    answer: "Satoshi Nakamoto",
  },
  {
    question: "Who invented Ether?",
    choices: ["Vitalik Buterin", "Stan Lee", "Tom Hanks"],
    answer: "Vitalik Buterin",
  },
  {
    question:
      "Which site run by Ross Ulbricht was closed by the FBI for letting people buy drugs with Bitcoin??",
    choices: ["Dark Alley", "Silk Road", "Silk Street"],
    answer: "Silk Road",
  },
];

function updateTime() {
  time--;
  timerEl.textContent = time;
}

function startQuiz() {
  startButtonEl.classList.add("hide");
  quizBoxEl.classList.remove("hide");
}

function renderQuestion() {
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);

  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
    var questionListItem = document.createElement("button");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("button")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 1;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}

optionListEl.addEventListener("click", checkAnswer);
startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", renderQuestion);
