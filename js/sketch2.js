let tilesX = 20;
let tilesY = 20;
var step1 = -800;
var step2 = 250;
let img;
let mag;

function preload() {
  img = loadImage('imgs/girlfight.png');
}

function setup() {
  let cnv = createCanvas(700, 700);
  cnv.parent('mainbg');
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {

  let mag = mouseX;
  background('Black');
  fill('#f1f1f1');
  noStroke();
  
  
  image(img,step1,step2);
  
  push();

  rotateY(radians(frameCount/3));
  rotateX(radians(frameCount/3));

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {

      let posX = map(x, 0, tilesX, -mag, mag);
      let posY = map(y, 0, tilesY, -mag, mag);

      push();
      translate(posX, posY);
      image(img,0, 0);
      pop();
    }
  }
  
 

  pop();
}

 function keyPressed() {
  if (keyCode === UP_ARROW) {
    step2 = step2 - 10;
  } else if (keyCode === DOWN_ARROW) {
   step2 = step2 + 10;
  }
  if (keyCode === LEFT_ARROW) {
    step1 = step1 - 5;
  } else if (keyCode === RIGHT_ARROW) {
    step1 = step1 + 5;
  }
  
}