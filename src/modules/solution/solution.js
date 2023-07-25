import $ from 'jquery'
import 'slick-carousel'

$('.solution__slider').slick({
  slidesToShow: 5,
  speed: 300,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.solution__slider-el').slick({
  slidesToShow: 5,
  speed: 300,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        variableWidth: true
      }
    },
  ]
});