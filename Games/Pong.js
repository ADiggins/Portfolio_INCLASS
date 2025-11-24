console.log("Testing Pong.js")
let myCanvas;
let ball, velo;

function setup() {
    myCanvas = createCanvas(500,500);
    myCanvas.parent('gamePanel');
    ball = createVector(100,250);
    velo = createVector(-1,0);
    velo.rotate( radians(30) );
    velo.setMag(10); //SPEED
}

function draw() {
    background(255,255,255);
    ball.add(velo);
    if (ball.x < 0)     velo.reflect( createVector(1,0) );
    if (ball.x > 500)   velo.reflect( createVector(-1,0) );
    if (ball.y < 0)     velo.reflect( createVector(0,1) );
    if (ball.y > 500)   velo.reflect( createVector(0,-1) );

    fill(255,100,100);
    noStroke();
    ellipse(ball.x, ball.y, 20,20);

    if ( abs(ball.x-450) < 20/2 + 20/2 && abs(ball.y-mouseY) < 20/2+100/2 ) {
        velo.set(-1,0);
        velo.rotate( radians(random(-60,60)));
        velo.setMag(10);
    }

    rectMode(CENTER);
    rect(450,mouseY,20,100);
}