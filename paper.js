class Paper{
    constructor(x,y){
        var options = {
            'isStatic': false,
            'friction': 1,
            'density': 1.4,
            'restitution': 0.6
        }
        this.paper = Bodies.circle(x,y,20,options);
        World.add(world,this.paper);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("ball.png");
    }
    display(){
        
        push();
        imageMode(CENTER);
        
        fill("white");
        
        stroke("skyblue");
        strokeWeight(3);
        image(this.image,this.paper.position.x,this.paper.position.y,this.width,this.height);
        pop();
        
    }
}