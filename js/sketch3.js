let img;
let tileW;
let tileH;
let c1;
let c2;

function preload (){
    img = loadImage("imgs/slayy.jpg");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight,WEBGL);

   // Set the amount of tiles
   img.resize(170, 170);

   if (pixelDensity() === 2) {
    pixelDensity(1);
    }
  
  c1=color(255,0,0);
  c2=color(0,0,255);
}

function draw() {
  background(0);
  noStroke();
  
   let // Calculate the width and the height of a single tile
   tileW = width / img.width;
   tileH = height / img.height;
  
let rotation = frameCount;
//rotateY(radians(rotation));
//rotateX(radians(45));

// lerping colorcome back to l8r :P

/*for (let x = 0; x < width; x++) {
   
    let l = norm(x, 0, width);
    let m = lerpColor(c1,c2,l);
    fill(m);
    rect(-x+900, 400, 1, -height);
  }*/


   
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
      
        // get the color from the current pixel
        let c = img.get(x,y);
    
        // calculate the brightness
        let b = brightness(c);

        // calculate the scalar
        let scalar = map(b,0,255,0,1);
  
        // set the fill color to black
      

       fill(255,0,0);

        push();
          // pull the visual to the center
          translate(-width/2, -height/2);
          //let depth = 200;
          // calculate the z-position based on the brightness
         
          let z = map(b, 0, 255, frameCount * 20, 0);
          if (frameCount>50){
            frameCount = 0;
          }

            push();
              translate(x*tileW, y*tileH,z + frameCount); 
              // draw a box (also called "voxel")
              box(tileW*scalar,tileH*scalar,tileW);
          pop();
        pop();
    }
    }
}



