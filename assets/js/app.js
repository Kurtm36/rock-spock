const game = () => {
  let pScore = 0;
  let cScore = 0;
  let roundsPlayed = 0;


  console.log(roundsPlayed);
  console.log(pScore);
  console.log(cScore);

  
    // Start the game (transition)
    function startGame() {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function(){
        this.style.animation = '';
      });
    });

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
        
        
        // Every fifth round is bonus 
        if (roundsPlayed > 0 && roundsPlayed % 5 === 0) {
        doublePointsBonusRound();
        }
        
        // Checking for a draw
        if (playerChoice === computerChoice) {
          winner.textContent = "It's a Draw!";
          roundsPlayed++
          return;
        }
        
        roundsPlayed++

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
        }
  
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
      //Computer choice function
      options.forEach(option => {
        option.addEventListener('click', function() {
          const computerNumber = Math.floor(Math.random() * 5);
          const computerChoice = computerOptions[computerNumber];
          // Animation time out 
          setTimeout(() => {
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/images/player/${this.textContent}.png`;
            playerHand.alt = `Player got ${this.textContent}`
            computerHand.src = `./assets/images/computer/${computerChoice}.png`;
            computerHand.alt = `Computer got ${computerChoice}`
          }, 2000);

          //Animation
          playerHand.style.animation = 'shakePlayer 2s ease';
          computerHand.style.animation = 'shakeComputer 2s ease';
        });
      });
    };
    
    // Double points every 5rounds
    function doublePointsBonusRound() {
    
      //Player earns extra points
      const bonusPoints = 5;
  
      // Update the score with bonus points
      pScore += bonusPoints;
      updateScore();
      
      // Display the bonus round message
      const winner = document.querySelector('.winner');
      winner.textContent = "Bonus Round! Player earns 5 points!";
      
    }
  
    // Update score function
    function updateScore() {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const scoreTracker = document.querySelector(".rounds-played p")
    
    scoreTracker.textContent = roundsPlayed;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    }
    
    // Call the inner functions
    
    startGame();
    playMatch();
  };


  // Call the game function to start the game
  game();

  //Tutorial Pop up
const openTutorialButton = document.querySelectorAll('[data-modal-target]')
const closeTutorialButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openTutorialButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeTutorialButton.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
