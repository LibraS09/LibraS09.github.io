$(document).ready(function() {
$('#fullpage').fullpage({
// scrollOverflow: true,

autoScrolling: true,
verticalCentered: false,
fitToSection: true,
paddingTop: '0px',
paddingBottom: '0px',
navigation: true,
navigationPosition: 'left',
navigationTooltips: ['first Slide', 'secondSlide', '3 Slide','4 Slide'],
afterRender: function(){

},
afterLoad: function(anchorLink, index){

	function beginAnime (section, anime1, no1,  anime2, no2) {
		$(section+"__p1").animate({opacity: 1}, 100, 'linear').removeClass(no1).addClass(anime1);
		$(section+"__p2").animate({opacity: 1}, 300, 'linear').removeClass(no2).addClass(anime2);
	};
	function endAnime (section, anime1, no1, anime2, no2) {
		$(section+"__p1").removeClass(anime1).addClass(no1).css({"opacity": 0});
		$(section+"__p2").removeClass(anime2).addClass(no2).css({"opacity": 0});
	};
	if (index == 1) {

		$(".section1__h1").animate({opacity: 1}, 100, 'linear').removeClass("no-anime50").addClass("anime03");
		beginAnime (".section1", "anime08", "no-anime70", "anime13", "no-anime70");
	} else {
		$(".section1__h1").removeClass("anime03").addClass("no-anime50").css({"opacity": 0});
		endAnime (".section1", "anime08", "no-anime70", "anime13", "no-anime70");

	};
	for (var i = 2; i <= 9; i++) {
		if (index == i) {
			beginAnime (".section"+i, "anime03", "no-anime50", "anime08", "no-anime50");
		} else {
			endAnime (".section"+i, "anime03", "no-anime50", "anime08", "no-anime50");
		}
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
// slide for 7 8------------------

$('.slick-slide-center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
	autoplay: true,
  autoplaySpeed: 2000,
	pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
// slide for 9------------------
$('.slick-slide-fade').slick({
  dots: true,
  infinite: true,
	arrows: false,
	pauseOnHover: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
// slide for 6------------------
$('.slick-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slick-slider-nav'
});
$('.slick-slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slick-slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
	arrows: true,
	centerPadding: '0px'
});

});
