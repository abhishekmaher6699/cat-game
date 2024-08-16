function createCloud() {
    const scale = 0.1 + Math.random() * 1.5;
    const cloud = {
        x: canvas.width,
        y: Math.random() * (groundY - 100),
        width: cloudImage.width * scale,
        height: cloudImage.height * scale,
        speed: 0.5 + Math.random()
    };
    clouds.push(cloud);
}

function createTree() {
    const tree = {
        x: canvas.width,
        y: groundY - 153,
        width: 120,
        height: 170,
        speed: 2
    };
    trees.push(tree);
}

function createTreehouse() {
    const treehouse = {
        x: canvas.width,
        y: groundY - 150,
        width: 200,
        height: 200,
        speed: 0.5
    };
    treehouses.push(treehouse);
}

function createFlower() {
    const chosenImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    const flower = {
        x: canvas.width,
        y: (groundY - 10) + Math.random() * (canvas.height / 2.5),
        width: 30,
        height: 30,
        speed: 2,
        image: chosenImage
    };
    flowers.push(flower);
}

safeDistance = 30

function createObstacle() {
    // Check if the last ice cream's x position is too close
    const lastIceCream = icecreams[icecreams.length - 1];
    const lastIceCreamX = lastIceCream ? lastIceCream.x : -Infinity;

    if (Math.abs(lastIceCreamX - canvas.width) > safeDistance) {
        const obstacle = {
            x: canvas.width,
            y: groundY - 50, // Adjust height as needed
            width: 20,
            height: 50,
            speed: obstacleSpeed,
            passed: false 
        };
        obstacles.push(obstacle);
    }
}

function createIceCream() {
    // Check if the last obstacle's x position is too close
    const lastObstacle = obstacles[obstacles.length - 1];
    const lastObstacleX = lastObstacle ? lastObstacle.x : -Infinity;

    if (Math.abs(lastObstacleX - canvas.width) > safeDistance) {
        const icecream = {
        x: canvas.width,
        y:   groundY - 40 - Math.random() * (groundY - (groundY - jumpHeight - frameHeight)),
        width: 40,
        height: 40,
        speed: obstacleSpeed,
        collected: false 
        };
        icecreams.push(icecream);
    }
}

function createPoatato() {
    // Check if the last obstacle's x position is too close
    const lastObstacle = obstacles[obstacles.length - 1];
    const lastObstacleX = lastObstacle ? lastObstacle.x : -Infinity;

    if (Math.abs(lastObstacleX - canvas.width) > safeDistance) {
        const potato = {
        x: canvas.width,
        y:   groundY - 100  - (groundY - (groundY - jumpHeight - frameHeight)),
        width: 40,
        height: 40,
        speed: obstacleSpeed,
        collected: false 
        };
        potatoes.push(potato);
    }
}