var dogImg,dog,happyDogImg,database,foodS,foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.1;
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


function draw() {  
  background(46,139,87);

  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }

  drawSprites();
  
  textSize(20);
  fill("blue");
  textFont("timesNewRoman")
  text("Note: Press The Up Arrow To Feed The Dog Milk!",25,450);

}



