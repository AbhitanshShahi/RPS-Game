//Adding comments for future reference
//In this we are first making few functions that make the rock paper scissor functional by adding JS to it


let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};                      //This object stores score in local storage so we do not lose data when we refresh
                       //It uses JSON.parse to get the data from json package. the question arised while coding was that how is it even happening that localStorage is given items to the score object in form of json package, if it is empty we give the keys the value of 0.
function updateScore() {
  document.querySelector(
    ".game-score"
  ).innerHTML = `Wins: ${score.win}, Loses: ${score.lose},Tie: ${score.tie}`;
}      //This function works to update the score in the code. It is using DOM in order to make changes to web page attribute to display the scores.
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
}                        //This function is picking the move, It uses math.random() to make the decision of what move to throw. We divide math.random()'s result to 3 parts in order to get the 3 moves generated randomly. this was it will remain random to get the move.

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
  }             // This result of win function basically tells us who wins and increases the score accordingly, it increments wins loses and ties.
  localStorage.setItem("score", JSON.stringify(score)); //here we update the local storage and stringfy the json file in order to use it ahead. 
  updateScore();
  document.querySelector(".game-result").innerHTML = result; //This DOM is showing the result of the game like if you win or lose or it is a tie it will be shown in the webpage.
  document.querySelector(
    ".game-picks"
  ).innerHTML = ` You <img src="${yourMove}-emoji.png" alt="rock">
      <img src="${compMove}-emoji.png" alt="">Computer`;  //this DOM is showing the moves according to your pic and the computer's pic

  // function updateScore() {
  //   document.querySelector(
  //     ".game-score"
  //   ).innerHTML = `Wins: ${score.win}, Loses: ${score.lose},Tie: ${score.tie}`;
  // }
}
