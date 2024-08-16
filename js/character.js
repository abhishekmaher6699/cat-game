const character = new Image();
character.src = 'assets/cat2.png'; // Sprite sheet image
const frameWidth = 61; // Width of one frame
const frameHeight = 57; // Height of one frame
const numFrames = 2; // Number of frames in the sprite sheet
let currentFrame = 1;
let frameTimer = 0;
const frameDuration = 300;
let characterX = canvas.width / 2;
let characterY = groundY - frameHeight + 10;

let isJumping = false;
let jumpSpeed = 0;
const gravity = 0.9;
const jumpHeight = 16;


function updateCharacter(timestamp){
    if (isJumping) {
        characterY -= jumpSpeed;
        jumpSpeed -= gravity;
        if (characterY >= groundY - frameHeight + 10) {
            characterY = groundY - frameHeight + 10;
            isJumping = false;
        }
        // Set animation state to jumping
        currentFrame = 1;
    } else {
        // Animate character
        const timePassed = timestamp - frameTimer;
    
        // Update frame if enough time has passed
        if (timePassed > frameDuration) {
            currentFrame = (currentFrame + 1) % numFrames;
            frameTimer = timestamp; 
        }
    }
}
