// Select all memory cards
const cardElements = document.querySelectorAll('.memory-card');

// Game state variables
let firstCardFlipped = false;
let boardLocked = false;
let firstCard, secondCard;

let matchedPairs = 0;
const totalPairs = cardElements.length / 2;

let moves = 0;
let timeLeft = 60;
let timerInterval;
let gameFinished = false;

// Start the timer when the page loads
window.onload = startTimer;

// Flip card when clicked
function flipCard() {
  if (boardLocked || gameFinished || this === firstCard) return;

  this.classList.add('flip');

  if (!firstCardFlipped) {
    firstCardFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  updateMoves();
  checkForMatch();
}

// Check if the two selected cards match
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableMatchedCards() : unflipCards();
}

// Disable matched cards so they can't be clicked again
function disableMatchedCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matchedPairs++;
  checkWin();

  resetBoardState();
}

// Unflip cards if they do not match
function unflipCards() {
  boardLocked = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoardState();
  }, 1000);
}

// Reset the selection state after each turn
function resetBoardState() {
  firstCardFlipped = false;
  boardLocked = false;
  firstCard = null;
  secondCard = null;
}

// Shuffle cards at the beginning of the game
(function shuffleCards() {
  cardElements.forEach(card => {
    let randomPosition = Math.floor(Math.random() * cardElements.length);
    card.style.order = randomPosition;
  });
})();

// Add click event to each card
cardElements.forEach(card => card.addEventListener('click', flipCard));

// Start countdown timer
function startTimer() {
  timerInterval = setInterval(() => {
    if (gameFinished) return;

    document.getElementById("timer").textContent = `Time: ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      showMessage("Lose");
      gameFinished = true;
      boardLocked = true;
    }
  }, 1000);
}

// Check if all pairs are matched
function checkWin() {
  if (matchedPairs === totalPairs) {
    clearInterval(timerInterval);
    showMessage("Win");
    gameFinished = true;
  }
}

// Update move counter
function updateMoves() {
  moves++;
  document.getElementById("moves").textContent = `Moves: ${moves}`;
}

// Display win or lose message with stats
function showMessage(result) {
  document.getElementById("totalGameMoves").textContent = moves;

  let usedTime = 60 - timeLeft;
  let minutes = Math.floor(usedTime / 60);
  let seconds = usedTime % 60;
  document.getElementById("totalGameTime").textContent =
    minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  let rating = "";
  if (moves >= 10) rating = "⭐⭐⭐";
  else if (moves >= 16) rating = "⭐⭐";
  else if (moves >= 24) rating = "⭐";
  else rating = " ";

  document.getElementById("finalStarRating").textContent = rating;

  if (result === "Win") {
    document.getElementById("gameResult").textContent = "You Win!🎉";
    document.getElementById("gameResult").style.color = "green";
  } else {
    document.getElementById("gameResult").textContent = "You Lose!❌";
    document.getElementById("gameResult").style.color = "red";
  }

  showPopup();
}

// Show popup window
function showPopup() {
  document.getElementById("popupMessage").style.display = "flex";
}

// Restart game when button is clicked
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});