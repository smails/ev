import $ from 'jquery'
import 'select2'

$('.catalog-main-list__mobile-menu-list select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
  dropdownParent: $('select').parent(),
})


window.addEventListener('load', function(){
  if(window.location.hash != ''){
    document.querySelector(".category-list__list_eight").style.display = 'none';
    document.querySelector(`[data-attr="${window.location.hash}"]`).style.display = 'grid';
  }
})