filterX = 0
filterY = 0

function preload()
{
    filter_image = loadImage('https://i.postimg.cc/LXfXLkSM/handlebar-moustache-cartoon-clip-art-cute-mustache-cliparts-removebg-preview.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(filter_image, filterX-50, filterY+7, 100, 30)
}

function take_snapshot()
{
    save('myFilterImage.png')
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        filterX = results[0].pose.nose.x;
        filterY = results[0].pose.nose.y;                                                                          
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}