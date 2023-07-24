let roundsPlayed = '0';
let pScore = 0;
let cScore = 0;
let bonusRound = false;
let soundMuted = true;

const muteBtn = document.getElementById("mute");

muteBtn.addEventListener("click", () => {
  soundMuted = !soundMuted;
  muteBtn.innerText = soundMuted ? "Unmute" : "Mute";
});

console.log(roundsPlayed);

const game = () => {

  // Start the game (transition)
  function startGame() {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      setTimeout(() => {
        introScreen.style.display = "none";
        match.style.display = "block";
        document.getElementsByClassName("score")[0].style.display = "flex";
      }, 700);
      setTimeout(() => {
        match.classList.add("fadeIn");
        document.getElementsByClassName("score")[0].classList.add("fadeIn");

      }, 1000);
      playMusic();
    });
  }

  // Play Match function
  const playMatch = function () {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    // Computer Options
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    //Array numbers:              0       1          2           3       4
    //Compare function
    const compareHands = (playerChoice, computerChoice) => {
      // Update text for Match result
      const winner = document.querySelector(".winner");
        roundsPlayed++;
      if (roundsPlayed % 5 === 0) {
        bonusRound = true;
        updateScore();
      }
    //Checking player hand agaist computer
      if (playerChoice === computerChoice) {
        winner.textContent = "It's a Draw!";
        updateScore();
      } else if (
        (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
        (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
        (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
        (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
        (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
      ) {
        if (bonusRound){
          winner.textContent = 'Bonus Round!' + ` ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} Beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
          pScore += 3;
          bonusRound = false;
          updateScore();
        } else {
          winner.textContent = `Player Wins: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
          pScore++;
        }

      } else {
        winner.textContent = `Computer Wins: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
        cScore++;
      }   
      
      updateScore();
    };
    //Computer choice function
    options.forEach((option) => {
      option.addEventListener("click", function () {
        options.forEach((option) => {
          option.setAttribute("disabled", true);
        });
        playMusic();
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        
        // Animation time out
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/images/player/${this.textContent}.png`;
          playerHand.alt = `Player got ${this.textContent}`;
          computerHand.src = `./assets/images/computer/${computerChoice}.png`;
          computerHand.alt = `Computer got ${computerChoice}`;
          options.forEach((option) => {
            option.removeAttribute("disabled");
          });

        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  

  // Call the inner functions and outer functions 
  
  startGame();
  playMatch();
};

// Call the game function to start the game
game();

// Update score function
function updateScore() {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  const scoreTracker = document.querySelector(".rounds-played p");

  scoreTracker.textContent = roundsPlayed;
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}


//Tutorial Pop up
const openTutorialButton = document.querySelectorAll("[data-modal-target]");
const closeTutorialButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openTutorialButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeTutorialButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}


// Reset button
const resetButton = document.querySelector('.reset-btn');

const resetPage = () => {
  location.reload();
};

resetButton.addEventListener('click', resetPage);


//Audio

function playMusic() {
  let audio = new Audio ("assets/sound/audio.mp3");
  if (!soundMuted){
    audio.play();
  }
}