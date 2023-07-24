
# Rock , Paper, Scissors , Lizard , Spock 

Welcome to my Rock, Paper, Scissors, Lizard, Spock game! This project aims to demonstrate how pure JavaScript works in a real-world context and provides an interactive experience for beginners to understand JavaScript logic.

![Am I Responsive](/assets/images/responiveness.png "Am I Responsive")

<br>

## Features 
The game features an extra 2 options to select from instead of the typical Rock , Paper , Scissors . Aswell as 2 more options to select from the game also featues a Scoring system and a Bonus round which activates every 5 rounds.

- Opening menu
     -   The opening menu features a Img that explains the the possible outcome from each selected option.
     -   The title of project: Rock , Paper , Scissor , Lizard , Spock
     -   A Lets Play button which begins the game .
     -   A Tutorial Button which explains the rules and how each option works.
     -   A Reset button , which resets all the values to 0.


![Opening Menu](/assets/images/opening-menu.png "Opening Menu")

![Tutorial](/assets/images/tutorial.png "Tutorial Menu")

![In game](/assets/images/in-game.png "In game")
<hr>


## First time User Experences

- As a first-time user, when you enter the game, you are greeted with a colorful and accesible interface.

- As a first time user , you learn the outcomes of the additional options for future play with friends.

- Provide a tutorial pop up incase some things aren't familiar for users of the program.  


## Design

In style of the design of the program I wanted to keep its simple and fun. I went for a cartoony black white and green design with a fun font. 

-  Header
   -  Displayed at the top of the game is the title of the program
    ![Header](/assets/images/header.png "Rock")

- Options
  - Displayed in the center of the screen is the options to pick for each round. 
  - A reset button if the user wants to reset the game .
  - A mute button if the user wants to turn off the audio.
  - A tutorial button incase the player needs help with the rules.
    
    ![unmute btn](/assets/images/unmute-btn.png "unmute button")

    ![Lets play btn](/assets/images/lets-btn.png "lets play btn")
    
    ![unmute btn](/assets/images/options-btn.png "unmute button")


## When the Player is in game they can select from 5 options 

- Rock
 ![Rock](/assets/images/player/rock.png "Rock")

- Paper
 ![Paper](/assets/images/player/paper.png "Paper")

- Scissors
 ![Scissors](/assets/images/player/scissors.png "Scissors")

- Lizard 
![Lizard](/assets/images/player/lizard.png "Lizard")

Spock :
 ![Spock](/assets/images/player/spock.png "Spock")

 - The player will select one of the 5 buttons and the game is on ! 

<br>

## How to Play

In this game, you can choose either Rock, Paper, Scissors, Lizard, or Spock. The computer also make a random selection. The rules for winning are as follows:

- Rock crushes Scissors
- Rock crushes Lizard
- Scissors cuts Paper
- Scissors decapitates Lizard
- Paper covers Rock
- Paper disproves Spock
- Spock smashes Scissors
- Spock vaporizes Rock
- Lizard eats Paper
- Lizard poisons Spock
  
  
The winner is determined based on the rules above. If both you and your opponent make the same choice, it's a tie, and the game will be played again.

### Game results 

- When the user clicks a option a 2s delay begins then the computer will select a random option based on a number between 0-5 then determines who the winner is .
- The winner is announced , between the player and the computer , a point is awarded to ether the player or computer and the round is incremented at the end of each round.

## Footer

- The footer just contains infomation on the programmer .

## Testing 

- I tested the game on Opera , Edge , Chrome and Firefox and can confirm its works on different browsers .

- I confirmed that the game results are correct .

- I confirmed that the game is acessible and responsive.
  
- Light House :
- ![Lighthouse](/assets/images/lighthouse.png "Lighthouse")

## Bugs

### Solved Bugs

- I encountered a bug where the rounds played were incrementing more than I needed it to . This was due to the another varible incrementing It I did not see .

- Issue with favicon not showing : Fixed this by removing the favicon from the assets folder.

### Unsolved Bugs 
- None as of yet.

### Validator testing 
---
### HTML

- HTML
  - No errors passing through w3c validator.
   ![HTML checker](/assets/images/html-checker.png "Nu HTML checker")

- CSS
  - No erros passing through w3c css validator 
   ![CSS checker](/assets/images/css-checker.png "Css Checker")

- JS
   - All the warnings I recived were relating to jshints es-version not being   version 6
   - Metrics :
     - There are 28 functions in this file.
     -  Function with the largest signature take 2 arguments, while the median is 0.
     - Largest function has 18 statements in it, while the median is 2.
     -  The most complex function has a cyclomatic complexity value of 19     while the median is 1.
   ![Jshint](/assets/images/jshint.png "Jshint")
        
    
<br>

## Deployment 

- The site was deployed to GitHub pages . The steps to deploy are as follows.
  - In the Github Repo , navigate to the setting tab.
  - From the source section drop-down menu select : Master branch
  - Once the mast branch has been selected, the page provided the link to the completed website.

The live link can be found here [Rock, Paper, Scissors, Lizard, Spock](https://kurtm36.github.io/rock-spock/)

--- 

### Mistakes

I made mistakes  while committing changes. I used past simple tense in commits , and forgot about commits I did not push. In future with my commits I will be more specific with my language and commits in future .

---

### Credits 

Through out the development of this programe I have referenced multiple learning resources and videos I would to give credit to :

[Javascript Rock Paper Scissors Game Tutorial by : developedbyed](https://www.youtube.com/watch?v=qWPtKtYEsN4&t=1216s). I learned how to animate the options i.e rock , paper with this tutorial .

[3 ways to code Rock Paper Scissors in JavaScript by : Code with Ania Kubów ](https://www.youtube.com/watch?v=RwFeg0cEZvQ). In this tutorial I learned about developing the game logic .

[JavaScript ES6 Arrow Functions Tutorial by : Web Dev Simplefied](https://www.youtube.com/watch?v=h33Srr5J9nY) In this tutorial learned of the multiple use cases of Arrow functions .

I found the majority of my images through google images and ClipArtMax.
[ClipArtMax](https://www.clipartmax.com/)












