$(function(){
    var 
    $modalOverlay = $(".modal-overlay"),
    $menu = $(".menu"),
    $caret = $(".caret"),
    $slider = $('.slider');
    $('.button-menu').on('click', function(){
        $menu.slideToggle(500);
        $caret.toggleClass("fa-caret-down fa-caret-up");
    });
    $('.pop-up').on('click', function(){
        $modalOverlay.css("display", "block");
        $slider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
        });
    });
   
    $('.close').on('click', function(){
        $modalOverlay.css("display", "none");
        $slider.slick('unslick');
    });
    $(window).on('click', function(event){  
        var t = event.target;
        if ($(t).hasClass("modal-overlay")) {
            $modalOverlay.css("display", "none"); 
            $slider.slick('unslick'); 
        }
    });
    
});