    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices.at(Math.floor(Math.random() * choices.length));
        return computerChoice;
      }
      
      function getPlayerChoice() {
        let playerInput = prompt("type your choice...");
        let result = playerInput.toLowerCase();
        return result;
      }
      
      // play one round and save the score
      function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          return "it's a tie! Replay this round";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
          return `You lose! Paper beats rock`;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
          return `You win! Rock beats scissors`;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
          return `You lose! Scissors beats paper`;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          return `You win! Paper beats rock`;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
          return `You lose! Rock beats scissors`;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
          return `You win! Scissors beats paper`;
        } else {                                    
            return "Invalid choice. Please enter rock, paper, or scissors"
        }
      }
      
      function game() {
        let computerScore = 0,
          playerScore = 0;
      
        for (i = 0; i < 5; i++) {
          const result = playRound(getPlayerChoice(), getComputerChoice());
          console.log(result);
          if (result.includes("win")) {
            playerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
          } else if (result.includes("lose")) {
            computerScore++;
            console.log(`computer: ${computerScore} | player: ${playerScore}`);
          }
          
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