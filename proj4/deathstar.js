var deathstar = { }
//var sun, moon, stars, earth, venus, mercury;
var background, xwing
var intervalID, time=0, step=5;

$(document).ready(function () { deathstar.init(); });

deathstar.init = function () {
  deathstar.canvas  = $('#canvas1')[0];
  deathstar.cx = deathstar.canvas.getContext('2d');
  deathstar.cx.fillStyle = 'rgb(255,0,0)';

  deathstar.cx.setTransform(1,0,0,1,360,270);	// world frame is (-1,-1) to (1,1)

  // bind functions to events, button clicks
  $('#gobutton').bind('click', deathstar.go);
  $('#stopbutton').bind('click', deathstar.stop);
  $('#stepbutton').bind('click', deathstar.step);
  $('#slider1').bind('change', deathstar.slider);

  deathstar.loadImages();
  $('#messageWindow').prepend("Starting the deathstar trench simulation");
  stars.onload = function() { deathstar.animate(); }
}

deathstar.animate = function() {

  // update time according to how much time has elapsed
  step = parseInt($('#slider1').val());
  time += step;
  timefrac = time/10;
  $('#timecount').text(time);

  // initially in the sun's frame. Draw sun, stars
  //deathstar.cx.save();
  //deathstar.cx.drawImage(stars, -360, -270);
  //deathstar.cx.drawImage(sun, 0 - sun.width/2, 0 - sun.height/2);

  // moon
  deathstar.cx.save();				// moon around earth
  deathstar.cx.translate(56, 0);
  deathstar.cx.drawImage(moon, 0 - moon.width/2, 0 - moon.height/2);
  deathstar.cx.restore();

  deathstar.cx.restore();
}

// turn on animation: cause animate function to be called every 20ms
deathstar.go = function() {
  intervalID =  setInterval(deathstar.animate, 20);
}

deathstar.stop = function() {
  clearInterval(intervalID);
}

deathstar.step = function() {
  $('#messageWindow').prepend("...step " + step + "<br>");
  deathstar.animate();
}

deathstar.loadImages = function() {
  sun = new Image();     sun.src = "sun.png";
  moon = new Image();    moon.src = "moon.png";
  earth = new Image();   earth.src = "earth.png";
  mercury = new Image(); mercury.src = "mercury.png";
  venus = new Image();   venus.src = "venus.png";
  stars = new Image();   stars.src = "stars.jpg";
}

deathstar.slider = function(ev) {
  $('#pointcount').text($('#slider1').val());
}
