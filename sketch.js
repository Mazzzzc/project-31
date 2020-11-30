const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;





function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  ground=new Ground(240,795,480,10);

  if(frameCount%10==0){
    particles.push(new Particle(random(285,275),0, 7));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,75,8));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,175,8));
  }

  for (var j = 40; j <=width; j=j+50)
  {

    plinkos.push(new Plinko(j,275,8));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {

    plinkos.push(new Plinko(j,375,8));
  }


}

function draw() {
  background("gray"); 
  Engine.update(engine); 
  drawSprites();
  ground.display();
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();
  }

  for (var j = 0; j < plinkos.length; j++) {

    plinkos[j].display();
  }
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  
}