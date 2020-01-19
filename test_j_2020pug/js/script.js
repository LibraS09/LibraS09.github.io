$(function(){
    $(".style-scrollbar").mCustomScrollbar({
        scrollInertia: 300
    });

    $('.button').on('click', function(){
        $('.overlay').fadeIn(500);
        $('.popup').animate({ 
            right: '0px' 
        }, 500); 
    });
    $('.popup-arrow').on('click', function(){
        $('.overlay').fadeOut(500);
        $('.popup').animate({ 
            right: '-470px' 
        }, 500); 
    });

    $('.quantity__selected').on('click', function(){
        $(this).closest('.quantity').find('.list').stop().slideToggle(500);
    });

    $('.list__item').on('click', function(){
        let x = $(this).text();
        $(this).closest('.quantity').find('.quantity__number').text(x);
    });

    $('.list').mouseout(function(e){ 
        if (e.relatedTarget.closest('.list')) {
           return;
        } else {
            $(this).closest('.list').slideUp(500); 
        }      
      });

  });
  