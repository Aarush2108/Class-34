class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.5,
            length:250
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
        this.pointB=pointB;
    }
    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}