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

$('.toogle-more').click(function(e){
  e.preventDefault();
  $(this).prev().slideToggle();
  if($(this).text().trim() == 'Показать еще'){
    $(this).text('Свернуть')
  } else{
    $(this).text('Показать еще')
  }
})


$(document).on('click', '.number__btn_plus', function () {
  const val = parseInt($(this).prev().val());
  if (val < 999) {
    $(this).prev().val(val + 1);
  }
});
$(document).on('click', '.number__btn_minus', function () {
  const val = parseInt($(this).next().val());
  if (val > 1) {
    $(this).next().val(val - 1);
  }
});
$(document).on('keyup', '.number__field', function () {
  this.value = this.value.replace(/[^0-9]/, '');
  const val = parseInt($(this).val());
  if (val > 999) {
    $(this).val(999);
  }
});
