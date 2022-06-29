
// all class formats are defined here


// canvas for work
class Canvas{

    constructor(color,w,h){
        this.color = color;
        this.width = w;
        this.height = h;
        createCanvas(this.width,this.height);
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


// MyEllipse set for drawing lots of ellipses
class MyEllipseCollection{

    constructor(ellipseNum){
        this.myEllipses = [];        
        this.ellipseNum = ellipseNum;
        for(var i=0;i<this.ellipseNum;i++){
            let myColor = this.generateColor();
            let [myX,myY,myW,myH] = this.generatePositionAndSize();
            console.log(typeof(myX),typeof(myY));
            let myEllipse = new MyEllipse(myColor,myX,myY,myW,myH);

            // need to set all properties
            // color, x,y,w,h
            // isStroke, stroke, strokeWeight, isFill
            // isStroke and isFill can't be both false
            let [isStroke,strokeColor,strokeWeight,isFill] = this.generateStrokeAndFill();
            myEllipse.setStroke(isStroke,strokeColor,strokeWeight);
            myEllipse.setFill(isFill);

            this.myEllipses.push(myEllipse);
        }

    }

    // generate random color
    generateColor(){
        const unit = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        const length = 6;
        let color = '#';

        for(var i=0;i<length;i++)
            color += unit[Math.floor(Math.random()*16)];

        return color;
    }

    // generate position and size
    generatePositionAndSize(){
        let x,y;
        x = Math.floor(Math.random()*SCREEN_WIDTH);
        y = Math.floor(Math.random()*SCREEN_HEIGHT);

        let w,h;
        const alpha = 0.1;
        const sizeSeed = 300;
        w = Math.ceil((Math.random()+alpha)*sizeSeed);
        h = Math.ceil((Math.random()+alpha)*sizeSeed);
        
        console.log(x,y,w,h);
        return [x,y,w,h];
    }

    // generate stroke and fill values
    generateStrokeAndFill(){
        const WEIGHTMAX = 10;
        const alpha = 0.1;

        let isStroke,strokeColor,strokeWeight,isFill;
        isStroke = (Math.floor(Math.random()*100))%2 ? true : false;
        if(isStroke === false){
            strokeColor = 0, strokeWeight = 0;
            isFill = true;
        }else{
            strokeColor = this.generateColor();
            strokeWeight = Math.floor((Math.random()+alpha)*WEIGHTMAX);
            isFill = (Math.floor(Math.random()*100))%2 ? true : false;
        }

        return [isStroke,strokeColor,strokeWeight,isFill];
    }



    draw(){
        for(var i=0;i<this.myEllipses.length;i++)
            this.myEllipses[i].draw();
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




