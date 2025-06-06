
const questions = [
  { q: "Is 2 + 2 equal to 4?", a: true },
  { q: "Is the sky green?", a: false },
  { q: "Does a dog say 'woof'?", a: true },
  { q: "Is 5 greater than 10?", a: false },
  { q: "Do cats fly in the sky?", a: false },
  { q: "Is 3 + 1 equal to 4?", a: true }
];

let current = 0;

function loadQuestion() {
  if (current < questions.length) {
    document.getElementById("question").textContent = questions[current].q;
  } else {
    document.getElementById("game").innerHTML = "<h2>🎉 Great job, LiamMinh! You finished all the puzzles! 🎉</h2>";
  }
}

function checkAnswer(answer) {
  if (answer === questions[current].a) {
    alert("Correct!");
  } else {
    alert("Oops! Try the next one.");
  }
  current++;
  loadQuestion();
}

window.onload = loadQuestion;
