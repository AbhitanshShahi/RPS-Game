let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};
function updateScore() {
  document.querySelector(
    ".game-score"
  ).innerHTML = `Wins: ${score.win}, Loses: ${score.lose},Tie: ${score.tie}`;
}
// function WinnerShow() {
//     document.querySelector('.game-picks').innerHTML = `Your move: ${yourMove} , Computer Move: ${compMove} `;
// }
updateScore();

function CompMovePick() {
  const randomNumber = Math.random();
  let compMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    compMove = "Scissor";
  }

  return compMove;
}

function ResultOfWin(yourMove) {
  const compMove = CompMovePick();
  let result = "";
  if (yourMove === "Scissor") {
    if (compMove === "Rock") {
      result = "You Lose";
      score.lose++;
    } else if (compMove === "Paper") {
      result = "You Win";
      score.win++;
    } else if (compMove === "Scissor") {
      result = "Tie";
      score.tie++;
    }
  } else if (yourMove === "Rock") {
    if (compMove === "Rock") {
      result = "Tie";
      score.tie++;
    } else if (compMove === "Paper") {
      result = "You Lose";
      score.lose++;
    } else if (compMove === "Scissor") {
      result = "You Win";
      score.win++;
    }
  } else if (yourMove === "Paper") {
    if (compMove === "Rock") {
      result = "You Win";
      score.win++;
    } else if (compMove === "Paper") {
      result = "Tie";
      score.tie++;
    } else if (compMove === "Scissor") {
      result = "You Lose";
      score.lose++;
    }
  }
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  document.querySelector(".game-result").innerHTML = result;
  document.querySelector(
    ".game-picks"
  ).innerHTML = ` You <img src="${yourMove}-emoji.png" alt="rock">
      <img src="${compMove}-emoji.png" alt="">Computer`;

  function updateScore() {
    document.querySelector(
      ".game-score"
    ).innerHTML = `Wins: ${score.win}, Loses: ${score.lose},Tie: ${score.tie}`;
  }
}
