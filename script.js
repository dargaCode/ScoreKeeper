var DEFAULT_MAX = 5;

var scores = {
  p1: 0,
  p2: 0,
  lastScorer: null, //null, "p1", or "p2"
  max: DEFAULT_MAX
};

// SELECTORS

var p1Display = document.querySelector(".p1-score");
var p2Display = document.querySelector(".p2-score");
var statusHeading = document.querySelector(".status-heading");
var p1Button = document.querySelector(".p1-btn");
var p2Button = document.querySelector(".p2-btn");
var resetButton = document.querySelector(".reset-btn");
var maxScoreInput = document.querySelector(".max-score-input");

// EVENTS

p1Button.addEventListener("click", clickP1);
p2Button.addEventListener("click", clickP2);
resetButton.addEventListener("click", clickReset);
maxScoreInput.addEventListener("change", changeMaxScore)

function clickP1() {
  if (!isGameOver()) {
    scores.p1++;
    scores.lastScorer = "p1";
    statusHeading.innerHTML = "Player 1 Scores!";
    console.log("p1 scores!");
  }
  updateUi();
}

function clickP2() {
  if (!isGameOver()) {
    scores.p2++;
    scores.lastScorer = "p2";
    statusHeading.innerHTML = "Player 2 Scores!";
    console.log("p2 scores!");
  }
  updateUi();
}

function clickReset() {
  scores.p1 = 0;
  scores.p2 = 0;
  scores.lastScorer = null;
  console.log("reset scores");
  updateUi();
}

function changeMaxScore() {
  scores.max = Number(this.value);
  updateUi();
}

// LOGIC

function isGameOver() {
  return scores.p1 === scores.max || scores.p2 === scores.max;
}

function isGameNew() {
  return scores.p1 === 0 && scores.p2 === 0;
}

function declareWinner() {
  if (scores.p1 > scores.p2) {
    statusHeading.innerHTML = "Player 1 Wins!";
  }
  else if (scores.p2 > scores.p1) {
    statusHeading.innerHTML = "Player 2 Wins!";
  }
}

function styleLastScorer() {
  p1Display.classList.remove("last-scorer");
  p2Display.classList.remove("last-scorer");

  if (scores.lastScorer === "p1") {
    p1Display.classList.add("last-scorer");
  }
  else if (scores.lastScorer === "p2") {
    p2Display.classList.add("last-scorer");
  }
}

function updateUi() {
  p1Display.innerHTML = scores.p1;
  p2Display.innerHTML = scores.p2;
  maxScoreInput.value = scores.max;

  if (isGameOver()) {
    declareWinner();
    p1Button.disabled = true;
    p2Button.disabled = true;
    resetButton.disabled = false;
  }
  else if (isGameNew()) {
    statusHeading.innerHTML = "Let's Play!";
    p1Button.disabled = false;
    p2Button.disabled = false;
    resetButton.disabled = true;
  }
  else {
    p1Button.disabled = false;
    p2Button.disabled = false;
    resetButton.disabled = false;
  }

  styleLastScorer();
}

// MAIN

updateUi();
