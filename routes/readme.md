d'Amore Date Planner

Click here to see deployed app

## Description
    d'Amore is a date planner app, on which users can get inspiration for their next dates.
    By signing up and logging in, users can share their preferences regarding the date ideas in four categories: Location (outdoor or indoor), Adventure level (not at all, somewhat, very), Budget (low, medium, high) and Duration (couple of hours, half a day or weekend).
    Based on their preferences, users will get date ideas which are stored in the data base.
    Further, they can explore other similar date ideas.
    Users can get new ideas by changing their preferences.


## MVP
    - Users start on the welcome page and have different options to
    
    - The game starts with the welcome screen including instructions and a "Lets's eat!" (start game) button
    - Player has the option to play background music by clicking on the audio icon on the top left side
    - Player can move Nyancat in all directions with the arrow keys
    - Food options will fall down from top of the gamescreen to the bottom
    - Player can collect/consume the food items by colliding with them:
        - If healthier food options are being collected, the score will increase
        - If unhealthier food options are being collected, the lives will decrease
    - Everytime the player collides with a food item, the size of Nyancat will increase, meaning the game difficulty will increase
    - Further, everytime the player collides with a food item, a "Nom!" sound will be activated
    - If the lives reach 0, the game over screen will appear and the game ends
    - On the game over screen the player has the opportunity to play again by clicking the button "Try again"


## Backlog Functionalities
    - Future possible features:
        - Saving favourite date ideas
        - Extending date idea data base
        - Adding more detailed descriptions about the date ideas


## Used Technologies
    - HTML
    - CSS
    - JavaScript
    - DOM Manipulation
    - JS Classes
    - JS Audio() and JS Image()
    - CSS Bootstrap
    - MongoDB and MongoDB Atlas Cloud
    - JS Express


## Data structure
    - script.js
        - icon.onclick();
        - window.onload();
        - startButton();
        - restartButton();
        - startGame();
        - location.reload();
        - handleKeydown();
        - possibleKeystrokes.includes()
        - event.preventDefault();
        - window.addEventListener();
    - game.js
        - Game()
            - this.startScreen;
            - this.gameScreen;
            - this.gameEndScreen;
            - this.player;
            - this.gameScreen;
            - this.height;
            - this.width;
            - this.unhealthyFoods;
            - this.healthyFoods;
            - this.score;
            - this.lives;
            - this.scoreElement;
            - this.livesElement;
            - this.gameIsOver;
        - start();
        - gameLoop();
        - update();
        - endGame();
    - nyancat.js
        - Player()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.directionX;
            - this.directionY;
            - this.speedX;
            - this.speedY;
            - this.element = document.createElement("img");
        - move();
        - increaseSize();
        - didCollideUnhealthy();
        - didCollideHealthy();
        - updatePosition();
    - food.js
        - Unhealthy()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.speed;
            - this.element = document.createElement("img");
        - move();
        - updatePosition();
        - Healthy()
            - this.gameScreen;
            - this.left;
            - this.top;
            - this.width;
            - this.height;
            - this.speed;
            - this.element = document.createElement("img");
        - move();
        - updatePosition();


## States
    - Start Screen with Instruction
    - Game Screen
    - Game Over Screen


## Ideal Task Order
    - Wireframing and logic of game
    - Basic HTML & CSS skeleton
    - Researching resources (images, videos and audio)
    - Basic JavaScript set up (moving from screen to screen, game logic, food items falling down, Nyancat moving)
    - Adding features (audio, increase of difficulty level, speed of food and Nyancat)
    - Finalising design elements in Photoshop


## Links
    - Miro Board: https://miro.com/welcomeonboard/bGlHUzNGOEtDQzdrclNRNHU0N0J2cGw4R1JaTEtGeHZuSnBTekZ4R0I1Uk5JSWhOSXBmUWlFYXp2Y2Z6MU1CYnwzNDU4NzY0NTYzNDYxNDQ3MDY0fDI=?share_link_id=828491617158
    - Slides: Link
    - Github Repository: Link
    - Deployment: Link


## Resources used:
    - 