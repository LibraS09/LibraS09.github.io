$(document).ready(function() {

$('#fullpage').fullpage({
navigation: true,
navigationPosition: 'left',
navigationTooltips: ['first Slide', 'secondSlide',
'3 Slide','4 Slide'],
afterLoad: function(anchorLink, index){
	if (index == 1) {
		$(".section1__h1").slideDown().animate({opacity: 1}, 10, 'linear');
		$(".section1__p").slideDown().animate({ opacity: 1}, 30, 'linear');
		$(".section1__h1").slideDown().removeClass("no-anime50");
		$(".section1__h1").slideDown().addClass("anime03");
		$(".section1__p1").slideDown().removeClass("no-anime70");
		$(".section1__p1").slideDown().addClass("anime08");
		$(".section1__p2").slideDown().removeClass("no-anime70");
		$(".section1__p2").slideDown().addClass("anime13");
		};
	if (index == 2) {
		$(".section1__h1").slideDown().removeClass("anime03");
		$(".section1__h1").slideDown().addClass("no-anime50");
		$(".section1__p1").slideDown().removeClass("anime08");
		$(".section1__p1").slideDown().addClass("no-anime70");
		$(".section1__p2").slideDown().removeClass("anime13");
		$(".section1__p2").slideDown().addClass("no-anime70");
		$(".section1__h1").css({"opacity": 0});
		$(".section1__p").css({"opacity": 0});

		$(".section2__p1").slideDown().animate({opacity: 1}, 10, 'linear');
		$(".section2__p2").slideDown().animate({opacity: 1}, 30, 'linear');
		$(".section2__p1").slideDown().removeClass("no-anime50");
		$(".section2__p1").slideDown().addClass("anime03");
		$(".section2__p2").slideDown().removeClass("no-anime50");
		$(".section2__p2").slideDown().addClass("anime08");
		}
	if ((index == 1) || (index == 3)) {
		$(".section2__p1").slideDown().removeClass("anime03");
		$(".section2__p1").slideDown().addClass("no-anime50");
		$(".section2__p2").slideDown().removeClass("anime08");
		$(".section2__p2").slideDown().addClass("no-anime50");
		$(".section2__p").css({"opacity": 0});
		}
	}
});
$(document).on('click', '#moveDown', function(){
$.fn.fullpage.moveSectionDown();
});
$('#element').plate({
  	// inverse animation
  	inverse: false,
	  // transformation perspective in pixels
	  perspective: 500,
	  // maximum rotation in degrees
	  maxRotation: 5,
	  // duration in milliseconds
  	animationDuration: 200
  	});
});
