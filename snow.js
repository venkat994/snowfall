class Snow{
    constructor(){
        var options={
density:1
        }
        this.body=Bodies.rectangle(200,10,10,10,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        pos.x=Math.round(random(0,400));
rect(pos.x,pos.y,10,10);

    }
}