const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guesses++;

  if (guess == answer) {
    alert(`${answer} is the number. It tok you ${guesses}`);
  } else if (guess < answer) {
    alert("too small!");
  } else {
    alert("too big!");
  }
};
