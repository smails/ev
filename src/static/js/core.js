import $ from 'jquery'

let isValid;
let check;
$('form').submit(function (e) {
  e.preventDefault();
  const $form = $(this);
  $form.find('.required').each((index, elem) => {
    if (elem.value === '') {
      if(elem.nextElementSibling == null){
        $(elem).parent().append(`<span class="error-field">Введите ${elem.getAttribute('placeholder').toLocaleLowerCase()}</span>`);
      }
    } else {
      isValid = true;
    }
  });
  if (!$form.find('.polit__hidden').prop('checked')) {
    // eslint-disable-next-line no-unused-expressions
    !$form.find('.polit__text').addClass('error');
    check = false;
  } else {
    $('.polit__text').removeClass('error');
    check = true;
  }
  if (isValid !== false && check !== false) {
    return false;
  }
});

$('.field__input').focus(function () {
  if(this.nextElementSibling != null){
    $(this).next().remove();
  }
})

$('.toogle-text').click(function(e){
  e.preventDefault();
  $(this).prev().slideToggle();
  if($(this).text().trim() == 'Читать далее....'){
    $(this).text('Свернуть')
  } else{
    $(this).text('Читать далее....')
  }
})