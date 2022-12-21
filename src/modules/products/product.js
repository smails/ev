import $ from 'jquery'
import 'select2'
import 'slick-carousel'

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

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


$('.catalog-nav__more').click((elem) => {
  if(elem.target.previousElementSibling.children.length > 5 && elem.target.textContent.trim() == 'Показать все'){
    elem.target.previousElementSibling.style.maxHeight = elem.target.previousElementSibling.scrollHeight + 'px';
    elem.target.textContent = 'Свернуть';
  } else {
    elem.target.previousElementSibling.style.maxHeight = '145px';
    elem.target.textContent = 'Показать все'
  }
})


$('.product-main__slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.product-main__slider-thumb'
});
$('.product-main__slider-thumb').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.product-main__slider-main',
  arrows: true,
  focusOnSelect: true,
});

$('.select-size select').select2({
  minimumResultsForSearch: Infinity,
  width: 'style',
  selectOnClose: true,
  dropdownParent: $('select').parent(),
})

$('.additionally__btn').click(function () {
  $(this).toggleClass('active')
})