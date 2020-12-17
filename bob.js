class Bobs{
    constructor(x,y){
        var ballOption={
            isStatic:false,
        }
        this.body=Bodies.circle(x,y,40,ballOption)
   World.add(world,this.body)
    
     } 
 
 display(){
       ellipseMode(CENTER)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,40,40)
 }
 
 }