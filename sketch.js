
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var tree;
var mango1, mango2, mango3, mango4, mango5;
var hand1, hand2;
var stone;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(600, 400, 15, 100);
	boy.shapeColor = "red";

	tree = createSprite(1400, 300, 50, 300);
	tree.shapeColor = "green";

	mango1 = createSprite(1300, 250, 150, 15);
	mango1.shapeColor = "yellow";

	mango2 = createSprite(1300, 160, 150, 15);
	mango2.shapeColor = "yellow";

	mango3 = createSprite(1400, 100, 15, 100);
	mango3.shapeColor = "yellow";

	mango4 = createSprite(1500, 160, 150, 15);
	mango4.shapeColor = "yellow";

	mango5 = createSprite(1500, 250, 150, 15);
	mango5.shapeColor = "yellow";

	hand1 = createSprite(551, 400, 80, 15);
	hand1.shapeColor = "skin";

	hand2 = createSprite(649, 400, 80, 15);
	hand2.shapeColor = "skin";

	stone = createSprite(550, 389, 10, 10);
	stone.shapeColor = "brown";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
}



