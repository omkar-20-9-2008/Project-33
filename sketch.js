var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var ground,particle;
var divisionHeight=300;
var score = 0;
var count = 5;
var gameState = "play";
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k=k+80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  if(gameState==="play"){
  background("black");
  Engine.update(engine);
  ground.display();

  textSize(30);
  text("100",15,530);

  textSize(30);
  text("100",95,530);

  textSize(30);
  text("100",655,530);

  textSize(30);
  text("100",735,530);

  textSize(30);
  text("200",175,530);

  textSize(30);
  text("200",255,530);

  textSize(30);
  text("200",495,530);

  textSize(30);
  text("200",575,530);

  textSize(30);
  text("500",335,530);

  textSize(30);
  text("500",415,530);
 
  textSize(20)
  text("Score : "+score,20,30);

  textSize(20);
  text("Chance : "+count,700,30);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30),random(width/2+30), 10,10));
  }


if(particle!=null){
  particle.display();

  if(particle.body.position.y>650){
    if(particle.body.position.x>0 && particle.body.position.x<160 || particle.body.position.x>640 && particle.body.position.x<800){
      score=score+100;
      count=count-1;
      particle=null;
    }
  }
}

if(particle!=null){
  particle.display();

  if(particle.body.position.y>650){
    if(particle.body.position.x>160 && particle.body.position.x<320 || particle.body.position.x>480 && particle.body.position.x<640){
      score=score+200;
      count=count-1;
      particle=null;
    }
  }
}

if(particle!=null){
  particle.display();

  if(particle.body.position.y>650){
    if(particle.body.position.x>320 && particle.body.position.x<400){
      score=score+500;
      count=count-1;
      particle=null;
    }
  }
}
  

if(count<0){
  gameState="done";
}

  }

if(gameState==="done"){
  textSize(100);
  fill(0,150,0);
  text("GAME OVER !!!",50,200);
}

}

function mousePressed()
{
  if(gameState!=="end")
  {
    particle=new Particle(mouseX, 10,10,10);
  }
}
