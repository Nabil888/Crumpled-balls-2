class Box{
    constructor(x,y,width,height,angle){
        var options = {
            'isStatic': true,
            'friction': 0.6,
            'restitution': 0.2
        }
        this.box = Bodies.rectangle(x,y,width,height,options);
        Matter.Body.setAngle(this.box,angle);
        World.add(world,this.box);
        
        this.width = width;
        this.height = height;
        
    }
    display(){
        push();
        var pos = this.box.position;
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(this.box.angle);
        
        fill("yellow");
        
        stroke("yellow");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}