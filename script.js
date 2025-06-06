
const questions = [
  { q: "Are you Mit' from VN??", a: true },
  { q: "Is Steven your Mom's name?", a: false },
  { q: "Is Lizzie your Dad's name?", a: false },
  { q: "Is 2 + 2 equal to 4?", a: true },
  { q: "Is the sky green?", a: false },
  { q: "Lizzie is your Mom's name, Right?", a: true },
  { q: "Does a dog say 'gauz gauz'?", a: true },
  { q: "Do cats fly in the sky?", a: false },
  { q: "Is 1 + 1 equal to 2?", a: true },
  { q: "Do fish live on trees?", a: false },
  { q: "Is the sun hot?", a: true }
];

let current = 0;
let score = 0;
const pointPerQuestion = 2;

function loadQuestion() {
  if (current < questions.length) {
    document.getElementById("question").textContent = questions[current].q;
  } else {
    const finalScore = score * pointPerQuestion;
    document.getElementById("game").innerHTML = `
      <h2>🎉 Great job, LiamMinh! 🎉</h2>
      <p>You finished all the puzzles.</p>
      <p>Your final score is: <strong>${finalScore}</strong> out of <strong>${questions.length * pointPerQuestion}</strong></p>
      <button onclick="restartGame()">🔁 Try Again</button>
    `;
  }
}

function checkAnswer(answer) {
  if (answer === questions[current].a) {
    showPopup("🎉 Correct! Great job!");
    score++;
  } else {
    showPopup("❌ Oops! Try the next one.");
  }
  current++;
  setTimeout(() => {
    closePopup();
    loadQuestion();
  }, 1500);
}

function restartGame() {
  window.location.reload();
}

function showPopup(message) {
  document.getElementById("popup-text").textContent = message;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onload = loadQuestion;
