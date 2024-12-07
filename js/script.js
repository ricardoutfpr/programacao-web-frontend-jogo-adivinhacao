let randomNumber;
let attempts;

function startNewGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("attempts").textContent = `Tentativas: ${attempts}`;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("attempts").classList.add("hidden");
  document.getElementById("restartButton").classList.add("hidden");
  document.getElementById("guess").value = "";
  document.getElementById("guessButton").removeAttribute("disabled");
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;

  document.getElementById("attempts").textContent = `Tentativas: ${attempts}`;
  document.getElementById("attempts").classList.remove("hidden");

  if (guess === randomNumber) {
    document.getElementById("result").textContent = "Parabéns! Você acertou!";
    document.getElementById("result").style.color = "green";
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("guessButton").setAttribute("disabled", true);
    document.getElementById("restartButton").classList.remove("hidden");
  } else if (guess < randomNumber) {
    document.getElementById("result").textContent = "O número é maior!";
    document.getElementById("result").style.color = "red";
    document.getElementById("result").classList.remove("hidden");
  } else {
    document.getElementById("result").textContent = "O número é menor!";
    document.getElementById("result").style.color = "red";
    document.getElementById("result").classList.remove("hidden");
  }

  document.getElementById("guess").value = "";
  document.getElementById("guess").focus();
}

document.getElementById("guessButton").addEventListener("click", checkGuess);

document.getElementById("guess").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document
  .getElementById("restartButton")
  .addEventListener("click", startNewGame);

startNewGame();
