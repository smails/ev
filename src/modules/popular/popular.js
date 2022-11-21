import $ from 'jquery'
import 'slick-carousel'

$('.popular-mini__list').slick({
  slidesToShow: 5,
  speed: 700,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
  ]
});