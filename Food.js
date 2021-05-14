class Food{
    constructor(){
        this.foodStock=0;
        this.image=loadImage("Milk.png");
        this.lastFed;
    }

    updateFoodStock(foodStock){
        this.foodStock=foodStock
    }

    getFedTime(){
        this.lastFed=lastFed
    }

    deductFood(){
        if(this.foodStock>0){
          this.foodStock=this.foodStock-1
        }
    }

    getFoodStock(){
        return this.foodStock;
    }
    

    display(){
        var x=80,y=60;
        imageMode(CENTER)
       // image(this.image,200,220,70,70)

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=60
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30;
            }
        }
    }

    bedroom(){
        background(bedRoomImg,550,500)
        dog.changeImage("sleeping",sleepingImg)
    }

    garden(){
        background(gardenImg,550,500)
        dog.changeImage("running",runningImg)
    }

    washroom(){
        background(washRoomImg,550,500)
    }
    
}
