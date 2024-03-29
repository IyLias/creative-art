const SCREEN_HEIGHT = 750;
const SCREEN_WIDTH = 750;

const STEP = 20; 

const VARIANCE_FACTOR = 100;
const TONES_1 = [[238, 66, 102], [31, 64, 104], [242, 228, 181]];
const TONES_2 = [[37, 106, 220], [31, 64, 104], [169, 251, 215]];
const MONOCHROME = [[0,32,63]];



function setup(){
    createCanvas(SCREEN_HEIGHT,SCREEN_WIDTH);
    background(102,100,204);
    stroke(109, 50, 215);
    strokeWeight(2);
    noLoop();
}


function draw(){
    const lines = [];
    for(let i=STEP;i<SCREEN_HEIGHT-STEP;i+=STEP){
        let line = [];
        for(let j=STEP;j<=SCREEN_HEIGHT-STEP;j+=STEP){
            let distanceToCenter = Math.abs(j-SCREEN_HEIGHT/2);
            let variance = Math.max(SCREEN_HEIGHT/2 - VARIANCE_FACTOR-distanceToCenter,0);
            let random = Math.random() * variance/2 * (-1);
            let point = {x:j, y:i+random};
            line.push(point);
        }
        lines.push(line);
    }

    for(let i=5;i<lines.length;i++){
        beginShape();
        for(let j=0;j<lines[i].length;j+=2){
            curveVertex(lines[i][j].x,lines[i][j].y);
            //let random_index = Math.floor(Math.random() * MONOCHROME.length);
            //const [r,g,b] = MONOCHROME[random_index];
            //fill(r,g,b);
            curveVertex(lines[i][j+1].x,lines[i][j+1].y);
        }
        endShape();
    }
       
}
