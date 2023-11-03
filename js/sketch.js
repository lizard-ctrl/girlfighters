let tilesX = 10;
let tilesY = 10;
var step1 = -500;
var step2 = 250;
let img;
let mag;


function preload() {
  img = loadImage('imgs/girlfight.png');
}

function setup() {
    let cnv = createCanvas(700, 700);
    cnv.parent('one');
    image(img, width/2, height/2);
}

function draw() {

    background(255,0,0);

  let amount = 24;
  let step = 360 / amount;

  translate(width/2, height/2);
  noStroke();

  for (let i = 0; i < amount; i++) {
    fill("#f1f1f1");
    push();
    rotate(radians(i*step));
    ellipse(0, 300, 70, 70);
    pop();
  }
}
 