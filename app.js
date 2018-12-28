var userScore = 0;
var computerScore = 0;
const userScore_span= document.getElementById('user-score');
const computerScore_span= document.getElementById('computer-score');
const scoreBoard_div= document.querySelector('.score-board');
const result_div= document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const playerSmallString = "user".fontsize(3).sub();
const computerSmallString = "comp".fontsize(3).sub();
function getComputerChoice() {
  const choices = ["r", "p", "s"]
  const randomNumber = Math.floor(Math.random()*3);
  var show = choices[randomNumber]
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else {return "Scissor"}
}
function win(playerChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML= userScore;
  result_div.innerHTML = `${convertToWord(playerChoice)} ${playerSmallString} wins ${convertToWord(computerChoice)}${computerSmallString} . You Won! :) `;
  document.getElementById(playerChoice).classList.add('winning-indicator');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('winning-indicator'), 500)
}

function lose(playerChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML= computerScore;
  result_div.innerHTML = `${convertToWord(playerChoice)}${playerSmallString} loses to ${convertToWord(computerChoice)}${computerSmallString} . You Lost! :( `;
  document.getElementById(playerChoice).classList.add('losing-indicator');
  setTimeout(() => document.getElementById(playerChoice).classList.remove('losing-indicator'), 500)
}
function draw(playerChoice, computerChoice) {
  result_div.innerHTML = `${convertToWord(playerChoice)}${playerSmallString} is equal to ${convertToWord(computerChoice)}${computerSmallString} . It's a draw`;
}

function game(player) {
  const computer = getComputerChoice();
switch (player + computer) {
  case "rs":
  case "pr":
  case "sp":
    win(player, computer)
    break;
  case "sr":
  case "rp":
  case "ps":
    lose(player, computer);
    break;
  case "rr":
  case "pp":
  case "ss":
    draw(player, computer);
    break;

}}
rock_div.addEventListener('click', function() {
  //once user clicks, call function game
  game("r")
})

paper_div.addEventListener('click', function() {
  game("p");
})

scissor_div.addEventListener('click', function() {
  game("s");
})
