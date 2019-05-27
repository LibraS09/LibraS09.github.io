
var imgElem = document.querySelector('.section3-img');
var section3 = document.querySelector('.section3');
var section3Block = document.querySelector('.section3-block');
var section3Text = document.querySelector('.section3-text-block');

window.addEventListener("load", function(){
   // var imgElemWidth = imgElem.clientWidth;
   // imgElem.style.width = imgElemWidth + "px";

   section3Block.style.overflow = "hidden";
});

// rgb(221, 218, 244);
// rgb(67, 55, 149);

var section3H = section3.clientHeight;
var r = section3H / (221-67);
var g = section3H / (218-55);
var b = section3H / (244-149);

window.onscroll = function () {
  
   var section3Top = section3.getBoundingClientRect().top + pageYOffset;

   var section3Bottom = section3.getBoundingClientRect().bottom + pageYOffset;
   var h = imgElem.clientHeight;
  
   // var top = Math.round(section3.getBoundingClientRect().top * -1);
   var top = section3.getBoundingClientRect().top * -1;

console.log(section3.getBoundingClientRect().bottom );
console.log(document.documentElement.clientHeight);

   if ( window.pageYOffset > section3Top && window.pageYOffset < section3Bottom-h-150) {
      imgElem.style.transform = "rotateY(180deg) translateY("+top+"px)";
      section3Text.style.transform = "translateY("+top*-2+"px)";
   } 
   if (section3.getBoundingClientRect().bottom>document.documentElement.clientHeight) {
      section3Text.style.transform = "translateY("+0+"px)";
   }

   if (top > 0) {
      var bgcolor = "rgb(" + (221 - top / r) + "," + (218 - top / g) + "," + (244 - top / b) + ")";

      section3.style.backgroundColor = bgcolor;
   } else {
      section3.style.backgroundColor = "rgb(221, 218, 244)";
   }
};


