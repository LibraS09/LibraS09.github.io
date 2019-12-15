$(function () {



  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '16px',
    mobileFirst: true,
    rows: 1,
    responsive: [{
        breakpoint: 767.89,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false,
          centerPadding: '0px',
          mobileFirst: true,
          rows: 2
        }
      },
      {
        breakpoint: 1279.89,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false,
          centerPadding: '0px',
          mobileFirst: true,
          rows: 2
        }
      }
    ]
  });

  $(window).on('resize', function () {

    var mql = window.matchMedia('(max-width: 767.98px)');
    if (mql.matches) {
      $('.slider').slick('unslick');
      $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '16px',
        mobileFirst: true,
        rows: 1,
      });
    }

    var mql = window.matchMedia('(min-width: 768px) and (max-width: 1279.98px)');
    if (mql.matches) {
      $('.slider').slick('unslick');
      $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        mobileFirst: true,
        rows: 2
      });
    }

    var mql = window.matchMedia('(min-width: 1280px)');
    if (mql.matches) {
      $('.slider').slick('unslick');
      $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: false,
        centerPadding: '0px',
        mobileFirst: true,
        rows: 2
      });
    }

  });


});