import $ from 'jquery'
import 'slick-carousel'


$('.gallery-slider').slick({
  slidesToShow: 3,
  speed: 300,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

$(".flow-work__slider-main").slick({
  asNavFor: ".flow-work__slider-nav",
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
      }
    },
  ]
});
$(".flow-work__slider-nav").slick({
  asNavFor: ".flow-work__slider-main",
  arrows: false,
});
