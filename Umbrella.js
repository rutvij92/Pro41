class Umbrella {
constructor(x,y){
 var options={
isStatic:true
  }
this.body=Bodies.circle(x,y,200,options);
World.add(world,this.body);
    this.image=loadImage(" proc41images/walking_1.png");

}
display(){

    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,200,200);
   
  }
}
