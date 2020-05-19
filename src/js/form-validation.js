$(document).ready(function() {
  var formValidate = function() {
    $('form').each(function() {
      $(this).on('submit', function() {
        $(this).validate({
          rules: {
            name: 'required',
            phone: 'required',
            email: 'required',
            textarea: 'required'
          },
          messages: {
            name: 'Enter correct name',
            phone: 'Enter correct phone number',
            email: 'Enter correct e-mail',
            textarea: 'Enter correct subject'
          },
          errorPlacement: function (error, element) {
            element.attr('placeholder', error[0].outerText);
          }
        });
        if ($(this).valid()) {
          var wrap = $(this)[0].closest('.form__send');
          if (wrap) {
            $(wrap).siblings('.form__accepted').show();
            $(wrap).hide();
          }
        }
        return false;
      })
    });
  };
  formValidate();

  //----- click Ok for return form ---------//
  $('.form__submit-button--ok').on('click', function(e) {
    e.preventDefault;
    $('.form__send').css('display', 'block');
    $('.form__accepted').css('display', 'none');
  });
});