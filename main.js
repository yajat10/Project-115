function setup(){
    canvas=createCanvas(370,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide()
    
    poses=ml5.poseNet(video,modelLOADED)
    poses.on("pose",gotposes)
}
function take_snapshot(){
    save("Image Saved")
}
function draw(){
    image(video,0,0,370,300);
}
function modelLOADED(){
console.log("pose net is working!");
}
function take_snapshot(){
save("Snapshot taken!!")
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    console.log("X position= "+result[0].pose.nose.x);
    console.log("X position= "+result[0].pose.nose.y);
}
}