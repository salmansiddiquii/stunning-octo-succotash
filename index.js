let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const computer = document.querySelector("#comp-score");
const user = document.querySelector("#user-score");

const genCompChoice = () => {
  let allChoices = ["rock", "paper", "scissor"];
  let randomChoice = allChoices[Math.floor(Math.random() * allChoices.length)];
  return randomChoice;
};

const drawGame = () => {
  console.log("Game was Draw!");
  msg.innerHTML = "Game was Draw Play Again !";
  msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Win!");
    msg.style.backgroundColor = "green";
    msg.innerHTML = `You Won! ${userChoice} beats ${compChoice}`;
    userScore++;
    user.innerHTML = userScore;
  } else {
    console.log("Computer Wins!");
    msg.style.backgroundColor = "red";
    msg.innerHTML = `You Lose! ${compChoice} beats ${userChoice}`;
    compScore++;
    computer.innerHTML = compScore;
  }
};

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  //Generate Computer Choice
  const compChoice = genCompChoice();
  console.log("User Choice = ", compChoice);

  if (compChoice === userChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // Check Scissor, Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // Check Rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // Rock, Paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});

/*
function userWins() {
  // Trigger the firework animation
  const firework = document.getElementById("firework");
  const victoryMessage = document.getElementById("victory-message");

  firework.style.left = `${Math.random() * 80 + 10}%`;
  firework.style.top = `${Math.random() * 50 + 25}%`;
  firework.style.opacity = "1";

  // Show victory message
  victoryMessage.style.opacity = "1";

  // Hide the firework and message after animation ends
  setTimeout(() => {
    firework.style.opacity = "0";
    victoryMessage.style.opacity = "0";
  }, 1500); // Matches the duration of the firework animation
}

// Call userWins() whenever the user wins the game

function checkWinner(userChoice, computerChoice) {
  // Determine the winner based on userChoice and computerChoice
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userWins();
  }
  // Other game logic...
}
*/
