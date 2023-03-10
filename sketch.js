var trex ,dinosaur;
var edges;
var ground,groundImage;

function preload(){
  dinosaur=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //create a trex sprite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",dinosaur);
  trex.scale=0.5;

  ground=createSprite(200,180,400,20);
  ground.addImage(groundImage);

  edges=createEdgeSprites();
}

function draw(){
  //set background color to gray
  background(220);
  
  ground.velocityX=-2;

  if(ground.x<0){
    ground.x=ground.width/2;
  }

  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY=-10;
  }

  //add gravity
  trex.velocityY=trex.velocityY+0.5;

  //stop trex from falling down
  trex.collide(ground);

  drawSprites();
}
