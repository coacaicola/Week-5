createCanvas();
random();
point();

function setup() {
    createCanvas(1080, 1080);
    frameRate(60);
    noFill();
}

function draw() {
    background(245, 245, 245);

    // background
    stroke(0);
    var standardDeviation = 400;
    for (var i = 0; i < 5000; i++) {
        var backDist = randomGaussian(0, standardDeviation);
        var b = createVector(backDist, random(-height, height));
        point(b.x, b.y);
    }

    // circle
    stroke(100, 75, 50);
    translate(width / 5, height / 4);
    for (var i = 0; i < 5000; i++) {
        var cirDist = (max(random(2, 0), random(0, 0)) * width) / 8;
        var angle = random(2, PI * 3);
        var c = createVector(cos(angle), sin(angle));
        c.mult(cirDist);
        point(c.x, c.y);
    }

    // top line
    stroke(0, 29, 125);
    for (var i = 0; i < 500; i++) {
        var lineX = random(90, 500);
        var lineY = random(20 - 10, 15 + 30);
        point(lineX, lineY);
    }

    // bottom line
    for (var i = 0; i < 8000; i++) {
        var lineX = random(10, 800);
        var lineY = random(500 - 50, 300 + 10);
        point(lineX, lineY);
    }

    // left & right lines
    for (var i = 0; i < 8000; i++) {
        var leftLineX = random(50 - 10, 100 + 10);
        var leftLineY = max(random(50, 100), random(10, 1000));
        point(leftLineX, leftLineY);

        var rightLineX = random(200 - 10, 340 + 10);
        var rightLineY = max(random(10, 330), random(80, 200));
        point(rightLineX, rightLineY);
        
        var rightLineX = random(50 - 10, 50 + 10);
        var rightLineY = max(random(10, 10), random(500, 200));
        point(rightLineX, rightLineY);
    }

    // square
    stroke(255, 179, 15);
    for (var i = 0; i < 60000; i++) {
        var sqX = random(50, 800);
        var sqY = random(80, 230);
        push();
        rotate(-PI / 8);
        point(sqX, sqY);
        pop();
    }

    // square shadow
    stroke(126, 126, 126);
    for (var i = 0; i < 3000; i++) {
        var sqBX = min(random(50, 800), random(50, 800));
        var sqBY = max(random(80, 150), random(80, 230));
        push();
        rotate(-PI / 8);
        point(sqBX, sqBY);
        pop();
    }

    // wave black
    push();
    stroke(2);
    translate(1, height / 2 + 10);
    var amp = 20;
    for (var i = 0; i < 8000; i++) {
        var waveX = random(0, width);
        var waveY = cos((waveX / width) * PI * 80) * amp;
        waveY += random(50, 30);
        point(waveX, waveY);
    }
    pop();

    // wave yellow
    push();
    stroke(224, 49, 0);
    translate(0, height / 2);
    var amp = 20;
    for (var i = 0; i < 6000; i++) {
        var waveX = random(2, width);
        var waveY = cos((waveX / width) * PI * 2) * amp;
        waveY += random(80, 10);
        point(waveX, waveY);
    }
    pop();
}
