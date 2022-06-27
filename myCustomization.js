// variables declared
let myCircle;
let myBackground;




function setup(){
    
    myBackground = new Canvas('#ffffee',1000,700);
    myBackground.drawBackground();

    myCircle = new MyEllipse('#F52F11',100,20,50,100,'#ffccff',5,true);
    myRect = new MyRect('#33A6FF',-100,50,80,100,'#000000',1,false);
}

function draw(){

    
    myCircle.draw();
    sphere(40);
    myRect.draw();
}






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



// shape of 2D
class D2Shape{

    constructor(color,x,y,w,h,myStroke,myStrokeWeight,fill){
        this.color = color;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        this.stroke = myStroke;
        this.strokeWeight = myStrokeWeight;
        this.isFill = fill;
    }

    draw(){
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);

        if(this.isFill)
            fill(this.color);
        else
            noFill();
    }

}


// shape of 3D 
class D3Shape{








}



class MyEllipse extends D2Shape{

    constructor(color,x,y,w,h,myStroke,myStrokeWeight,fill){
        super(color,x,y,w,h,fill);
        this.color = color;
        this.x = x; this.y = y;
        this.w = w; this.h = h;

        this.stroke = myStroke;
        this.strokeWeight = myStrokeWeight;
        this.fill = fill;
    }

    draw(){
        super.draw();
        ellipse(this.x,this.y,this.w,this.h);
    }
}


class MyRect extends D2Shape{

    constructor(color,x,y,w,h,myStroke,myStrokeWeight,fill){
        super(color,x,y,w,h,fill);
        this.color = color;
        this.x = x; this.y = y;
        this.w = w; this.h = h;

        this.stroke = myStroke;
        this.strokeWeight = myStrokeWeight;
        this.fill = fill;
    }

    draw(){
        super.draw();
        rect(this.x,this.y,this.w,this.h);
    }

}




