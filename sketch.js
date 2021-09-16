let ground
let lander
var lander_img
var bg_img

function preload(){
    lander_img=loadImage("normal.png")
    bg_img=loadImage("bg.png")
}
function setup(){
    createCanvas(1000,700)
}
function draw(){
    background(51)
    image(bg_img,0,0)
    drawSprites();
}