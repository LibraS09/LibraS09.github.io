
var hour = document.getElementById("hour").innerHTML;
var min = document.getElementById("min").innerHTML;
var sec = document.getElementById("sec").innerHTML;
var ms = document.getElementById("ms").innerHTML;

function timer() {
if (ms>=999) {
    ms = 0;
    sec++;
  }
else if (sec==59) {
  sec = 0;
  min++;
}
else if (min==59) {
  min = 0;
  hour++;
}
else if (hour==23) {
  sec = 0;
  min = 0;
  hour = 0;
}
else {
  ms = (4 +  Number(ms));
};
// console.log(String(sec).length);
if (String(sec).length < 2) {sec = '0' + sec};
if (String(min).length < 2) {min = '0' + min};
if (String(hour).length < 2) {hour = '0' + hour};
document.getElementById("hour").innerHTML = hour;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;
document.getElementById("ms").innerHTML = ms;
// console.log(hour+':'+min+':'+sec+ms)
};

function handler1() {
  var b1Text = document.getElementById("b1").innerHTML;
  if (b1Text == "Start") {
    s = setInterval(timer, 1);
    document.getElementById("b1").innerHTML = "Pause";
  }
  if (b1Text == "Pause") {
    clearInterval(s);
    document.getElementById("b1").innerHTML = "Start";
  }
};
function handler2() {
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "0000";
  hour = 0;
  min = 0;
  sec = 0;
  ms = 0;
}

var b1 = document.getElementById("b1");
b1.addEventListener("click", handler1);
var b2 = document.getElementById("b2");
b2.addEventListener("click", handler2);

var p = document.getElementsByClassName('point');
function point () {
  if (p[0].style.visibility == 'visible') {
  p[0].style.visibility = 'hidden';
  document.getElementsByClassName('point')[0].innerHTML = " ";
  document.getElementsByClassName('point')[1].innerHTML = " ";
  } else {
  p[0].style.visibility = 'visible';
  document.getElementsByClassName('point')[0].innerHTML = ":";
  document.getElementsByClassName('point')[1].innerHTML = ":";
  }
}
setInterval(point, 1000);
