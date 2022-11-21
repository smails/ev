import $ from 'jquery'
import 'slick-carousel'

$('.banner').slick({
  centerMode: true,
  centerPadding: '240px',
  slidesToShow: 1,
  dots: true,
  speed: 700,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});