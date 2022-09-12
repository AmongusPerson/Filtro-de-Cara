noseX = 1;
noseY = 1;

function preload() {
    cara = loadImage('cara.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initilized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y-60; 
    }
}

function draw() {
    image(video,0,0,300,300);
    image(cara,noseX,noseY,110,110);
}

function take_snapshot() {
    save('foto.png')
}