// getting HTML elements
const player1 = document.getElementById("player1");
let score = document.getElementById("score");

// Setting up initial score
let actScore = 0;
let slowScore = 0;
let idt = 0;

// Funtions
function playerwon() {
  player1.style.backgroundColor = "green";
  score.innerText = "You won " + slowScore;
  actScore = 0;
  clearInterval(idt);
}
function playerLose() {
  player1.style.backgroundColor = "red";
  score.innerText = "You lose , your score is " + slowScore;
  actScore = 0;
  clearInterval(idt);
}

function mouseIsOver() {
  player1.style.backgroundColor = "yellow";
  idt = setInterval(() => {
    actScore = actScore + 1;
    slowScore = actScore;
    console.log(slowScore);
    score.innerText = slowScore;
  }, 100);
}

player1.addEventListener("mouseover", mouseIsOver);

player1.addEventListener("mouseleave", () => {
  if (slowScore > 50) {
    playerwon();
  } else {
    playerLose();
  }
});
