const win_pics = [];
const lose_pics = [];

// Adding images to in_pics with names from 1 to 20
for (let i = 1; i <= 20; i++) {
    win_pics.push(`assets/end/win${i}.jpeg`);
}

// Adding images to lose_pics with names from 1 to 20
for (let i = 1; i <= 15; i++) {
    lose_pics.push(`assets/end/lose${i}.jpeg`);
}

function showGameOverPopup(score, potatoCount) {
    const gameOverPopup = document.getElementById('gameOverPopup');
    const finalScoreElement = document.getElementById('finalScore');
    const potatoCountElement = document.getElementById('potatoCount');
    const continueButton = document.getElementById('continueButton');
    const gameOverImage = document.getElementById('gameOverImage');
    const highScoreElement = document.getElementById('highScore');

    // Update score and potato count
    finalScoreElement.textContent = score;
    potatoCountElement.textContent = potatoCount;
    highScoreElement.textContent = highScore;

    // Set the correct image based on the score
    let selectedImage;
    if (score > 40) {
        selectedImage = win_pics[Math.floor(Math.random() * win_pics.length)];
    } else {
        selectedImage = lose_pics[Math.floor(Math.random() * lose_pics.length)];
    }

    // Add an event listener to show the popup after the image is loaded
    gameOverImage.onload = function() {
        // Update the continue button based on the number of potatoes
        if (potatoCount > 0) {
            continueButton.disabled = false;
            continueButton.classList.remove('disabled'); // Green color
        } else {
            continueButton.disabled = true;
            continueButton.classList.add('disabled');
            
        }

        // Show the popup after the image is loaded
        gameOverPopup.classList.remove('hidden');
    };

    // Set the image source, triggering the onload event when the image is fully loaded
    gameOverImage.src = selectedImage;
}

function hideGameOverPopup(callback) {
    const gameOverPopup = document.getElementById('gameOverPopup');
    gameOverPopup.classList.add('hidden');

    if (callback && typeof callback === 'function') {
        // Use setTimeout to ensure that the game starts after the popup is fully hidden
        setTimeout(callback, 300); // Adjust timeout as needed
    }
}

