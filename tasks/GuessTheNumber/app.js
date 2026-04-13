const userInput = document.querySelector("#guessField");
const gussess = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const submit = document.querySelector("#subt");
const para = document.createElement("p");

let prevGuess = [];
let numberGuess = 1;
let playGame = true;

let randomNumber = parseInt(Math.random() * 100 + 1);

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    if (guess > 0 && guess <= 100 && !isNaN(guess)) {
      validateGuess(guess);
    } else {
      displayMessage("Please provide guess range between [1-100].");
    }
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Provide a proper number");
  } else if (guess < 1 || guess > 100) {
    displayMessage("Please provide guess range between [1-100].");
  } else {
    prevGuess.push(guess);
    if (numberGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right.");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOO High");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  gussess.innerHTML += `${guess}, `;
  numberGuess++;
  guessRemaining.innerHTML = `${11 - numberGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberGuess = 1;
    gussess.innerHTML = "";
    guessRemaining.innerHTML = `${11 - numberGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(para);
    playGame = true;
  });
}
