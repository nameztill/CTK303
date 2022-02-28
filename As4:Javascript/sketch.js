function setup() {
  let cnv = createCanvas(960, 540);  background(144, 238, 244);
  cnv.id('canvas2');
  nostroke();
  fill(200,0,0);
  rect(10, 10, 55, 50);
  fill('rgba(0, 0, 200, 0.5)');
  rect(30, 30, 55, 50);
}

let snowflakes = [] //aray to hold snowflake objects

function setup () {
  let cnv = createCanvas(960, 600);
  cnv.id('canvas3');
  cnv.parent('movecanvas');
  fill(240);
  noStroke();
}

function draw() {
  background('brown');
  let t = frameCount / 60; //update time

  //create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake objects
  }

  //loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(; // draw snowflake
  }
}

//snowflake class

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posy = random(-50, 0),
  this.initialangle = random(0, 2 * PI) ;
  this.size = random(2, 5);

// radius of snowflake spiral
// chosen so the snowflakes are uniformly spread out in area

this.radius = sqrt(random(pow(width / 2, 2)));

this.update = function(time) {
  // x position follows a circle
  let W = 0.6; // angular speed
  let angle = w * time + this.initialangle;
  this.posX = width / 2 + this.radius * sin(angle) ;

// different size snowflakes fall at slightly different y speeds
this.posY += pow(this.size, 0.5) ;

// delete snowflake if past end of screen
  if (this.posy > height) {
    let index = snowflakes. index0f (this);
    snowflakes.splice(index, 1);
  }
};

this.display = function () {
  ellipse(this.posX, this.posY, this.site);
  };
}
