// getting HTML elements
const player1 = document.getElementById("player1");
let score = document.getElementById("score");

// Setting up initial score
let actScore = 0;
let slowScore = 0;

// Funtions
function playerwon() {
  player1.style.backgroundColor = "green";
  score.innerText = "You won";
  actScore = 0;
}
function playerLose() {
  score.innerText = "You lose , your score is " + slowScore;
  actScore = 0;
}

function mouseIsOver() {
  player1.style.backgroundColor = "yellow";
  actScore = actScore + 1;
  slowScore = Math.floor(actScore / 5);

  console.log(slowScore);
  score.innerText = slowScore;
}

player1.addEventListener("drag", mouseIsOver);

player1.addEventListener("mouseleave", () => {
  if (slowScore > 50) {
    playerwon();
  } else {
    playerLose();
  }
});
