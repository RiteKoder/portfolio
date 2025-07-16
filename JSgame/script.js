// getting HTML elements
const player1 = document.getElementById("player1");
let score = document.getElementById("score");

// Setting up initial score
let actScore = 0;
let slowScore = 0;
let idt = 0;

// Funtions

player1.addEventListener("mouseover", mouseIsOver);

function mouseIsOver() {
  player1.style.backgroundColor = "yellow";
  idt = setInterval(() => {
    actScore = actScore + 1;
    slowScore = actScore;
    // console.log(slowScore);
    score.innerText = slowScore;
  }, 200);
}

player1.addEventListener("mouseleave", () => {
  gameLogic(slowScore);
});

function gameLogic(slowScore) {
  let count = 0;

  // Numbers less than 2 handling
  if (slowScore < 2) {
    playerLose();
    console.log("Not PRIME");
    return;
  }

  for (let index = 2; index <= Math.floor(slowScore / 2); index++) {
    if (slowScore % index === 0) {
      count++;
    }
  }

  if (count === 0) {
    playerwon();
    console.log("PRIME");
  } else {
    playerLose();
    console.log("Not PRIME");
  }
}

function playerwon() {
  player1.style.backgroundColor = "green";
  score.innerText = "You won " + slowScore + " is a Prime";
  actScore = 0;
  clearInterval(idt);
}
function playerLose() {
  player1.style.backgroundColor = "red";
  score.innerText = "You lose , " + slowScore + " is not a prime";
  actScore = 0;
  clearInterval(idt);
}
