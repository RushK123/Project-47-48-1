let ground;
let moonlander;
var landerImg;
var bgImg;
var velx = 0;
var vely = 0;
var g = 0.5;
var moveRight, moveLeft, moveDown, moveUp;

function preload() {
  landerImg = loadImage("normal.png");
  bgImg = loadImage("bg.png");
  moveLeft = loadAnimation("left_thruster_1.png","left_thruster_2.png");
  moveRight = loadAnimation("right_thruster_1.png", "right_thruster_2.png");
  moveDown = loadAnimation("landing1.png", "landing2.png");
  moveUp = loadAnimation("b_thrust_2.png","b_thrust_3.png")

}

function setup() {
  createCanvas(1000, 700);

  frameRate(80);

  moonlander = createSprite(100, 50, 30, 30);
  moonlander.addImage(landerImg);


  moonlander.scale = 0.1;


  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bgImg, 0, 0);

  push()

  fill(255);
  
  textSize(10)
  text("The horizontal position of the lander is " + moonlander.position.x + " units", 750, 75);
  text("The vertical position of the lander is " + moonlander.position.y + " units", 750, 90);



  fill("red");

  text ("The Lunar Lander", 500, 75)
  pop();

//  vely += g;
 moonlander.position.y += g;



  if (keyDown("space")){
    console.log("asdf")
    moonlander.position.y -= 4;
    moonlander.addAnimation("u", moveUp);
    moonlander.changeAnimation("u")
  }

  if (keyDown("a")){
    console.log("asd")
    moonlander.position.x += 3;
    moonlander.addAnimation("right", moveRight);
    moonlander.changeAnimation("right")
  }

  if (keyDown("d")){
    console.log("ad")
    moonlander.position.x -= 3;
    moonlander.addAnimation("left", moveLeft);
    moonlander.changeAnimation("left")
  }

  drawSprites();
}


