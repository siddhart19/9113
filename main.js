function setup(){
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video =createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,230,150,220,200);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(100,100,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(90,67,80);

    fill(255,0,0);
    stroke(255,0,0);
    rect(130,1100,465,400);

    fill(0,0,0);
    stroke(255,0,0);
      square(600,330,200,200);

    fill(255,0,0);
    stroke(255,0,0);
    triangle(150,30,80);

    fill(255,0,0);
    stroke(255,0,0);
    triangle(152,110,80);
}

  function take_snapshot(){
    save('myFilterImage.png');
}
