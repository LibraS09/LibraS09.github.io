(function($) {

  $.fn.SliderPlugin = function(options){
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    // var pixelsOffset = 125;
    // var currentLeftValue = 0;
    var settings = $.extend( {
      pixelsOffset: 125,
      currentLeftValue: 0
    }, options);

    // var elementsCount = elementsList.find('li').length;
    var elementsCount = elementsList.find('li').size();

    var minimumOffset = - ((elementsCount - 4) * settings.pixelsOffset);
    var maximumOffset = 0;
    leftUIEl.click(function() {
      if (settings.currentLeftValue != maximumOffset) {
        settings.currentLeftValue += settings.pixelsOffset;
        elementsList.animate({ left : settings.currentLeftValue + "px"}, 500);
      }
    });

    rightUIEl.click(function() {
      if (settings.currentLeftValue != minimumOffset) {
        settings.currentLeftValue -= settings.pixelsOffset;
        elementsList.animate({ left : settings.currentLeftValue + "px"}, 500);
      }
    });

  return this;
  };
})(jQuery);
