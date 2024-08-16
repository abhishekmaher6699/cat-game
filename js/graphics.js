function drawGround() {
    ctx.fillStyle = '#10c000';
    ctx.fillRect(groundX, groundY, canvas.width, groundHeight);
    ctx.fillRect(groundX + canvas.width, groundY, canvas.width, groundHeight);
}

function drawCharacter() {
    ctx.drawImage(
        character,
        currentFrame * frameWidth, // Source X
        0, // Source Y
        frameWidth, // Source width
        frameHeight, // Source height
        characterX, // Destination X
        characterY, // Destination Y
        frameWidth, // Destination width
        frameHeight // Destination height
    );
}

function drawClouds() {
    ctx.globalAlpha = 0.7;
    clouds.forEach((cloud, index) => {
        ctx.drawImage(cloudImage, cloud.x, cloud.y, cloud.width, cloud.height);
        cloud.x -= cloud.speed;
        if (cloud.x + cloud.width < 0) clouds.splice(index, 1);
    });
    ctx.globalAlpha = 1;
}

function drawFlowers() {
    flowers.forEach((flower, index) => {
        ctx.drawImage(flower.image, flower.x, flower.y, flower.width, flower.height);
        flower.x -= flower.speed;
        if (flower.x + flower.width < 0) flowers.splice(index, 1);
    });
}

function drawTrees() {
    trees.forEach((tree, index) => {
        ctx.drawImage(treeImage, tree.x, tree.y, tree.width, tree.height);
        tree.x -= tree.speed;
        if (tree.x + tree.width < 0) trees.splice(index, 1);
    });
}

function drawTreehouse() {
    ctx.globalAlpha = 0.5; // Set transparency for a foggy effect
    ctx.globalCompositeOperation = 'lighter'; // Use a blend mode that creates a foggy appearance

    treehouses.forEach((treehouse, index) => {
        ctx.drawImage(treehouseImage, treehouse.x, treehouse.y, treehouse.width, treehouse.height);
        treehouse.x -= treehouse.speed;
        if (treehouse.x + treehouse.width < 0) treehouses.splice(index, 1);
    });

    ctx.globalAlpha = 1; // Reset transparency
    ctx.globalCompositeOperation = 'source-over';
}

function drawObstacles() {
    obstacles.forEach((obstacle, index) => {
        ctx.fillStyle = '#8B4513'; // Brown color for obstacles
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.x -= obstacle.speed;
        if (obstacle.x + obstacle.width < 0) obstacles.splice(index, 1);
    });
}

function drawIceCream() {
    icecreams.forEach((icecream, index) => {
        ctx.drawImage(iceCreamImage, icecream.x, icecream.y, icecream.width, icecream.height);
        icecream.x -= icecream.speed; // Move coin to the left

        // Remove the coin if it goes off-screen
        if (icecream.x + icecream.width < 0) {
            icecreams.splice(index, 1);
        }
    });
}

function drawPotatoes() {
    potatoes.forEach((potato, index) => {
        ctx.drawImage(potatoImage, potato.x, potato.y, potato.width, potato.height);
        potato.x -= potato.speed;

        if (potato.x + potato.width < 0) {
            potatoes.splice(index, 1); // Remove potato if it goes off-screen
        }
    });
}


function displayScore() {
    ctx.drawImage(iceCreamImage, 10, 10, 40, 40); 
    ctx.drawImage(potatoImage, 10, 55, 40, 40); 

    ctx.fillStyle = 'black';
    ctx.font = '25px Comic Sans MS';

    ctx.fillText(`x ${score}`, 55, 35); 
    ctx.fillText(`x ${potatoScore}`, 55, 85); 
}