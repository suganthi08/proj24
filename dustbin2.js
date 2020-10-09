class dustbin2
{
    constructor(x,y)
    {
     this.x= x;
     this.y=y;
     
     var position = {
         isStatic : true
     }

        this.left = Bodies.rectangle(this.x,this.y,10,100)
        this.bottom = Bodies.rectangle (this.x,this.y,100,10)
        this.right = Bodies.rectangle (this.x,this.y,10,100)

        World.add(world,this.left)
        World.add(world,this.bottom)
        World.add(world,this.right)
    }
}