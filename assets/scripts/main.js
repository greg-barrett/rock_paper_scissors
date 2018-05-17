function computerPlay(){
  let material=["rock", "paper", "scissors"];
  let num= Math.floor(Math.random() * 3);
  return material[num];
}
function winner(player, computer) {
  if (player > computer) {
    console.log("You win!")
  } else if (player < computer) {
    console.log("The computer won!");
  } else {
    console.log("It was a draw");
  }
}


function playGame() {
  let compWins=0;
  let playerWins=0;
  for (i = 0; i < 5; i++) {
    let compTurn=computerPlay();
    let playerTurn= prompt("Rock, Paper or Scissors?");
    playerTurn= playerTurn.toLowerCase();

    if (playerTurn === compTurn) {
      console.log("It\'s a draw!");
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="rock" && compTurn ==="paper") {
      console.log("You loose to Paper");
      compWins=compWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="rock" && compTurn ==="scissors") {
      console.log("You win to Scissors!");
      playerWins= playerWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="paper" && compTurn ==="rock") {
      console.log("You win to Rock!");
      playerWins= playerWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="paper" && compTurn ==="scissors") {
      console.log("You loose to Scissors!");
      compWins=compWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="scissors" && compTurn ==="rock") {
      console.log("You lose to Rock!");
      compWins=compWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else if (playerTurn==="scissors" && compTurn ==="paper") {
      console.log("You win to Paper!");
      playerWins= playerWins +1;
      console.log("Computer: " + compWins + " Player: " + playerWins);

    } else {
      console.log("Play not recognised.");
    }
  }
winner(playerWins, compWins);
}
playGame();
