import $ from 'jquery'
import 'select2'

$('.goods__left select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
  dropdownParent: $('.goods__left'),
})

$('.goods__nav-item').mouseenter(function() {
  $(this).addClass('active').siblings().removeClass('active');
  $('.goods__content').hide();
  $('.goods__content').eq($(this).index()).fadeIn();
})

$('.goods__nav-item').click(function () {
  if ($('.goods__nav-item:hover').length == 0) {
    $(this).addClass('active').siblings().removeClass('active');
    $('.goods__content').hide();
    $('.goods__content').eq($(this).index()).fadeIn();
  }
})