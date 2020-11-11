//Create variables here
var dog,happyDog,database,foodS,foodStock; 
function preload()
{ 
  //load images here
//  dogImg=loadImage("Images/Dog.png");
//  dogImg1=loadImage("Images/happy Dog.png");

}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog.createSprite(250,300,150,150)
 // dog.addImage(dogImg);
  dog.scale=0.15;

 
}

  //dog.addImage(dogImg1);

function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  fill(255,255,254);
 stroke("black");
 text("Food remaining : "+foodS, 170, 30)
 textSize(13);
 text("Note: Press UP_ARROW Key To Feed The Dog");
  drawSprites();

}
  
  //add styles here
  
 
  
}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1; 
}
 d
database.ref('/').update({
Food:x
})


}




