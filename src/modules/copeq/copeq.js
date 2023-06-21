import $ from 'jquery'

$('.copeq-list__open').click(function () {
  if ($(this).hasClass('open')) {
    $(this).removeClass('open').text('Развернуть');
    $(this).prev().find('.copeq-list__item').each((index, item) => {
      if(index > 3){
        $(item).hide();
      }
    })
  } else {
    $(this).addClass('open').text('Свернуть');
    $(this).prev().find('.copeq-list__item').each((index, item) => {
      if (index > 3) {
        $(item).show();
      }
    })
  }
})

