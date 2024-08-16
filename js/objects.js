let isGameOver = false;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ground properties
const groundHeight = canvas.height / 2.5;
const groundY = canvas.height - groundHeight;
let groundX = 0;

// Image objects
const cloudImage = new Image();
const treeImage = new Image();
const treehouseImage = new Image();
const iceCreamImage = new Image();
const potatoImage = new Image();

const flowerImages = [
    'assets/flower3.png',
    'assets/flower2.png',
    'assets/flower4.png',
    'assets/flower5.png',
    'assets/flower1.png',
    'assets/mushroom.png'
].map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

// Game elements arrays
const clouds = [];
const trees = [];
const flowers = [];
const treehouses = [];
const icecreams = [];
const potatoes = [];