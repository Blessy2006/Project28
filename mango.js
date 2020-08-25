class Mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
        restitution:0,
          friction: 1,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world, this.body);
      this.mango = loadImage("sprites/mango.png");
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.mango,pos.x, pos.y, this.r, this.r);
    }
  };