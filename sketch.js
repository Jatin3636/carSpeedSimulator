var wall,car;
var speed,weight;
function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(100, 200, 70, 35);
  car.shapeColor = "white";
  car.velocityX = speed;
  wall = createSprite(700,200,50,height/2);
}

function draw() {
  background(0);

  if(wall.x - car.x < car.width/2 + wall.width/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation > 180) {
      car.shapeColor = "red";
    } else if(deformation <= 180 && deformation >= 80) {
      car.shapeColor = "yellow";
    } else if(deformation < 80) {
      car.shapeColor = "green";
    }
  }
  drawSprites();
}