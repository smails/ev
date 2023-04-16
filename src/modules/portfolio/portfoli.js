import $ from 'jquery'
import 'select2'

$('.portfolio-nav select').each((index, item) => {
  $(item).select2({
    minimumResultsForSearch: Infinity,
    width: 'style',
    selectOnClose: true,
    dropdownParent: $(item).parent(),
  })
})