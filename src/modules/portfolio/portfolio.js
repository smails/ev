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
  cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
})