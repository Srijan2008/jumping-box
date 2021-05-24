var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,35);
    block1.shapeColor = "blue";
    block1.scale = 0.9

    block2 = createSprite(290,580,200,35);
    block2.shapeColor = "orange";
    block2.scale = 0.9

    block3 = createSprite(500,580,200,35);
    block3.shapeColor = "red";
    block3.scale = 0.9

    block4 = createSprite(710,580,200,35);
    block4.shapeColor = "green";
    block4.scale = 0.9


    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 10
    ball.velocityY = 10
    ball.shapeColor = "black"
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        
    }

    

    drawSprites();
}
