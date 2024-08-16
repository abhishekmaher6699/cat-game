function checkCollisions() {
    obstacles.forEach((obstacle) => {
        if (characterX + frameWidth - 15 > obstacle.x &&
            characterX + 5 < obstacle.x + obstacle.width &&
            characterY + frameHeight - 12 > obstacle.y) {
            // Handle collision (e.g., game over, reduce score, etc.)
            isGameOver = true;
            console.log('Collision detected!');
        }
    });

    icecreams.forEach((icecream, index) => {
        const characterBottom = characterY + frameHeight;
        const characterTop = characterY;
        const iceCreamBottom = icecream.y + icecream.height;
        const iceCreamTop = icecream.y;

        // Ensure both x and y ranges overlap
        const isXOverlap = characterX + frameWidth - 15 > icecream.x &&
                           characterX + 5 < icecream.x + icecream.width;

        const isYOverlap = characterBottom > iceCreamTop &&
                           characterTop < iceCreamBottom;

        if (isXOverlap && isYOverlap) {
            score += 1; 
            icecreams.splice(index, 1); 
            console.log('Ice cream collected!');
        }
    });

    potatoes.forEach((potato, index) => {
        const characterBottom = characterY + frameHeight;
        const characterTop = characterY;
        const potatoBottom = potato.y + potato.height;
        const potatoTop = potato.y;

        // Ensure both x and y ranges overlap
        const isXOverlap = characterX + frameWidth - 15 > potato.x &&
                           characterX + 5 < potato.x + potato.width;

        const isYOverlap = characterBottom > potatoTop &&
                           characterTop < potatoBottom;

        if (isXOverlap && isYOverlap) {
            // Handle potato collection
            potatoScore += 1; // Increase score or perform any special action
            potatoes.splice(index, 1); 
            console.log('Potato collected!');
        }
    });

    displayScore();
}
