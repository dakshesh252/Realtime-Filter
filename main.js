function preload(){

}


function setup(){
    canvas = createCanvas(550,500);
    canvas.position(530,270);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,550,500);
circle_color = "";
rectangle_color ="";
}


function take_snapshot(){

}