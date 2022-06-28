// art1 concept
// draws lots of ellipses/circles irregularly(position,size,shape,fill)


// variables declared

const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 700;

let myCircle,myRect,myRect2;
let myBackground;

let artist;
let myEllipseCollection;

// ---------------------------- main function -----------------------------------

function setup(){
    
    myBackground = new Canvas('#ffffee',SCREEN_WIDTH,SCREEN_HEIGHT);
    myBackground.drawBackground();

    artist = new Artist();
    
    myEllipseCollection = new MyEllipseCollection(10);


    myCircle = new MyEllipse('#F52F11',100,20,50,100);
    myCircle.setStroke(true,'#5500F9',4);
    myCircle.setFill(false);

   
    myRect2 = new MyRect('#111111',-150,30,100,50);
    myRect2.setStroke(true,'#111111',5);
    myRect2.setFill(false);

}

function draw(){

    
    myCircle.draw();
   
    myRect2.draw();
}

// -----------------------------------------------------------------------------




// class definition


// MyEllipse set for drawing lots of ellipses
class MyEllipseCollection{

    constructor(ellipseNum){
        this.myEllipses = [];        
        this.ellipseNum = ellipseNum;
        for(var i=0;i<this.ellipseNum;i++){
            let myEllipse = new MyEllipse();
            this.myEllipses.push(myEllipse);
        }

    }



    draw(){
        for(var i=0;i<this.myEllipses.length;i++)
            this.myEllipses[i].draw();
    }


}