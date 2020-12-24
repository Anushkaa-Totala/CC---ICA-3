let cam;
let s = 300;
let m = 0;

function setup() {
  createCanvas(900, 900, WEBGL);
  angleMode(DEGREES);
  normalMaterial();
  cam = createCamera();
  // set initial pan angle
  cam.pan(-1.5);
}

function draw() {

  background(0);
  rotateX(frameCount * 0.2);

  //2D Shapes
  let s = 300;
  //zigzag 
  push();
  rotate(45);
  stroke(223,115,255)
  strokeWeight(3);

  //centre
  //right
  line(s / 2, -s / 2, s / 2 - 55 + m, -s / 2 + 60 + m) //corner
  line(s / 2 - 55 + m, -s / 2 + 60 + m, s / 2 - 105, -s / 2 + 100) //middle
  line(s / 2 - 105, -s / 2 + 100, -s * 0.0052 + m, -0.005 * s + m) //center
  //left
  line(-s / 2, s / 2, -s / 2 + 55 + m, s / 2 - 60 + m) //corner
  line(-s / 2 + 55 + m, s / 2 - 60 + m, -s / 2 + 95, -s / 2 + 190) //middle
  line(-s / 2 + 95, -s / 2 + 190, -s * 0.0052 + m, -0.005 * s + m) //center

  //bottom middle
  //left
  line(-s / 7, s / 2, -s * 0.0052 + m + 10, -0.0025 * s + m + 100)
  line(-s * 0.0052 + m + 10, -0.0025 * s + m + 100, s / 2 - 95, -s / 2 + 210)
  //  //right
  line(s / 2 - 95, -s / 2 + 210, s / 2 - 55 + m, -s / 2 + 160 + m)
  line(s / 2 - 55 + m, -s / 2 + 160 + m, -s / 2 + s, -s / 2 + s - s / 1.7)
  //bottom single
  //left
  line(s / 5, s / 2, s / 2 - 40 + m, -s / 2 + 255 + m)
  line(s / 2, s / 5, s / 2 - 40 + m, -s / 2 + 255 + m)

  //left
  line(-s / 2, -s / 2 + s / 1.6, -s / 2 + 45 + m, s / 2 - 161 + m)
  line(-s / 2 + 45 + m, s / 2 - 161 + m, -s / 2 + 95, -s / 2 + 90)
  line(-s * 0.01 + m, -0.35 * s + m, -s / 2 + 95, -s / 2 + 90)
  line(-s * 0.01 + m, -0.35 * s + m, s / 8, -s / 2)

  //top single
  //left
  line(-s / 2, -s / 6, -s / 2 + 45 + m, s / 2 - 250 + m)
  line(-s / 5, -5 * s / 10, -s / 2 + 45 + m, s / 2 - 250 + m)


  if (m < 10) {
    m++;
  } else {
    m -= 50;
  }
  pop();


  //box
  push();
  rotate(45);

  noFill();
  stroke(148,0,211);
  strokeWeight(8);
  rect(-s / 2, -s / 2, s);

  line(-s / 2, -s / 2, -s / 2 + s, -s / 2 + s); //center
  line(-s / 2, -s / 6, s / 5, s / 2); //big
  line(-s / 5, -5 * s / 10, s / 2, s / 5);

  line(-s / 2, -s / 2 + s / 1.6, -s / 7, s / 2); //small
  line(s / 8, -s / 2, -s / 2 + s, -s / 2 + s - s / 1.7);

  stroke(255);
  strokeWeight(15);
  point(-s / 2 - 15, -s / 2 - 15)
  point(-s / 2 - 15, s / 2 + 15)
  point(s / 2 + 15, -s / 2 - 15)
  point(s / 2 + 15, s / 2 + 15)

  strokeWeight(8);
  point(-s / 2 - 30, -s / 2 - 30)
  point(-s / 2 - 30, s / 2 + 30)
  point(s / 2 + 30, -s / 2 - 30)
  point(s / 2 + 30, s / 2 + 30)

  strokeWeight(3);
  point(-s / 2 - 45, -s / 2 - 45)
  point(-s / 2 - 45, s / 2 + 45)
  point(s / 2 + 45, -s / 2 - 45)
  point(s / 2 + 45, s / 2 + 45)
  pop();



  //spheres
  push();
  rotate(90)
  rotateY(millis() / 10);
  noStroke();

  translate(-50, -120); //right 2
  sphere(5);

  translate(-20, 50); //right1
  sphere(8);

  translate(20, 70); //center
  sphere(13);

  translate(-10, 70); //left 1
  sphere(8);

  translate(-2, 65); //left 2
  sphere(5);

  pop();
}