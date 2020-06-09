var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,zone1,zone2,zone3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//zone1 = new Zone(400,680,200,20);
	
	zone1Sprite=createSprite(400,650,200,20);
	zone1Sprite.shapeColor= "red";

	zone2Sprite= createSprite(500,620,20,100);
	zone2Sprite.shapeColor= "red";

	zone3Sprite= createSprite(300,620,20,100);
	zone3Sprite.shapeColor= "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	zone1 = Bodies.rectangle(400,650,200,20,{isStatic: true,density:1.0});
	World.add(world,zone1);
	
	
	zone2 = Bodies.rectangle(500,620,20,100);
	World.add(world,zone2)

	zone3 = Bodies.rectangle(300,620,20,100);
	World.add(world,zone3)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



