
$(function () {

//validate

	// jQuery.validator.setDefaults({
	// 	debug: true,
	// 	success: "valid"
	// });
	$( "#form-contacts" ).validate({
       errorElement: "em",
  		rules: {
    		name: {
          required: true,
      		minlength: 2
    		},
    		phone: {
          required: true,
          minlength: 2
        },
        message: {
          required: true,
          minlength: 2
        }	
  		},
      errorPlacement: function(error,element) {
          if (element.attr("name") == "name" ) {
            error.appendTo('#for-name');
         }
         if (element.attr("name") == "phone" ) {
            error.appendTo('#for-phone');
         }
         if (element.attr("name") == "message" ) {
            error.appendTo('#for-message');
         }
      }
	});

// mask

  $('#phone').mask("+38 (000) 000-00-00", {placeholder: "+38 (___) ___-__-__"});

// mail

//  $("#form-contacts").submit(function() { //устанавливаем событие отправки для формы с id=form
//            var form_data = $(this).serialize(); //собераем все данные из формы
//            $.ajax({
//            type: "POST", //Метод отправки
//            url: "send.php", //путь до php фаила отправителя
//            data: form_data,
//            success: function() {
//                   //код в этом блоке выполняется при успешной отправке сообщения
//                   alert("Ваше сообщение отпрвлено!");
//                    }
//            });
//    });

});

