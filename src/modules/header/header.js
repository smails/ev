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