/*
 * @name Hello World Video
 * @description <p>Load a video and create a DOM element for it to play inside</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var space;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop();
  space.showControls(true);
  space.volume(0);
  space.position(width/2 - space.width/2, height/2 - space.height/2);
}
function draw(){
  
  background(0);
}