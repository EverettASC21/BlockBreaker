let pXPos= 150;
let pYPos = 450;
let pLeft, pRight, pTop, pBottom;
let ballRight, ballLeft, ballTop, ballBottom;
let ballXPos = 250;
let ballYPos = 400;
let ballXSpeed;
let ballYSpeed;
let ballXDirection = 1;
let ballYDirection = 1;


function setup() {
    createCanvas(500, 500);
    noStroke();

    ballXSpeed = random(-5, 5);
    ballYSpeed = random(-5, 5);

}
function draw() {
    background(0);
    
    rectMode(CENTER);
    ellipseMode(CENTER);
    
    fill(255, 255, 255);
    rect(pXPos, pYPos, 200, 20);
    rect (100, 300, 250, 30);
    
    fill(255, 0, 0);
    ellipse(ballXPos, ballYPos, 30);

    ballXPos += ballXSpeed * ballXDirection;
    ballYPos += ballYSpeed * ballYDirection;


    
    if (keyIsDown(LEFT_ARROW)) {
        pXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        pXPos += 3;
    }

    pLeft = pXPos - 100;
    pRight = pXPos + 100;
    pTop = pYPos - 10;
    
    ballTop = ballYPos - 15 ;
    ballBottom = ballYPos + 15;
    ballLeft = ballXPos - 15;
    ballRight = ballXPos + 15;


    if (pLeft > ballRight || pRight < ballLeft || pTop > ballBottom || pBottom < ballTop) {
    
    } 
    else {
      ballYDirection *= -1;
    

    
}
    




}
