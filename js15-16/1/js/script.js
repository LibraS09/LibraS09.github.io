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
url= "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q="+v+"&rsz=8&callback=?";
$.getJSON(url, function (json){
    console.log (v);
    console.log (json);
  var results = json.responseData.results;
    console.log (results);
  var ol = document.createElement("ol");
  for (var i=0; i<results.length; i++){
    var r = results[i];
    var li = document.createElement("li");
    li.innerHTML = "<a href="+r.url+"title="+r.url+"target=_blank>"+r.title+"</a> <h3>"+r.url+"</h3> <p>"+r.content+"</p>";
    ol.appendChild(li);
    console.log (r);
  };
  $(".result").html(ol);
});
};

});
