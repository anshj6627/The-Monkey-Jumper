var bananaImage, stoneImage, monkeyImage, jungleImage,monkey1;
var banana, monkey, jungle, stone, invisibleGround, bananaGroup, stoneGroup,monkeyc;
var gameState = "play";
var score = 0;

function preload() {
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  jungleImage = loadImage("jungle.jpg");
  monkey1=loadImage("Monkey_01.png");
}

function setup() {
  createCanvas(600, 400);
  jungle = createSprite(200, 200, 20, 20);
  jungle.addImage("jungle", jungleImage);
  invisibleGround = createSprite(300, 350, 600, 10);
  monkey = createSprite(70, 300, 20, 20);
  monkey.addAnimation("monkey", monkeyImage);
  monkey.scale = 0.1;
  bananaGroup = new Group();
  jungle.x = jungle.width / 2;
  stoneGroup = new Group();
 monkeyc=createSprite(70,300,20,20);
  monkeyc.addImage("ok",monkey1);
    monkeyc.scale = 0.15;
 
}

function draw() {
   if(keyDown("S")&& score<5){
  score=score+5;
  } 
  if(score==10){
  monkey.scale=monkey.scale+0.10;
  } 
  if(score==20){
  monkey.scale=monkey.scale=0.10;
  }
  if(score==30){
    monkey.scale=monkey.scale=0.10;
  }
  if(score==40){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==50){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==60){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==70){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==80){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==90){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==100){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==110){
    monkey.scale=monkey.scale=0.10;
  }
    if(score==120){
    monkey.scale=monkey.scale=0.10;
  }
  background(220);
  monkey.collide(invisibleGround);
  if (gameState == "play") {
    monkey.scale=0.1;
    if (keyDown("space") && monkey.y > 205) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
    if (monkey.isTouching(bananaGroup)) {
      bananaGroup.destroyEach();
      score = score + 2;
    }
    stonee();
    bananan();
    monkeyc.visible=false;
    monkey.visible=true;
  }

  jungle.velocityX = -8;
  if (jungle.x < 200) {
    jungle.x = jungle.width / 2;
  }
  invisibleGround.visible = false;
if(score%10==0){
jungle.velocityX=jungle.velocityX+3;
}

  drawSprites();
  textSize(18);
  stroke("blue");
  fill("golden");
  textStyle(BOLD);
  textFont("Georgia");
  text("The Monkey and the Jungle",200,15);
  if(score<5&& gameState=="play"){
  textFont("Ariel");
  fill("red");
    textSize(15);
  text("SURPRIZE: Press 'S' to boost your scores (One time offer till your score is less than 5)",20,70);
  }
  if (gameState == "end") {
    jungle.velocityX = 0;
    banana.velocityX=0; 
    banana.destroy();
    stone.velocityX=0; 
    stone.destroy();
    textSize(23);
    stroke("purple");
    fill("purple");
    text("Press enter to restart the game...",120,200);
    score=0;
  }
  if(keyDown("enter")){
  gameState="play";
    text.visible=false;
  }
  if (monkey.isTouching(stoneGroup)) {
    gameState = "end"; 
  monkeyc.visible=true;
    monkey.visible=false;
  }
 
  textSize(20);
  textFont("Corbel");
  stroke("red");
  fill("blue");
  text("SCORE: " + score, 30, 30);
}

function stonee() {

  if (World.frameCount % 300 == 0) {
    stone = createSprite(600, 330, 20, 20);
    stone.addImage("stone", stoneImage);
    stone.scale = 0.155;
    stone.velocityX = -3;
    stone.lifetime = 595 / 2;
    stoneGroup.add(stone);
    if(gameState=="end"){
    stoneGroup.destroyEach();
    stoneGroup.setVelocityEach(0);
    }
  
    if (monkey.isTouching(stoneGroup)) {
        stoneGroup.destroyEach();

    }
    stone.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}

function bananan() {
  if (World.frameCount % 200 == 0) {
    banana = createSprite(580, 200, 20, 20);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.04;
    banana.velocityX = -3;
    banana.lifetime = 580 / 2;
    bananaGroup.add(banana);
    if(gameState=="end"){
    bananaGroup.destroyEach();
      bananaGroup.setVelocityEach(0);
    }
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  }
}