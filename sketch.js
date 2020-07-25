
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball1;
var Ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Ball1 = new Ball(50,350,10);
	Ground1 = new Ground(400,350,width,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Ball1.display();
  Ground1.display();

  drawSprites();
 
}



