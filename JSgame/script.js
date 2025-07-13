function playerwon() {
  player1.style.backgroundColor = "green";
  score.innerText = "you won";
  actScore = 0;
}

const player1 = document.getElementById("player1");

let actScore = 0;
let score = document.getElementById("score");

player1.addEventListener("mousemove", () => {
  player1.style.backgroundColor = "yellow";

  actScore = actScore + 1;
  actScore = Math.round(actScore);
  console.log(actScore);
  score.innerText = actScore;
});
player1.addEventListener("mouseleave", () => {
  if (actScore > 50) {
    playerwon();
  } else {
    score.innerText = "You lose , your score is " + actScore;
    actScore = 0;
  }
});
