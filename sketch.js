const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;
var engine, world;
var snowflake;
function preload(){
 bg=loadImage("snow3.jpg"); 
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snowflake=new Snow();
}
function draw() {
  background(bg);  
  Engine.update(engine);
snowflake.display();
  
}