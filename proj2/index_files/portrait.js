// A simple self portrait in HTML Canvas.
// Adapted from the Sierpinski gasket example by Professor Plantinga

// Initialize variables
var portrait = {
  beard_length:	0,}

$(document).ready(function () { portrait.init(); });

portrait.init = function () {
  portrait.canvas  = $('#canvas1')[0];
  portrait.cx = portrait.canvas.getContext('2d');	// get the drawing canvas

  // bind functions to events, button clicks
  $('#erasebutton').bind('click', portrait.erase);
  $('#drawbutton').bind('click', portrait.draw);
  $('#slider1').bind('change', portrait.slider);

  portrait.draw();
}

portrait.skin = function(){
  portrait.cx.fillStyle = 'rgba(255,224,189,1)';
}

portrait.hair = function(){
  portrait.cx.fillStyle = 'rgba(105,69,0,1)';
}

portrait.draw = function(ev) {
    // Clear the canvas
    portrait.erase();

    // Draw circles
    portrait.skin();
    portrait.circle(200, 175, 150);
    portrait.hair();
    portrait.circle(100, 100, 25);
    portrait.circle(140, 80, 50);
    portrait.circle(175, 75, 50);
    portrait.circle(200, 75, 50);
    portrait.circle(225, 75, 50);
    portrait.circle(260, 80, 50);
    portrait.circle(300, 100, 25);
    portrait.circle(200, 300, $('#slider1').val());

  }

// draw a filled circle
portrait.circle = function(x, y, radius) {
  portrait.cx.beginPath();
  portrait.cx.arc(x, y, radius, 0, 2*Math.PI, false);
  portrait.cx.fill();
}

// erase canvas and message box
portrait.erase = function(ev) {
  portrait.cx.clearRect(0,0,500,500);
    $('#messages').html("");
}

// update the message below the slider with its setting
portrait.slider = function(ev) {
  $('#pointcount').text($('#slider1').val());
}
