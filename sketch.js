var mr,fr;

function setup() {
  createCanvas(1200,800);
  mr = createSprite(400, 200, 40, 80);
  mr.shapeColor="green";
  mr.debug=true;
  fr = createSprite(600, 400, 50, 80);
fr.shapeColor="green";
fr.debug=true;
}

function draw() {
  background(0); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  
  if(mr.x-fr.x<mr.width/2+fr.width/2 &&
    fr.x-mr.x<mr.width/2+fr.width/2 &&
    mr.y-fr.y<mr.height/2+fr.height/2 &&
    fr.y-mr.y<mr.height/2+fr.height/2)
  
    {mr.shapeColor="red";
    fr.shapeColor="red";

    }
else{
  mr.shapeColor="green";
  fr.shapeColor="green";
}

  drawSprites();
}