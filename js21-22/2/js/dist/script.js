"use strict";

$(function () {

  var array = {
    "form1": ["Вопрос №1", { "k": 1, "v": "вариант ответа №1_1" }, { "k": 1, "v": "вариант ответа №1_2" }, { "k": 0, "v": "вариант ответа №1_3" }],
    "form2": ["Вопрос №2", { "k": 1, "v": "вариант ответа №2_1" }, { "k": 0, "v": "вариант ответа №2_2" }, { "k": 0, "v": "вариант ответа №2_3" }],
    "form3": ["Вопрос №3", { "k": 1, "v": "вариант ответа №3_1" }, { "k": 0, "v": "вариант ответа №3_2" }, { "k": 0, "v": "вариант ответа №3_3" }]
  };

  localStorage.setItem("lS", JSON.stringify(array));
  try {
    var obj = JSON.parse(localStorage.getItem("lS"));
  } catch (e) {
    alert(" ошибка" + " : " + e.name);
  }
  // console.log( obj );
  var html = $('#test-program').html();
  var content = tmpl(html, { data: obj });
  $('.box').append(content);

  $('.divButton :button').click(function () {
    var sum = 0;
    var counter = 0;
    for (var key in obj) {
      var inputIndex = $("." + key + " " + "input");
      // console.log(inputIndex);
      var r = 0;
      for (var i = 1; i < obj[key].length; i++) {
        // console.log(inputIndex.eq(i-1).prop("checked"));
        if (inputIndex.eq(i - 1).prop("checked") == obj[key][i].k) {
          r++;
        };
      };
      counter++;
      if (r == obj[key].length - 1) {
        sum++;
      };
    };
    modal(sum, counter);
  });

  $(".divModal :button").click(function () {
    $(".divModal").fadeOut();
    $(".box :checkbox").prop({ "disabled": false, "checked": false });
    $(".divButton :button").prop("disabled", false);
  });

  function modal(pr1, pr2) {
    var wrapWidth = $(".wrapper").width();
    $(".divModal").css('left', wrapWidth / 2 - $(".divModal").width() / 2);
    $(".divModal").fadeIn();
    $(".message").html("результат теста:  " + pr1 + "  из  " + pr2);
    $(".box :checkbox").prop("disabled", true);
    $(".divButton :button").prop("disabled", true);
  };
});
