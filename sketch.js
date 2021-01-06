var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1100,400,50,80);
  movingRect = createSprite(200,400, 30,50);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;
  
}

function draw() {
  background(0);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
      movingRect.velocityX=(-1)*movingRect.velocityX;
      fixedRect.velocityX=(-1)*fixedRect.velocityX;   
      
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
      movingRect.velocityY=(-1)*movingRect.velocityY;
      fixedRect.velocityY=(-1)*fixedRect.velocityY;   
    }
  /*else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
  }*/


  drawSprites();
}