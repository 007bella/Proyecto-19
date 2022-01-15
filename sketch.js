var runner, runner_running;
var fruitsGroup, fruit1,fruit2,fruit3,fruit4;
var obstaclesGroup, obstacle1, obstacle2;
var  ground, invisibleGround, groundImage;
var gameOver, gameOverImg;
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = "play";

function preload(){
runner_running = loadAnimation ("Runner-1.png","Runner_2.png");

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
    
    if (gameState=== "play"){
        score = score + Math.round(getFrameRate()/60);
        ground.velocityY = -(6 + 3*score/100);

      if(keyDown("left_arrow") && runner.y >= 159) {
      runner.velocityY = -12;
      }
      spawnDoors();

      if(keyDown("right_arrow")){
      runner.velocityY = -12
      if(fruitsGroup.isTouching(runner)){
        score +=1
      }
      if(obstaclesGroup.isTouching(runner)){
      runner.destroy();
      runner.velocityY = 0;
      gameState = "end"
      }
        }         
    }
    if (gameState === "end"){
      score = 0;
      gameOver = createSprite(300,100);
      gameOver.addAnimation ("gameOver",gameOverImg);
    gameOver.scale = 0.5;
    }
    drawSprites();
}
function spawnDoors (){
  if (frameCount % 240 === 0) {
    fruit1 = loadImage ("fruit1.png");
    fruit2 = loadImage ("fruit2.png");
    fruit3 = loadImage ("fruit3.png");
    fruit4 = loadImage ("fruit4.png");
    fruitsGroup.y = Math.round(random(120,400));
     fruitsGroup.add(fruit1, fruit2, fruit3, fruit4);
     fruitsGroup.velocictyY = 2;
   fruitsGroup.lifetime = 800;
  }
}