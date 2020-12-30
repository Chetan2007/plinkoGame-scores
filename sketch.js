var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
var Body = Matter.Body;

var engine,world;
 
var particle
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var ground;
var frameCount;
var gameState = 0;

var score =0; 
var turn; 
var count =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
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
  background("black");
  textSize(27);
  fill("cyan");
  text("Score : "+score,20,30);
  text("100",25,620);
  text("500",105,620);
  text("200",190,620);
  text("500",265,620);
  text("100",335,620);
  text("500",425,620);
  text("200",490,620);
  text("100",575,620);
  text("500",665,620);
  text("200",745,620);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>760)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }
   
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (gameState =="end") {
    
    textSize(70);
    text("GameOver", 200, 350);
}
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10,10,10);
  }
}