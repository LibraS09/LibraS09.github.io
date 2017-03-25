$(function(){

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    // gutter: 10,
    gutter: '.gutter-sizer',
    percentPosition: true
  });

  $(".search").click(function(){
    var val = $(".search-input").val();
    search(val);
  });

  var val = "nature";
  search(val);

  function search(v) {
  var url= "https://pixabay.com/api/?key=4919792-453f009144b7806cb72243b60&q="+v+"&image_type=photo";
  $.getJSON(url, function (data){
    var results = data.hits;
    console.log (data);
    for (var i=0; i<results.length; i++) {
      var r = results[i];
      var s = "#img"+i;
      $(s).css({'background': 'url('+r.webformatURL+')', 'background-size':'cover'});
      $(s).html(r.tags);
    }
  });
  };
  //
  // function search(v) {
  // var url= "http://api.pixplorer.co.uk/image?word="+v+"&amount=7";
  // $.getJSON(url, function (data){
  //   var results = data.images;
  //   console.log (data);
  //   for (var i=0; i<results.length; i++) {
  //     var r = results[i];
  //     var s = "#img"+i;
  //     $(s).css({'background': 'url('+r.imageurl+')', 'background-size':'cover'});
  //     $(s).html(r.word);
  //   }
  // });
  // };

});
