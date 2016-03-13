var p1Score = document.querySelector(".p1-score");
var p2Score = document.querySelector(".p2-score");
var winScore = document.querySelector(".score-to-win");
var p1Button = document.querySelector(".p1-btn");
var p2Button = document.querySelector(".p2-btn");
var resetButton = document.querySelector(".reset-btn");
var scoreDial = document.querySelector("input");

p1Button.addEventListener("click", incrementP1);
p2Button.addEventListener("click", incrementP2);
resetButton.addEventListener("click", resetScores);

function incrementP1() {
  alert("p1 scores!")
}

function incrementP2() {
  alert("p2 scores!");
}

function resetScores() {
  alert("reset scores");
}
