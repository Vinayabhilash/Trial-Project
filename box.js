class box{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            density: 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
        World.add(world , this.body);
    }
    display(){
    var pos = this.body.position;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
    }
}