class Drops{
    constructor(x,y){
        var options={
            friction : 0.01,
            restitution : 0.1
        }
        this.rain=Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.rain);
    }
    update(){
        if (this.body.position.y > height){
            Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,650)});
        }
    }
    display(){
        noStroke();
        fill(0,0,250);
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}