import $ from 'jquery'
import 'slick-carousel'

$('.banner').slick({
  centerMode: true,
  centerPadding: '240px',
  slidesToShow: 1,
  dots: true,
  speed: 300,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        centerPadding: '180px',
      }
    },
    {
      breakpoint: 1400,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1300,
      settings: {
        centerPadding: '110px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 1023,
      settings: {
        centerPadding: '20px',
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '0',
        arrows: false,
      }
    },
  ]
});