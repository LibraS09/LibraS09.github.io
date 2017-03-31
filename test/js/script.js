$(function() {
   $(".form").validate({
    rules: {
      name: {
      required: true,
      minlength: 1,
      },
      email: {
      required: true,
      email: true,
      }
    },
    messages: {
      name: {
      required: "Please enter your name",
      },
      email: {
      required: "Please enter your email",
      email: "Please enter a valid email address"
      }
    }
  });

});
