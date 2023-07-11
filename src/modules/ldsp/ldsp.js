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