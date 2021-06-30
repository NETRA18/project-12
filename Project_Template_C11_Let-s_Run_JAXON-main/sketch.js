var path,pathImg;
var runner,runnerImg;
var b1;
var b2;

function preload(){
  //pre-load images
  pathImg = loadImage ("path.png");
  runnerImg = loadAnimation ("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200,20,20);
runner=createSprite(200,200,20,20);

path.addImage("path",pathImg);
path.velocityY = 4;
path.scale=1.2;

runner.addAnimation("runner",runnerImg);
runner.scale=0.1;

b1=createSprite(5,200,10,400);
b2=createSprite(395,200,10,400);
b1.visible=false;
b2.visible=false;

}

function draw() {
  background(0);
if (path.y > 400){
path.y = height/2;
}

runner.x=mouseX;
 
runner.collide(b1);
runner.collide(b2);
drawSprites()
}
