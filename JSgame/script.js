const player1 = document.getElementById("player1");

let actScore = 0;
let score = document.getElementById("score");

player1.addEventListener("mousemove", () => {
  player1.style.backgroundColor = "yellow";

  actScore++;
  console.log(actScore);
  score.innerText = actScore;
});
player1.addEventListener("mouseleave", () => {
  player1.style.backgroundColor = "blue";
  if (actScore > 1) {
    score.innerText = "you won";
    // const area = document.getElementsById("playarea");
    // area.style.backgroundColor = "green";
  } else {
    score.innerText = "your score is " + actScore;
  }
  actScore = 0;
  // score.innerText = actScore;
});
