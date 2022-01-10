var runner, runner_running;
var fruitsGroup, fruit1,fruit2,fruit3,fruit4;
var obstaclesGroup, obstacle1, obstacle2;
var  ground, invisibleGround, groundImage;
var gameOver, gameOverImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
runner_running = loadAnimation ("Runner-1.png","Runner_2.png");
fruit1 = loadImage ("fruit1.png");
fruit2 = loadImage ("fruit2.png");
fruit3 = loadImage ("fruit3.png");
fruit4 = loadImage ("fruit4.png");
groundImage = loadImage ("61084056-seamless-texture-highway-asphalt-road-with-yellow-stripes-2d-illustration.webp")
gameOverImg = loadImage ("gameOver.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

runner = createSprite(50,70,20,50);
runner = addAnimation ("running",runner_running);
runner.scale = 0.5;

ground = createSprite (width/2, height/2-50);
ground.addImage("ground",groundImage);
ground.y = ground.height /2;
  ground.velocityY = -(6 + 3*score/100);

  gameOver = createSprite(300,100);
  gameOver.addAnimation (gameOverImg);
gameOver.scale = 0.5;
gameOver.visible = false;

invisibleGround = createSprites (width/2,height-10,width,125);
invisibleGround.visible = false;

fruitsGroup = new Group();
obstaclesGroup = new Group ();


score = 0;
}

function draw() {
    background(255);
    text("Score: "+ score, 500,50);
    
    if (gameState===PLAY){
        score = score + Math.round(getFrameRate()/60);
        ground.velocityX = -(6 + 3*score/100);

        if(keyDown("space") && runner.y >= 159) {
            trex.velocityY = -12;
          }    
    }
    drawSprites();
}