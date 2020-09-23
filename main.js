function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(480,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}
function model_loaded(){
    console.log("Posenet has initialized you can take photo");
}
function gotPoses(results){
      if(results.length>0){
          console.log(results);
          console.log("nose x="+ results[0].pose.nose.x);
          console.log("nose y="+results[0].pose.nose.y);
      }
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('your_mustached_photo.png');
}