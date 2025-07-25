// getting HTML elements
const player1 = document.getElementById("hitbox");
let score = document.getElementById("score");
score.innerText = "0";

// Setting up initial score
let actScore = 0;
let slowScore = 0;
let idt = 0;

// Funtions

player1.addEventListener("mouseover", mouseIsOver);

function mouseIsOver() {
  hitbox.style.backgroundColor = "yellow";
  idt = setInterval(() => {
    actScore = actScore + 1;
    slowScore = actScore;
    // console.log(slowScore);
    score.innerText = slowScore;
  }, 200);
}

hitbox.addEventListener("mouseleave", () => {
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
  hitbox.style.backgroundColor = "green";
  score.innerText = "You won " + slowScore + " is a Prime";
  actScore = 0;
  clearInterval(idt);
}
function playerLose() {
  hitbox.style.backgroundColor = "red";
  score.innerText = "You lose , " + slowScore + " is not a prime";
  actScore = 0;
  clearInterval(idt);
}
