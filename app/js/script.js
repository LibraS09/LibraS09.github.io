$(document).ready(function() {

	function beginAnime (section, anime1, no1,  anime2, no2) {
		$(section+"__p1").animate({opacity: 1}, 100, 'linear').removeClass(no1).addClass(anime1);
		$(section+"__p2").animate({opacity: 1}, 300, 'linear').removeClass(no2).addClass(anime2);
	}
	function endAnime (section, anime1, no1, anime2, no2) {
		$(section+"__p1").removeClass(anime1).addClass(no1).css({"opacity": 0});
		$(section+"__p2").removeClass(anime2).addClass(no2).css({"opacity": 0});
	}

if ($(window).width() >= 992) {
$('#fullpage').fullpage({
// scrollOverflow: true,
autoScrolling: true,
verticalCentered: false,
fitToSection: true,
paddingTop: '0px',
paddingBottom: '0px',
navigation: true,
navigationPosition: 'left',
navigationTooltips: ['1 Slide', '1 Slide', '3 Slide','4 Slide'],
afterRender: function(){
$('#fp-nav').css({"opacity": 0});
},
afterLoad: function(anchorLink, index){
	if (index == 1) {
		$('#fp-nav').animate({opacity: 0}, 500, 'linear');
	} else {
		$('#fp-nav').animate({opacity: 1}, 1000, 'linear');
	}
	for (var i = 1; i <= 11; i++) {
		if (index == i) {
			beginAnime (".section"+i, "anime03", "no-anime50", "anime08", "no-anime50");
		} else {
			endAnime (".section"+i, "anime03", "no-anime50", "anime08", "no-anime50");
		}
	}
	if (index == 12) {
		$('.header-fixed').slideUp(500);
	} else {
		$('.header-fixed').slideDown(500);
	}
	if (index == 4) {
		// slide for 4------------------
		$('.slick-slide-fade4').slick('slickGoTo', 0, true);
		$('.slick-slide-fade4').slick('slickPlay', true);
		// $('.slick-slide-fade4').slick('slickSetOption','autoplay', true, true);
	}
	 if (( index == 3) || ( index == 5)) {
		 $('.slick-slide-fade4').slick('slickGoTo', 0, true);
		 $('.slick-slide-fade4').slick('slickPause', true);
		//  $('.slick-slide-fade4').slick('slickSetOption','autoplay', false, true);
	}
}
});

$('#element').plate({
  	// inverse animation
  	inverse: false,
	  // transformation perspective in pixels
	  perspective: 700,
	  // maximum rotation in degrees
	  maxRotation: 3,
	  // duration in milliseconds
  	animationDuration: 200
  	});

}
$(document).on('click', '#moveDown', function(){
$.fn.fullpage.moveSectionDown();
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
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20%',
        slidesToShow: 1
      }
    }
  ]
});
// slide for 4------------------
$('.slick-slide-fade4').slick({
dots: true,
infinite: true,
arrows: false,
pauseOnHover: false,
speed: 500,
fade: true,
cssEase: 'linear',
autoplay: true,
autoplaySpeed: 5000
});
 $('.slick-slide-fade4').slick('slickPause', true);
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
$('.slick-slider-nav').on('beforeChange', function(event, slick, direction){
  $('.slick-slide-li3').animate({opacity: 0.7}, 250)
	.animate({opacity: 1}, 250);
});


});
