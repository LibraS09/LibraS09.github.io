
function timer() {
  var thisTime = new Date();
  var diff = thisTime - beginTime;
  var hour = (Math.floor(diff/1000/60/60)) + Number(hourFirst);
  var min = (Math.floor((diff-hour*60*60*1000)/1000/60)) + Number(minFirst);
  var sec = (Math.floor(((diff-hour*60*60*1000)-min*60*1000)/1000)) + Number(secFirst);
  var ms = (diff + Number(msFirst)) % 1000;

  if (String(sec).length < 2) {sec = '0' + sec};
  if (String(min).length < 2) {min = '0' + min};
  if (String(hour).length < 2) {hour = '0' + hour};
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("ms").innerHTML = ms;
  // console.log(hour+':'+min+':'+sec+':'+ms)
};
function handler1() {
  var b1Text = document.getElementById("b1").innerHTML;
  hourFirst = document.getElementById("hour").innerHTML;
  minFirst = document.getElementById("min").innerHTML;
  secFirst = document.getElementById("sec").innerHTML;
  msFirst = document.getElementById("ms").innerHTML;
  beginTime = new Date();
  if (b1Text == "Start") {
    s = setInterval(timer, 1);
    document.getElementById("b1").innerHTML = "Pause";
  };
  if (b1Text == "Pause") {
    clearInterval(s);
    document.getElementById("b1").innerHTML = "Start";
  };
};
function handler2() {
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "000";
};

var b1 = document.getElementById("b1");
b1.addEventListener("click", handler1);
var b2 = document.getElementById("b2");
b2.addEventListener("click", handler2);

var p = document.getElementsByClassName('point');
function point () {
  if (p[0].style.visibility == 'visible') {
  p[0].style.visibility = 'hidden';
  p[1].style.visibility = 'hidden';
  } else {
  p[0].style.visibility = 'visible';
  p[1].style.visibility = 'visible';
  };
};
setInterval(point, 1000);
