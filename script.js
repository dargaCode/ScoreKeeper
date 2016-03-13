var DEFAULT_MAX = 5;

var scores = {
  p1: 0,
  p2: 0,
  max: DEFAULT_MAX
};

// SELECTORS

var p1Score = document.querySelector(".p1-score");
var p2Score = document.querySelector(".p2-score");
var winScore = document.querySelector(".score-to-win");
var p1Button = document.querySelector(".p1-btn");
var p2Button = document.querySelector(".p2-btn");
var resetButton = document.querySelector(".reset-btn");
var scoreDial = document.querySelector(".max-score-input");

// EVENTS

p1Button.addEventListener("click", incrementP1);
p2Button.addEventListener("click", incrementP2);
resetButton.addEventListener("click", resetScores);

function incrementP1() {
  if (scores.p1 < scores.max) {
    scores.p1++;
    console.log("p1 scores!");
  }
  updateUi();
}

function incrementP2() {
  if (scores.p2 < scores.max) {
    scores.p2++;
    console.log("p2 scores!");
  }
  updateUi();
}

function resetScores() {
  scores.p1 = 0;
  scores.p2 = 0;
  console.log("reset scores");
  updateUi();
}

// LOGIC

function updateUi() {
  p1Score.innerHTML = scores.p1;
  p2Score.innerHTML = scores.p2;
  scoreDial.value = scores.max;
}

// MAIN

updateUi();
