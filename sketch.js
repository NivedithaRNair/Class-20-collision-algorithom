var mr,fr;

function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50);
 mr=createSprite(500,100,40,80);
}

function draw() {
  background(255,255,255);
  mr.x=mouseX;
  mr.y=mouseY;  
  
  if(mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2&&fr.y-mr.y<fr.height/2+mr.height/2&&mr.y-fr.y<fr.height/2+mr.height/2){
    mr.shapeColor="blue";
    fr.shapeColor="blue";
  }
  else{
    mr.shapeColor="grey";
    fr.shapeColor="grey";
  }
  drawSprites();
}