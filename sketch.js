var paper;
var box1,box2,box3,binImage,binSprite;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage = loadImage("bin.png");
}

function setup() {
	createCanvas(800, 700);
	binSprite = createSprite(670,615,20,20);
	binSprite.addImage(binImage);
	binSprite.scale = 0.23;

	engine = Engine.create();
	world = engine.world;
	paper = new Paper(100,600);
	ground = new Ground(800,40);
	box1 = new Box(700,615,10,90,PI*3);
	box2 = new Box(670,655,50,10,PI-3);

	box3 = new Box(640,615,10,90,PI*-3);

	Engine.run(engine);
  
}


function draw() {
	background("grey");
ellipseMode(RADIUS)
  rectMode(CENTER);
 
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
	keyPressed();
  drawSprites();
  fill(0);
  textSize(20);
 text("Keep pressing the up arrow and try to get the paper into the bin",150,350);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.paper,paper.paper.position,{x:0.2,y:-3})
	}
}



