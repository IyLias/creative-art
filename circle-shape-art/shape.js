
// all class formats are defined here


// canvas for work
class Canvas{

    constructor(color,w,h){
        this.color = color;
        this.width = w;
        this.height = h;
        createCanvas(this.width,this.height,WEBGL);
    }


    drawBackground(){
        background(this.color);
    }

}



// this class do draws art in screen
class Artist{

    constructor(){



    }






}





// shape of 2D
class D2Shape{

    constructor(color,x,y,w,h){
        this.color = color;
        this.x = x; this.y = y;
        this.w = w; this.h = h;
    
    }


    setStroke(isStroke,strokeColor,myStrokeWeight){
        this.isStroke = isStroke;
        this.stroke = strokeColor;
        this.strokeWeight = myStrokeWeight;

    }

    setFill(fill){
        this.isFill = fill;
    }


    draw(){

        if(this.isStroke){
            stroke(this.stroke);
            strokeWeight(this.strokeWeight);
        }else{
            noStroke();
        }

        if(this.isFill)
            fill(this.color);
        else
            noFill();
        
    }

}


// shape of 3D 
class D3Shape{

    constructor(){



    }


    draw(){



    }



}



class MyEllipse extends D2Shape{

    constructor(color,x,y,w,h){
        super(color,x,y,w,h);
        
        this.color = color;
        this.x = x; this.y = y;
        this.w = w; this.h = h;
    }

    draw(){
        super.draw();
        ellipse(this.x,this.y,this.w,this.h);
    }
}


class MyRect extends D2Shape{

    constructor(color,x,y,w,h){
        super(color,x,y,w,h,fill);
        this.color = color;
        this.x = x; this.y = y;
        this.w = w; this.h = h;

    }

    draw(){
        super.draw();
        rect(this.x,this.y,this.w,this.h);
    }

}




