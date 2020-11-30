class Plinko {
    constructor (x,y,r) {
        var options = {
            isStatic:true
        }
  
        this.body = Bodies.circle(x,y,r,options);
        //this.width=width;
        //this.height=height;
        this.r=r;
        //this.image=loadImage("163-1631819_hexagon-clipart-yellow-hexagon-illustration-png-download (1).png");
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("white");
      stroke("white");
      ellipse(pos.x, pos.y, this.r);
      translate(this.body.position.x, this.body.position.y, this.r);
      //imageMode(CENTER);
      //image(polyImage,0,0,40,40);
      pop();
    }
  }