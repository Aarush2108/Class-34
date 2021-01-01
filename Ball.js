class Ball{
    constructor(x,y){
        var options={
            density: 1, 
            frictionAir:0.005
        }
        this.body=Bodies.circle(x,y,40,options);
        this.radius=40;
        World.add(world,this.body);
       
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        stroke("white");
        fill("red");
        circle(0,0,this.radius);
        pop();
    }
}