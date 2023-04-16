import $ from 'jquery'
import 'slick-carousel'


$('.related__list').slick({
  slidesToShow: 5,
  speed: 300,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        variableWidth: true,
      }
    },
  ]
});

$('.related__open').click(function () {
  if ($(this).hasClass('open')) {
    $(this).text('Развернуть').removeClass('open');
    $(this).prev().fadeIn();
    $(this).parent().next().slideUp();
  } else {
    $(this).text('Свернуть').addClass('open');
    $(this).prev().fadeOut();
    $(this).parent().next().slideDown();
    $(this).parent().next().find(".related__list").slick('reinit');
  }
})

$('.toggl__hidden').change(function () {
  if (!$(this).attr('checked')){
    $(this).attr("checked", true);
    $('[name="addr_del"]').removeAttr('disabled')
  } else{
    $(this).attr("checked", false);
    $('[name="addr_del"]').attr('disabled', 'disabled')
  }
})