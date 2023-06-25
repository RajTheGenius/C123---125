
leftWristX = '';
rightWristX = '';
diffrence = '';


function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(600, 200);

    video = createCapture(VIDEO);
    video.size(400, 300);
    
    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPose);

    
}

function modelLoaded(){

    console.log("Model loaded succesfully");

}

function gotPose(result) {
    
    if (result.length > 0) {
        console.log(result);
        
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
    }

}

function draw() {
    background('#f2f7ff');
    textSize(diffrence);
    fill('#256b6a');
    text('Raj', 100, 150);
    
}