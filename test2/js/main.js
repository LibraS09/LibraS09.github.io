$(document).ready(function(){
    $('.main-slider').slick({
      	centerMode: true,
  		centerPadding: '60px',
      	infinite: true,
 		slidesToShow: 4,
  		slidesToScroll: 1,
  		responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

$('.mob-menu').click(function () {
	$('.header__menu').slideToggle(500); 
});

$(window).on('resize load', function(){
    if ($(window).width() > 992) {
       $(".header__menu").removeAttr("style");
    }
});

});

   