$(document).ready(function(){
  $(".form-text label").hide();

  $(".form-text input").hover(function(){
    $(this).next().delay(300).fadeIn(500);
    }, function(){
    $(this).next().hide();
    $(this).next().clearQueue();
    $(this).next().stop();
  });
  $(".form-text input").focus(function(){
    $(this).next().delay(300).fadeIn(500);
  });
  $(".form-text input").focusout(function(){
    $(this).next().hide();
  });
  $(".form-text p").click(function(){
    $(".form-text label").hide();
    // console.log("#"+$(this).html());
    $("#"+$(this).html()).delay(300).fadeIn(500);
  });
  $("#button1").click(function(){
    $(".form-text label").fadeIn(500);
  });
});
