
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;
var rightside
var world
var engine

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;



	ground = new Ground (width/2,670, width,20)
	leftside = new Ground (1100,600,20,120);
	rightside = new Ground(1350,600,20,120);
   
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

	ball = Bodies.circle(50,100,15, ball_options);
	World.add(world,ball);
 
	//ground = Bodies.rectangle(width/2,670,width,20);
	//World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  Engine.update(engine);
  fill("blue")
  rectMode(CENTER);
  //rect(ground.position.x,ground.position.y, width/2,20)
  ellipse(ball.position.x,ball.position.x,radius,radius)
  ground.show();
  leftside.show();
  rightside.show():
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
	}
}



