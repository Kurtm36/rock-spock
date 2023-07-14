const game = () => {
  let pScore = 0;
  let cScore = 0;
  console.log(pScore);
  console.log(cScore);
    // Start the game
    function startGame() {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', function () {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
   }
  
    // Play Match function
    const playMatch = function() {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player-hand');
      const computerHand = document.querySelector('.computer-hand');
  
      // Computer Options
      const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    //Array numbers:              0       1          2           3       4

        //Compare function
        const compareHands = (playerChoice, computerChoice) => {
        // Update text for Match result
        const winner = document.querySelector('.winner');
  
        // Checking for a draw
        if (playerChoice === computerChoice) {
          winner.textContent = "It's a Draw!";
          return;
        }
  
        // Checking for Rock
        if (playerChoice === 'rock') {
          if (computerChoice === 'scissors') {
            winner.textContent = 'Player Wins: Rock smashes Scissors!';
            pScore++;
            updateScore();
            return;
          } else if (computerChoice === 'lizard') {
            winner.textContent = 'Player Wins: Rock crushes Lizard!';
            pScore++;
            updateScore();
            return;
          } else if (computerChoice === 'paper') {
            winner.textContent = 'Computer Wins: Paper covers Rock!';
            cScore++;
            updateScore();
            return;
          } else if (computerChoice === 'spock') {
            winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
            cScore++;
            updateScore();
            return;
          }
        }//
  
        // Checking for Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
              winner.textContent = 'Player Wins: Paper covers Rock!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Player Wins: Paper disproves Spock!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'scissors') {
              winner.textContent = 'Computer Wins: Scissors cuts Paper!';
              cScore++;
              updateScore();
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
              cScore++;
              updateScore();
              return;
            }
          }
  
        // Checking for Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
              winner.textContent = 'Player Wins: Scissors cuts Paper';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Player Wins: Scissors cuts Lizard!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'rock') {
              winner.textContent = 'Computer Wins: Rock breaks Scissors!';
              cScore++;
              updateScore();
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Computer Wins: Spock vaporizes Scissors!';
              cScore++;
              updateScore();
              return;
            }
          }
  
        // Checking for Lizard
        if (playerChoice === 'lizard') {
            if (computerChoice === 'spock') {
              winner.textContent = 'Player Wins: Lizard poisions Spock!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Player Wins: Lizard eats paper';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'Scissors') {
              winner.textContent = 'Computer Wins: Scissors cuts Lizard!';
              cScore++;
              updateScore();
              return;
            } else if (computerChoice === 'Rock') {
              winner.textContent = 'Computer Wins: Rock crushes Lizard!';
              cScore++;
              updateScore();
              return;
            }
          }
  
        // Checking for Spock
        if (playerChoice === 'spock') {
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins: Spock smashes Scissors!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'rock') {
              winner.textContent = 'Player Wins: Spock vapourizes Rock!';
              pScore++;
              updateScore();
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Computer Wins: Paper disproves Spock!';
              cScore++;
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Computer Wins: Lizard poisions Spock!'
              cScore++;
              updateScore();
              return;
            }
          }
      };
  
      options.forEach(option => {
        option.addEventListener('click', function() {
          const computerNumber = Math.floor(Math.random() * 5);
          const computerChoice = computerOptions[computerNumber];
          // Compare Hands function
          compareHands(option.textContent, computerChoice);
          // Update Images
          playerHand.src = `../assets/images/player/${this.textContent}.png`;
          computerHand.src = `../assets/images/computer/${computerChoice}.png`;

          playerHand.style.animation= "shakePlayer 2s ease";
        });
      });
    };

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    // Call the inner functions
    startGame();
    playMatch();
  };

  // Call the game function to start the game
  game();
  