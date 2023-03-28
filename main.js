var status ="";
var object_name = "";

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function Start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("object_name").value; 
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 500, 500);
}