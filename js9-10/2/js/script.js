$(document).ready(function(){
  $(".openout").hover(function() {
  // console.log ($(this).children(".sub-menu"));

  $(this).children(".sub-menu").slideDown(300);
  $(this).children(".sub-menu").animate({backgroundColor: '#EA9E67'},300);
  }, function() {
  $(this).children(".sub-menu").slideUp(300);
  $(this).children(".sub-menu").animate({backgroundColor: '#E64B5A'},300);
  });



});
