import $ from 'jquery'
import 'select2'
import 'slick-carousel'


$('.portfolio-nav select').each((index, item) => {
  $(item).select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    selectOnClose: true,
    dropdownParent: $(item).parent(),
  })
})

$('.porfolio-big-slider').slick({
  centerMode: true,
  centerPadding: '150px',
  slidesToShow: 1,
  speed: 300,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        centerPadding: '50px',
      }
    },
  ]
})

window.addEventListener("load", function () {
  if (window.innerWidth < 1024) {
    $('.porfolio-big-slider').slick("unslick");
  }
});

$('.vis__slider').slick({
  centerMode: true,
  slidesToShow: 1,
  speed: 300,
  fade: true,
  useTransform: true,
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
})