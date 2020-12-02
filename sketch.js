
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,groundImg;
var bird,birdImg;
var pillar1,pillarImg,pillar2;

function preload()
{
groundImg=loadImage("background.png");
birdImg=loadImage("bird.png");	
pillarImg=loadImage("pillar.png");
}

function setup() {

ground=createSprite(0,0,1500,600);
ground.velocityX=-5;
ground.addImage(groundImg);
ground.scale=13;

bird=createSprite(200,300,20,20);
bird.addImage(birdImg);
bird.scale=0.8;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	createCanvas(1500,600)
	if(ground.x<0){
		ground.x=ground.width/2;
	}
	for (var i =0;i<10;i=i+4){
		pillar1=createSprite(100*i+500,500,10,10);
	pillar1.scale=0.37;
		pillar1.addImage(pillarImg);
	  }
	  for (var i =0;i<10;i=i+4){
		pillar1=createSprite(110*i+700,30,10,10);
	pillar1.scale=0.37;
		pillar1.addImage(pillarImg);
	  }

	
  rectMode(CENTER);  
  drawSprites();
 
}



