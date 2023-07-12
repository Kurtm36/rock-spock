const game = () => {
    let pScore = 0;
    let cScore = 0;
    //Start the game
    const startGame = function() {
        const PlayBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
    
        PlayBtn.addEventListener('click', function() {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Play Match funtion
    const playMatch = function() {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('player-hand');
        const computerHand = document.querySelector('computer-hand');
        
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        /* array numbers:           0       1        2            3        4 */
        
        options.forEach(option =>{
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 5);
                const computerChoice = computerOptions[computerNumber];
                //Compare Hands function
                compareHands(option.textContent, computerChoice);
                // Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              });
            });
          };
          
          
            // Output the choices
            console.log('Player Choice:', playerChoice);
            console.log('Computer Choice:', computerChoice)
        
     }
     //Update text for Match result
     const winner = document.querySelector(".winner");
     // Checking for a draw
       if(playerChoice === computerChoice){
        winner.textContent="It's a Draw!"
        return;
     }
    // Checking for Rock
    if(playerChoice === "rock"){
        if(computerChoice === "scissors"){
            winner.textContent= "Player Wins : Rock smashes Scissors!"
            return;
        } else if(computerChoice ==="lizard"){
            winner.textContent= "Player Wins : Rock crushes Lizard!"
            return;
        } else if (computerChoice ==="paper"){
            winner.textContent ==="Computer Wins : Paper covers Rock!"
            return;
        } else if (computerChoice === "spock"){
            winner.textContent === "Computer Wins : Spock vaporizes Rock!"
            return;
        }   
    };
     
    //Checking for Paper
     if (playerChoice === "paper"){
        if(computerChoice === "rock"){
            winner.textContent = "Player Wins : Paper covers Rock!"
            return;
        } else if (computerChoice === "spock"){
            winner.textContent = "Player Wins : Paper disproves Spock!" 
            return;
        } else if (computerChoice === "scissors"){
            winner.textContent = "Computer Wins : Scissors cut Paper!"
            return;
        } else if (computerChoice === "lizard"){
            winner.textContent = "Computer Wins : Lizard eats Paper!"
            return;
        }
     };
     
    //Checking for Scissors
    if (playerChoice === "scissors"){
        if(computerChoice === "paper"){
            winner.textContent = "Player Wins : Scissors cut Paper!"
            return;
        } else if (computerChoice === "lizard"){
            winner.textContent = "Player Wins : Scissors decapitate lizard!" 
            return;
        } else if (computerChoice === "rock"){
            winner.textContent = "Computer Wins : Rock smashes Scissors "
            return;
        } else if (computerChoice === "spock"){
            winner.textContent = "Computer Wins : Spock destroys Scissors"
            return;
        }
     };

    //Checking for Lizard 
    if (playerChoice === "lizard"){
        if(computerChoice === "paper"){
            winner.textContent = "Player Wins : Lizard eats Paper!"
            return;
        } else if (computerChoice === "spock"){
            winner.textContent = "Player Wins : Lizard poisons Spock!" 
            return;
        } else if (computerChoice === "rock"){
            winner.textContent = "Computer Wins : Rock smashes Lizard "
            return;
        } else if (computerChoice === "scissors"){
            winner.textContent = "Computer Wins : Scissors decapitate lizard!"
            return;
        }
     };
     
    //Checking for Spock
    if (playerChoice === "spock"){
        if(computerChoice === "scissors"){
            winner.textContent = "Player Wins : Spock smashes Scissors!"
            return;
        } else if (computerChoice === "rock"){
            winner.textContent = "Player Wins : Spock vapourizes Rock!" 
            return;
        } else if (computerChoice === "paper"){
            winner.textContent = "Computer Wins : Paper disproves Spock"
            return;
        } else if (computerChoice === "lizard"){
            winner.textContent = "Computer Wins : Lizard poisons Spock!"
            return;
        }
     }; 
    /* Will call inner functions */
    startGame();
    playMatch();

//Game function
game();

