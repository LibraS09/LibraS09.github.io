$(document).ready(function(){
$("#content div").hide();
$("#tabs li:first").attr("id","current");
$("#content div:first").show();

$('#tabs a').click(function(e) {
  e.preventDefault();
  if ($(this).parent().attr("id") != "current"){
    $("#content div").hide();
    $("#tabs li").removeAttr("id");
    $(this).parent().attr("id","current");
    $($(this).attr('name')).fadeIn(1000);
  }
  });
});
