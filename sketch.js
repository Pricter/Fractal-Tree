var angle;
var slider;
// var tk;

function setup() {
    createCanvas(600, 600)
    angle = PI / 4;
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(51);
    angle = slider.value();
    // tk = slider.value();
    stroke(255);
    translate(300, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 6) {
        push();
        // strokeWeight(tk);
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        // strokeWeight(tk);
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
