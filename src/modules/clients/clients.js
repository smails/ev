import $ from 'jquery'

$(".clients__more").click(function () {
  if($(this).hasClass('open')){
    $(this).removeClass('open').text('Показать еще');
  } else{
    $(this).addClass('open').text('Свернуть');
  }
  $('.clients__list:last').slideToggle();
})