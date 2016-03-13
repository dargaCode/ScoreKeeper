var DEFAULT_MAX = 5;

var scores = {
  p1: 0,
  p2: 0,
  max: DEFAULT_MAX
};

// SELECTORS

var p1Display = document.querySelector(".p1-score");
var p2Display = document.querySelector(".p2-score");
var p1Button = document.querySelector(".p1-btn");
var p2Button = document.querySelector(".p2-btn");
var resetButton = document.querySelector(".reset-btn");
var scoreDial = document.querySelector(".max-score-input");
var statusHeading = document.querySelector(".status-heading");

// EVENTS

p1Button.addEventListener("click", clickP1);
p2Button.addEventListener("click", clickP2);
resetButton.addEventListener("click", clickReset);

function clickP1() {
  if (scores.p1 < scores.max) {
    scores.p1++;
    console.log("p1 scores!");
  }
  updateUi();
}

function clickP2() {
  if (scores.p2 < scores.max) {
    scores.p2++;
    console.log("p2 scores!");
  }
  updateUi();
}

function clickReset() {
  scores.p1 = 0;
  scores.p2 = 0;
  console.log("reset scores");
  updateUi();
}

// LOGIC

function updateUi() {
  p1Display.innerHTML = scores.p1;
  p2Display.innerHTML = scores.p2;
  scoreDial.value = scores.max;
}

// MAIN

updateUi();
