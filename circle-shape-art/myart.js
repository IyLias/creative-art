// art1 concept
// draws lots of ellipses/circles irregularly(position,size,shape,fill)


// variables declared

const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 700;

let myCircle,myRect,myRect2;
let myBackground;

let myEllipseCollection;


// ---------------------------- main function -----------------------------------

function setup(){
    
    myBackground = new Canvas('#ffffee',SCREEN_WIDTH,SCREEN_HEIGHT);
    myBackground.drawBackground();

    myEllipseCollection = new MyEllipseCollection(30);

}

function draw(){

    myEllipseCollection.draw();
    
}

// -----------------------------------------------------------------------------

