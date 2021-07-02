//Create variables here
var dog, happy_dog;
var database, foodS;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();

  var foodRef = database.ref('foodS');
  foodRef.on('value', readFoodStock);

  

  dog = createSprite(300,300,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.4
  
}


function draw() {  
  background(46,139, 87);

  fill("black");
  text("Food Stock:" +foodS,200,50)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}


