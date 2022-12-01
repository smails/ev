import $ from 'jquery'
import 'slick-carousel'


$('.popular-mini__list').slick({
  slidesToShow: 5,
  speed: 700,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
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
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        arrows: false
      }
    },
  ]
});

$('.popular-cat__list').slick({
  slidesToShow: 4,
  speed: 700,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
  ]
});