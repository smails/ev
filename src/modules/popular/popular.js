import $ from 'jquery'
import 'slick-carousel'


$('.popular-mini__list').slick({
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
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});

$('.popular-cat__list').slick({
  slidesToShow: 4,
  speed: 300,
  useTransform: true,
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
        slidesToShow: 2
      }
    },
  ]
});