var fixedrect,movingrect;
function setup(){
  createCanvas(500,500);
  fixedrect = createSprite(200,200,50,80);
  movingrect = createSprite(300,200,80,50);
fixedrect.shapeColor="green";
movingrect.shapeColor="red";
fixedrect.debug=true;
movingrect.debug=true;

  
}
function draw(){
    background(0,0,0);
    drawSprites();
    movingrect.x=World.mouseX;
    movingrect.y=World.mouseY;
  // we want to calculte the horizontal distnace // we are using distnce formula 
  //distance = x2-x1;)
  // width of fixedRext= 50 = 50/2= 25;
   // width of movingRect= 80 =80/2 = 40; 
   // 25+40 = 65; 
   // fixedRect.x- movingRect.x < fixedRect.width/2 + movingRect.width/2
//console.log(movingRect.x- fixedRect.x); 
console.log(fixedrect.x- movingrect.x);
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){
fixedrect.shapeColor="blue";
movingrect.shapeColor="yellow";

}
else{
  fixedrect.shapeColor="green";
  movingrect.shapeColor="red";

}
}
