var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200,200,80,50)
  movingrect=createSprite(50,80,50,80)
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"

}

function draw() {
  background(0); 
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2){
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"
  }
  else{
    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  drawSprites();
}