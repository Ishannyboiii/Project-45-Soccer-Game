var ground;
var groundIMG
var ball;
var ballIMG
var player;
var playerAni;
var player2;
var player2Ani;
var playerStill;
var player2Still;



function preload()
  {
   ballIMG = loadImage("Pictures/soccerball.png");
   groundIMG = loadImage("Pictures/soccerField.jpg");
   playerAni = loadAnimation("Pictures/Soccer1.png","Pictures/Soccer2.png","Pictures/Soccer3.png","Pictures/Soccer4.png","Pictures/Soccer5.png","Pictures/Soccer6.png");
   playerStill = loadImage("Pictures/Soccer1.png");
   player2Ani = loadAnimation("Pictures/Soccer1.png","Pictures/Soccer2.png","Pictures/Soccer3.png","Pictures/Soccer4.png","Pictures/Soccer5.png","Pictures/Soccer6.png");
  }




function setup() {
  createCanvas(800,400);
  ball = createSprite(400, 200, 50, 50);
  ball.addImage("ball image", ballIMG);
  ball.scale = 0.01
  //ground = createSprite(400,220,800,400);
  // ground.addImage("ground image", groundIMG);
  // ground.scale = 1.5;
  player = createSprite(200,200,50,50);
  player.addImage(playerStill);
  player.scale = 0.5;
  player2 = createSprite(600,200,50,50)

}
function draw() {
  background(groundIMG);  
  drawSprites();
}