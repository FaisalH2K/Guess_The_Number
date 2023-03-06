const messageElm = document.querySelector(".message");
const scoreElm = document.querySelector(".score");
const highscoreElm = document.querySelector(".highscore");
const numberElm = document.querySelector(".number");
const guessElm = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const playAgainBtn = document.querySelector(".again");

let hiddenNumber;
let score;
let highscore;

function intialValue() {
  hiddenNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;
}
intialValue();

checkBtn.addEventListener("click", () => {
  const guess = Number(guessElm.value);

  if (!guess) {
    messageElm.textContent = "Not a number";
  } else if (guess === hiddenNumber) {
    messageElm.textContent = "Correct number!";
    numberElm.textContent = guess;
    if (score > highscore) {
      highscore = score;
      highscoreElm.textContent = highscore;
    }
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      messageElm.textContent = guess > hiddenNumber ? "Too High!" : "Too Low";
      score--;
      scoreElm.textContent = score;
    } else {
      messageElm.textContent = "You have lost the game.";
    }
  }
});

playAgainBtn.addEventListener("click", () => {
  intialValue();
  numberElm.textContent = "???";
  guessElm.value = "";
  messageElm.textContent = "Start guessing...";
});
