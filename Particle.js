class Particle {
    constructor (x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.4
        }
  
        this.body = Bodies.circle(x,y,r,options);
        this.color=color(random(0, 255), random(0, 255), random(0,255));
        //this.width=width;
        //this.height=height;
        this.r=r;
        //this.image=loadImage("163-1631819_hexagon-clipart-yellow-hexagon-illustration-png-download (1).png");
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle=this.body.angle;
      push();
      ellipseMode(RADIUS);
      noStroke();
      fill(this.color);
      //fill("white");
      //stroke("white");
      ellipse(/*240, 0, this.r, this.r*/pos.x,pos.y, this.r);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //imageMode(CENTER);
      //image(polyImage,0,0,40,40);
      pop();
    }
  }