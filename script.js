var DEFAULT_TARGET = 5;
var DEFAULT_MIN_TARGET = 1;
var MAX_TARGET = 20;

var scores = {
  p1: 0,
  p2: 0,
  lastScorer: null, //null, "p1", or "p2"
  target: DEFAULT_TARGET,
  minTarget: DEFAULT_MIN_TARGET
};

// SELECTORS

var p1Display = document.querySelector("#p1-score");
var p2Display = document.querySelector("#p2-score");
var statusHeading = document.querySelector("#status-heading");
var p1Button = document.querySelector("#p1-btn");
var p2Button = document.querySelector("#p2-btn");
var resetButton = document.querySelector("#reset-btn");
var targetScoreInput = document.querySelector("#target-score-input");

// EVENTS

p1Button.addEventListener("click", clickP1);
p2Button.addEventListener("click", clickP2);
resetButton.addEventListener("click", clickReset);
targetScoreInput.addEventListener("change", changeTargetScore)

function clickP1() {
  if (!isGameOver()) {
    scores.p1++;
    scores.lastScorer = "p1";
    console.log("p1 scores!");
  }
  updateUi();
}

function clickP2() {
  if (!isGameOver()) {
    scores.p2++;
    scores.lastScorer = "p2";
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

function changeTargetScore() {
  var target = Number(this.value);
  if (isValidTargetScore(target)) {
    scores.target = target;
  }
  else {
    scores.target = MAX_TARGET;
  }
  updateUi();
}

// LOGIC

function isGameNew() {
  return scores.p1 === 0 && scores.p2 === 0;
}

function isGameTied() {
  return scores.p1 === scores.p2 && scores.p1 > 0;
}

function isGameSuddenDeath() {
  // A 0-0 game with target of 1 is sudden death.
  return scores.p1 === scores.p2 && scores.p1 + 1 === scores.target;
}

function isGameOver() {
  return scores.p1 >= scores.target || scores.p2 >= scores.target;
}

function isGameShutout() {
  return isGameOver() && scores.target > 1 && (scores.p1 === 0 || scores.p2 === 0);
}

function isValidTargetScore(target) {
  return target >= scores.minTarget && target <= MAX_TARGET;
}

function getMinTargetScore() {
  // let target score move during game, but never
  // low enough to actually end the game
  var highScore = Math.max(scores.p1, scores.p2);
  return highScore + 1;
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
  targetScoreInput.value = scores.target;
  targetScoreInput.min = getMinTargetScore();

  if (isGameOver()) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    resetButton.disabled = false;
    targetScoreInput.disabled = true;
  }
  else if (isGameNew()) {
    p1Button.disabled = false;
    p2Button.disabled = false;
    resetButton.disabled = true;
    targetScoreInput.disabled = false;
  }
  else {
    p1Button.disabled = false;
    p2Button.disabled = false;
    resetButton.disabled = false;
    targetScoreInput.disabled = false;
  }

  styleLastScorer();
  statusHeading.innerHTML = getStatus();
}

function getStatus() {
  var status = "";
  if (isGameSuddenDeath()) {
    status = "SUDDEN DEATH!";
  }
  else if (isGameNew()) {
    status = "Game On!";
  }
  else if (isGameTied()) {
    status = "Tie Game!";
  }
  else if (scores.lastScorer === "p1") {
    if (isGameShutout()) {
      status = "Player 1 Wins a Shutout!"
    }
    else if (isGameOver()) {
      status = "Player 1 Wins!";
    }
    else {
      status = "Player 1 Scores!";
    }
  }
  else if (scores.lastScorer === "p2") {
    if (isGameShutout()) {
      status = "Player 2 Wins a Shutout!";
    }
    else if (isGameOver()) {
      status = "Player 2 Wins!";
    }
    else {
      status = "Player 2 Scores!";
    }
  }
  return status;
}

// MAIN

updateUi();
