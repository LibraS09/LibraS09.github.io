$(function() {
  $(".niceCheck").click(function(){
    if ($(this).children("input").prop('checked')) {
      $(this).removeClass("niceChecked");
      $(this).children("input").prop({checked: false});
      // console.log($(this).children("input").prop('checked'));
    } else {
      $(this).addClass("niceChecked");
      $(this).children("input").prop({checked: true});
      // console.log($(this).children("input").prop('checked'));
    };
  });
  
  $(".niceCheckLabel").click(function(){
    if ($(this).next().children("input").prop('checked')) {
      $(this).removeClass("niceChecked");
      $(this).next().children("input").prop({checked: false});

    } else {
      $(this).addClass("niceChecked");
      $(this).next().children("input").prop({checked: true});

    };
  });

  $(".niceCheck input").each(function(indx){
    if ($(this).prop('disabled')){
      $(this).parent().addClass("niceCheckDisabled");
      if ($(this).prop('checked')){
        $(this).parent(".niceCheckDisabled").css("background-position", "0 -17px");
      };
    };
  });
});
