import $ from 'jquery'
import 'slick-carousel'
import 'select2'


$('.gallery-work-nav select').each((index, item) => {
  $(item).select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    selectOnClose: true,
    dropdownParent: $(item).parent(),
  })
})

$(".gallery-work__slider-main").slick({
  asNavFor: ".gallery-work__slider-nav",
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
$(".gallery-work__slider-nav").slick({
  asNavFor: ".gallery-work__slider-main",
  arrows: false,
});
