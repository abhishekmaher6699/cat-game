let score = 0;
let potatoScore = 0;
let highScore = localStorage.getItem('highScore') || 0;

const obstacles = [];
let obstacleInterval = 3000;
let obstacleSpeed = 4;
min_int = 1000;
max_int = 3000; 
let distance = max_int * obstacleSpeed;
let lastObstacleTime = 0;
let nextObstacleTime = getRandomObstacleInterval(1000, 3000); // Random interval between 1 and 3 seconds

let lastTreeTime = 0;
let initialtree= 0;
const treeInterval = 5000;
let lastTreehouseTime = 0;
const treehouseInterval = 60000;

function startGame() {
    isGameOver = false;
    score = 0; // Reset score
    requestAnimationFrame(update);
}

function resetGame() {
    hideGameOverPopup(() => {
        // Reset score and related variables
        score = 0;
        scoreIncrements = 0;

        // Reset obstacle properties
        obstacles.length = 0; 
        obstacleSpeed = 4;
        lastObstacleTime = 0;
        nextObstacleTime = getRandomObstacleInterval(min_int, max_int);

        // Reset tree and treehouse properties
        trees.length = 0;
        treehouses.length = 0; 
        clouds.length = 0;
        flowers.length = 0;
        icecreams.length = 0;

        lastTreeTime = 0;
        initialtree = 0;

        characterY = groundY - frameHeight + 10;
        isJumping = false;
        jumpSpeed = 0;

        // Reset game state
        isGameOver = false;

        // Restart the game
        startGame();
    });

}

function update(timestamp) {

    if (isGameOver) {
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore); // Update high score in localStorage
        }
        setTimeout(() => {
            showGameOverPopup(score, potatoScore);
        }, 200);
        return
    }

    if (Math.random() < 0.001) createCloud();
    if (Math.random() < 0.05) createFlower();
    if (Math.random() < 0.01) createIceCream();
    if (Math.random() < 0.0001) createPoatato();

    if (timestamp - lastObstacleTime > nextObstacleTime) {
        createObstacle();
        lastObstacleTime = timestamp;
        nextObstacleTime = getRandomObstacleInterval(min_int, max_int);
    }

    if (initialtree === 0) {
        createTree();
        initialtree = timestamp;
    }
    
    if (timestamp - lastTreeTime > treeInterval) {
        createTree();
        lastTreeTime = timestamp;
    }

    if (initialtree ===20000) {
        createTreehouse();
    }

    if (timestamp - lastTreehouseTime > treehouseInterval) {
        createTreehouse();
        lastTreehouseTime = timestamp;
    }

    updateCharacter(timestamp);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    drawTreehouse();
    drawClouds();
    drawGround();
    drawTrees();
    drawCharacter();
    drawFlowers();
    drawObstacles();
    drawIceCream();
    drawPotatoes();
    checkCollisions();
    requestAnimationFrame(update);
}

isFirstStart = true;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        jumpSpeed = jumpHeight;
    }

    // Check for "Enter" key to restart the game
    if (event.code === 'Enter') {
        if (isFirstStart) {
            document.getElementById('startPage').style.display = 'none';
            startGame();
            isFirstStart = false; // Set flag to false after starting the game
        } else if (isGameOver) {
            resetGame();
        }
    }
});

document.getElementById('restartButton').addEventListener('click', resetGame);

document.getElementById('continueButton').addEventListener('click', () => {
    hideGameOverPopup(); // Hide the popup
    potatoScore -= 1;
    obstacles.length = 0;
    isGameOver = false; // Continue the game
    requestAnimationFrame(update);
});


// Promise to ensure images are loaded
const imageLoadPromises = [
    new Promise((resolve) => {
        character.onload = resolve;
    }),
    new Promise((resolve) => {
        cloudImage.onload = resolve;
        cloudImage.src = 'assets/clouds.png';
    }),
    new Promise((resolve) => {
        treehouseImage.onload = resolve;
        treehouseImage.src = 'assets/treehouse.png';
    }), 
    new Promise((resolve) => {
        treeImage.onload = resolve;
        treeImage.src = 'assets/tree.png';
    }),
    new Promise((resolve) => {
        iceCreamImage.onload = resolve;
        iceCreamImage.src = 'assets/icecream1.png';
    }),
    new Promise((resolve) => {
        potatoImage.onload = resolve;
        potatoImage.src = 'assets/potato.png';
    }),
    ...flowerImages.map((img) => {
        return new Promise((resolve) => {
            img.onload = resolve;
        });
    })
];

let firstTime = true;
Promise.all(imageLoadPromises).then(() => {
    // Images are loaded, start the game
    document.getElementById('playButton').addEventListener('click', () => {
        document.getElementById('startPage').style.display = 'none';
        startGame(); // Function to start your game
        isFirstStart = false;

    });

});