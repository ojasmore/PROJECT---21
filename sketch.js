 var bullet , wall, thickness;

 var speed , weight; 
 
 function setup() {
    createCanvas(1600,400);
    
    bullet = createSprite(50,200,10,4);
    bullet.shapeColor = "green";
    
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83);

    wall = createSprite(1000,200,thickness,200);
    wall.shapeColor = color(80,80,80);

  }

function draw() {
  background(255,255,255);
  
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }

  }

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width/2;
  wallLeftEdge = wall.x - wall.width/2;

  if(bulletRightEdge >=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}