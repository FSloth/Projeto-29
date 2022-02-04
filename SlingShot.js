class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.polygon1 = loadImage("polygon.png")
        
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){

        //image(this.polygon1,200,20)
        push();
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(10);
            stroke(48,22,8)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
   pop(); 
}
    
}