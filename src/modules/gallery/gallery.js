import $ from 'jquery'

$(".gallery__more").click(function () {
  if($(this).hasClass('open')){
    $(this).removeClass('open').text('Показать еще');
  } else{
    $(this).addClass('open').text('Свернуть');
  }
  $('.gallery__list:last').slideToggle();
})