const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin, paperobj,ground	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,660);
	paperobj=new Paper(200,200);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	  }
	});

	Engine.run(engine);  
}
function draw() {
  rectMode(CENTER);
  background("white");
  paperobj.display();
  dustbin.display();
  
  ground.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:155,y:-135});
    
  	}
}
