import $ from 'jquery'
import 'slick-carousel'

const workSlider = $('.work__slider');

workSlider.slick({
  slidesToShow: 1,
  speed: 300,
  useTransform: true,
});

$('.work__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.work__box').hide();
  $('.work__box').eq($(this).index()).fadeIn();
  workSlider.slick('refresh');
})
