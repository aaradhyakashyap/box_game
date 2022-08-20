
function setup() {
  createCanvas(900,900);
  box=createSprite(200,400,100,400)
  box.shapeColor='GREEN'
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyDown('right')){ 
    box.x+=5
  }
  if(keyDown('left')){
    box.x-=5
  }
  if(keyDown('up')){
    box.y-=5
  }
  if(keyDown('down')){
    box.y+=5
  }
}




