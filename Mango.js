class Mango{
    constructor(x, y, radius){
      var options = {
        isStatic : true,
        restuition : 0,
        friction : 1,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("mango.png");

    }
    display(){
        push();      
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius);
        pop();
    }
    
   
}

