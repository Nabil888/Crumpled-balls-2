class Ground{
    constructor(width,height){
        var options = {
            'isStatic': true,
            'friction': 1
        }
        this.ground = Bodies.rectangle(400,680,width,height,options);
        World.add(world,this.ground);
        this.width = width;
        this.height = height;
    }

    display(){

        rectMode(CENTER);
        fill("blue");
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}