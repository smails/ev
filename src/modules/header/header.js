import $ from 'jquery'

$(window).on('scroll load', () => {
  const head = document.querySelector('.menu-fix');
  if(window.pageYOffset > 150){
    head.classList.add('view');
  } else{
    head.classList.remove('view');
  }
})

$('.menu-fix__open-search').click(function () {
  $('.menu-fix__search-action').addClass('view');
  $('.menu-fix__middle').addClass('hidden');
})
$('.menu-fix__close').click(function () {
  $('.menu-fix__search-action').removeClass('view');
  $('.menu-fix__middle').removeClass('hidden');
})

$('.menu-fix__open-nav').click(function () {
  $('.menu-fix__hidden').slideToggle();
})

$('.header__field').keyup(function(){
  if(this.value == ''){
    $('.header__reset').fadeOut()
  } else {
    $('.header__reset').fadeIn()
  }
})

$('.header__reset').click(function () {
  $(this).fadeOut();
})

$('.menu-fix__field').keyup(function(){
  if(this.value == ''){
    $('.menu-fix__reset').fadeOut()
  } else {
    $('.menu-fix__reset').fadeIn()
  }
})

$('.menu-fix__reset').click(function () {
  $(this).fadeOut();
})

$('.search-cat__field').keyup(function(){
  if(this.value == ''){
    $('.search-cat__reset').fadeOut();
    $('.search-cat__result').slideUp();
    $('.search-cat').removeClass('noempty')
  } else {
    $('.search-cat__reset').fadeIn();
    $('.search-cat__result').slideDown();
    $('.search-cat').addClass('noempty')
  }
})

$('.search-cat__reset').click(function () {
  $(this).fadeOut();
  $('.search-cat__result').slideUp();
  $('.search-cat').removeClass('noempty')
})


$('.catalog-menu__item').mouseenter(function () {
  if (matchMedia('(pointer:fine)').matches) {
    $('.catalog-menu__close').addClass('open');
    $('.catalog-menu__box').hide();
    $(`[data-id="${this.dataset.target}"]`).fadeIn();
    $('.catalog-menu__big').fadeIn();
  }
})

$('.catalog-menu__close').click(function () {
  $('.catalog-menu').removeClass('open');
  setTimeout(() => {
    $('.catalog-menu').fadeOut();
    $('.catalog-menu__close').removeClass('open');
    $('.catalog-menu__box').hide();
    $('.catalog-menu__big').hide();
  }, 400);
})

$('.js-open-catalog').click(function () {
  $('.catalog-menu').fadeIn();
  setTimeout(() => {
    $('.catalog-menu').addClass('open');
  }, 100);
})


$('.catalog-links-box__more').click(function () {
  if($(this).hasClass('open')){
    $(this).removeClass('open').text('Показать еще');
    $(this).prev().find(".hidden").hide();
  } else{
    $(this).addClass('open').text('Свернуть');
    $(this).prev().find(".hidden").show();
  }
})