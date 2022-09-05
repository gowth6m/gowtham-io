
// constants
const COLOR_SPACE = "#040403";
// const COLOR_STARS = "rgba(153, 136, 136, 0.5)";
// const COLOR_STARS = "rgba(100, 100, 100, 0.8)";
const COLOR_STARS = "rgba(255, 255, 255, 0.9)";

// const COLOR_SPACE = "#EADEDA";
// const COLOR_STARS = "rgba(153, 136, 136, 0.5)";

// const STAR_NUM = 100; // number of stars in the starfield
// const STAR_SIZE = 0.02; // max star size as a fraction of screen width
// const STAR_SPEED = 0.01; // fraction of screen width per second
const STAR_NUM = 300; // number of stars in the starfield
const STAR_SIZE = 0.002; // max star size as a fraction of screen width
const STAR_SPEED = 0.012; // fraction of screen width per second
// const STAR_SIZE = 0.050;

// set up the canvas and context
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.getElementById("background-animation").appendChild(canvas);

// set up the stars
var stars = [];
var starSpeed = STAR_SPEED * canvas.width;
var xv = starSpeed * randomSign() * Math.random();
// Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
generateStars();

function generateStars() {
    for (let i = 0; i < STAR_NUM; i++) {
        let speedMult = Math.random() * 1.5 + 0.5;
        stars[i] = {
            r: Math.random() * STAR_SIZE * canvas.width / 2,
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            xv: xv * speedMult,
            yv: yv * speedMult
        }
    }
}

// set up the animation loop
var timeDelta, timeLast = 0;
// var freezeWindow = false;

requestAnimationFrame(loop);

function loop(timeNow) {
    // calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;

    // space background
    ctx.fillStyle = COLOR_SPACE;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    ctx.fillStyle = COLOR_STARS;
    // ctx.fillStyle = generateRandomOpacity();
    for (let i = 0; i < STAR_NUM; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
        ctx.fill();

        // update the star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.005;

        // reposition the star to the other side if it goes off screen
        if (stars[i].x < 0 - stars[i].r) {
            stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
            stars[i].x = 0 - stars[i].r;
        }
        
        // update the star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to the other side if it goes off screen
        if (stars[i].y < 0 - stars[i].r) {
            stars[i].y = canvas.height + stars[i].r;
        } else if (stars[i].y > canvas.height + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
        }
    }
    
    // To pause the animation as requestAnimationFrame doesn't load during window not focus
    // if(!document.hasFocus()) {
    //     starXCoords = []
    //     starYCoords = []

    //     // console.log("System is paused");
    //     stars.splice(0,stars.length);

    //     generateStars();
    //     // console.log("Stars regen");
    // }

    // call the next frame
    requestAnimationFrame(loop);
}

function loopDuringPause() {
    console.log("paused");
}

function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
}

function generateRandomColor() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    if(randomColor.length != 7){ // In any case, the color code is invalid
        randomColor = generateRandomColor();
    }
    return randomColor;
    // The random color will be freshly served
}

function generateRandomOpacity() {
    var opacityValue = Math.floor(Math.random() * (1 - 0.5 + 1)) + 0.5;
    return "rgba(0, 0, 0, "+ opacityValue +")";
}
