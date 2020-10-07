//Create variables here
var dog, happyDog, database, foodS, foodStock,cuteDog;

function preload(){
dog = loadImage("Dog.png");

happyDog =loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database();

  cuteDog = createSprite(120,120,20,20)
  


  foodStock = database.ref('food')
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

text("NOTE:PRESS UP ARROW TO FEED YOUR PET DOG",230,100)
strokeWeight(5)

  drawSprites();
  
  //add styles here

 
}

if(keyWentDown(UP_ARROW)){
  readStock(foodS);

  dog.addImage(happyDog);
}

function readStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  //functions to write values in DB

  function writeStock(x){

    database.ref('/').update({
      Food:x
  })


 

}


}
