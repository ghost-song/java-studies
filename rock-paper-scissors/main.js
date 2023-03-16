let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {    
    let getRandomChoices = Math.floor(Math.random() * choices.length)
    return choices[getRandomChoices];
}

// get player choice
function getPlayerChoice() {
    let playerInput = prompt("Rock, paper or scissors? Type your choice...");
    let result = playerInput.toLowerCase();
    return result;
}

function playRound (computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {     //tie
        return alert("It's a tie!")
    } else if (playerSelection == 'rock' && computerSelection == "scissors") {
            playerScore++;
            return alert("You win! Rock beats scissors")
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                computerScore++;
                return alert("You lose! Paper beats rock")
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerScore++;
                return alert("You win! Paper beats rock")
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            return alert("You lose! Paper loses to scissors")
    } else if (playerSelection == 'scissors' && computerScore == 'paper') {
            playerScore++;
            return alert("You win! Scissors beats paper")
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            return alert("You lose! Scissors loses to rock")
    } else {                                    
        return alert("Invalid choice. Please enter rock, paper, or scissors")
    }
}

function game() {
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, or scissors?")
        console.log(playRound (getComputerChoice(), playerChoice)) 
        console.log(`Player score: $(playerScore) computerScore: $(computerScore)`)      
        if (playerScore == 5) {
            return alert('You win!')
        } else if (computerScore == 5) {
            return alert('You lose to the computer!')
        } 
    }
}

function game() {
  for (i = 0; i < 5; i++) {
    const result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);    
  }
  console.log(
      "Final Results: Player: " + playerScore + " Computer: " + computerScore
    );
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game.");
    } else {
      console.log("The game was an overall tie.");
    }
}

game();
