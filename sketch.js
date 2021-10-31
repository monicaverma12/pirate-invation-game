const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower, canon;



function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerimage = loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic: true
  }
 
 ground = Bodies.rectangle(0,580,1200,20, options);
 World.add(world,ground);

 tower = Bodies.rectangle(160,350,160,310, options);
 World.add(world,tower);


 canon = new Canon(180, 110, 130, 100, -120);
}

function draw() {
  image(backgroundImg, 0, 0, width, height);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, 1200, 20);
  push();
  imageMode(CENTER);
  image(towerimage,tower.position.x, tower.position.y, 160, 310);
  pop();
   
  canon.display();
}
