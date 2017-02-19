$(function() {

$("#form :button").click(function(){
  var val = $("#form :input").val();
  search(val);
});

$("#form :input").keypress(function(e) {
  if(e.keyCode == 13) {
    e.preventDefault();
    var val = $(this).val();
    search(val);
  };
});

function search(v) {
var url= "https://www.googleapis.com/customsearch/v1?key=AIzaSyCxU7lDRAjTC3jybx4vjrIFvWPdaDUUW40&cx=017576662512468239146:omuauf_lfve&q="+v+"&callback=?";
$.getJSON(url, function (data){

  var results = data.items;

  var ol = document.createElement("ol");
  for (var i=0; i<results.length; i++){
    var r = results[i];
    var li = document.createElement("li");
    li.innerHTML = "<a href="+r.link+"title="+r.link+"target=_blank>"+r.title+"</a> <h3>"+r.link+"</h3> <p>"+r.snippet+"</p>";
    ol.appendChild(li);
    console.log (r);
  };
  $(".result").html(ol);
});
};

});
