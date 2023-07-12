const game = () => {
    let pScore = 0;
    let cScore = 0;
    // Start the game
    const startGame = function() {
      const playBtn = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');
  
      playBtn.addEventListener('click', function() {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
      });
    };
  
    // Play Match function
    const playMatch = function() {
      const options = document.querySelectorAll('.options button');
      const playerHand = document.querySelector('.player-hand');
      const computerHand = document.querySelector('.computer-hand');
  
      // Computer Options
      const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  
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
            return;
          } else if (computerChoice === 'lizard') {
            winner.textContent = 'Player Wins: Rock crushes Lizard!';
            return;
          } else if (computerChoice === 'paper') {
            winner.textContent = 'Computer Wins: Paper covers Rock!';
            return;
          } else if (computerChoice === 'spock') {
            winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
            return;
          }
        }
  
        // Checking for Paper
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins: Rock smashes Scissors!';
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Player Wins: Rock crushes Lizard!';
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Computer Wins: Paper covers Rock!';
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
              return;
            }
          }
  
        // Checking for Scissors
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins: Rock smashes Scissors!';
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Player Wins: Rock crushes Lizard!';
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Computer Wins: Paper covers Rock!';
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
              return;
            }
          }
  
        // Checking for Lizard
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins: Rock smashes Scissors!';
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Player Wins: Rock crushes Lizard!';
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Computer Wins: Paper covers Rock!';
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
              return;
            }
          }
  
        // Checking for Spock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
              winner.textContent = 'Player Wins: Rock smashes Scissors!';
              return;
            } else if (computerChoice === 'lizard') {
              winner.textContent = 'Player Wins: Rock crushes Lizard!';
              return;
            } else if (computerChoice === 'paper') {
              winner.textContent = 'Computer Wins: Paper covers Rock!';
              return;
            } else if (computerChoice === 'spock') {
              winner.textContent = 'Computer Wins: Spock vaporizes Rock!';
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
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        });
      });
    };
  
    // Call the inner functions
    startGame();
    playMatch();
  };
  
  // Call the game function to start the game
  game();