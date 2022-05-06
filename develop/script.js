var timer;
var testTime = 5;
var score = 0;
var questionIndex = 0;
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
timerEl.innerText = `Time: ${testTime}`;
var questionsData = [
  {
    question: "Which of these cryptocurrencies is the oldest?",
    choices: {
      A: "Ether",
      B: "Tether",
      C: "Bicoin",
    },
    answer: "C",
  },
  {
    question: "What is a CBDC??",
    choices: {
      A: "Magic Intenet Money",
      B: "Reward for ledning BTC",
      C: "Digital currency issued by a central bank",
    },
    answer: "C",
  },
  {
    question: "What is the worlds most actively traded crypto coin?",
    choices: {
      A: "Bitcoin",
      B: "Tether",
      C: "Dogecoin",
    },
    answer: "B",
  },
  {
    question: "Where do you store cryptocurrency?",
    choices: {
      A: "Blockchain",
      B: "Chain Wallet",
      C: "Private Keys",
    },
    answer: "A",
  },
  {
    question: "What is a smart contract?",
    choices: {
      A: "A cloud based contract",
      B: "A computer protocol",
      C: "A contract written by lawyers",
    },
    answer: "B",
  },
  {
    question: "Who invented Bitcoin?",
    choices: {
      A: "The magic wizard",
      B: "US government",
      C: "Satoshi Nakamoto",
    },
    answer: "C",
  },
  {
    question: "Who invented Ether?",
    choices: {
      A: "Vitalik Buterin",
      B: "Stan Lee",
      C: "Tom Hanks",
    },
    answer: "A",
  },
  {
    question:
      "Which site run by Ross Ulbricht was closed by the FBI for letting people buy drugs with Bitcoin??",
    choices: {
      A: "Dark Alley",
      B: "Silk Road",
      C: "Silk Street",
    },
    answer: "B",
  },
  {
    question:
      "What is the name of the famous Bitcoin exchange from Japan that collapsed in 2014?",
    choices: {
      A: "Blockchain.info",
      B: "Tradehill",
      C: "Mt. Gox",
    },
    answer: "C",
  },
  {
    question: "What does the block in the blockchain consist of?",
    choices: {
      A: "Transaction data",
      B: "A Hash point",
      C: "All of these",
    },
    answer: "C",
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
