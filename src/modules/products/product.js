import $ from 'jquery'
import 'select2'
import noUiSlider from 'nouislider';
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
    elem.target.previousElementSibling.classList.add('open');
    elem.target.textContent = 'Свернуть';
  } else {
    elem.target.previousElementSibling.classList.remove('open');
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

$('.addoption__btn input').change(function(){
  if ($(this).is(":checked")) {
    $(this).parent().addClass('active')
  }
  else {
    $(this).parent().removeClass('active')
  }
});


var slider = document.getElementById('price');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});