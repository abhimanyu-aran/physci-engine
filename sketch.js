const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,options,ball,balloptions

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  options = {
  isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground);

  balloption = {
    restitution:1
  }
  ball = Bodies.circle(200,200,25,balloption);
  World.add(world,ball);


  
}



function draw() {
  background("black");
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25);

  drawSprites();
}