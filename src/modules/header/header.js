import $ from 'jquery'

$(window).on('scroll load', () => {
  const head = document.querySelector('.menu-fix');
  if(window.pageYOffset > 150){
    head.classList.add('view');
  } else{
    head.classList.remove('view');
  }
})

$('.fix-search__open').click(function () {
  $('.fix-search__box').addClass('view');
  $('.menu-fix__middle').addClass('hidden');
})
$('.fix-search__close').click(function () {
  $('.fix-search__box').removeClass('view');
  $('.menu-fix__middle').removeClass('hidden');
  $('.fix-search__result, .fix-search__reset').hide();
  $('.fix-search').removeClass('noempty');
  $('.fix-search__field').val(null)
})

$('.menu-fix__open-nav').click(function () {
  $('.menu-fix__hidden').slideToggle();
})

$('.fix-search__field').keyup(function(){
  if(this.value == ''){
    $('.fix-search__reset').fadeOut()
    $('.fix-search__result').slideUp()
    $('.fix-search').removeClass('noempty')
  } else {
    $('.fix-search__reset').fadeIn()
    $('.fix-search__result').slideDown()
    $('.fix-search').addClass('noempty')
  }
})

$('.fix-search__reset').click(function () {
  $(this).fadeOut();
  $('.fix-search').removeClass('noempty');
  $('.fix-search__result').slideUp()
})

$('.header__field').keyup(function(){
  if(this.value == ''){
    $('.header__reset').fadeOut();
  } else {
    $('.header__reset').fadeIn()
  }
})

$('.header__reset').click(function () {
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

$(".header-mobile__slide").click(function () {
  $(this).parent().next().addClass("open")
});

$(".header-mobile__move").click(function () {
  $(this).toggleClass('open').parent().next().slideToggle();
});


$('.catalog-menu__item').mouseenter(function () {
  $(".catalog-menu__close").addClass("open");
  $(".catalog-menu__box").hide();
  $(`[data-id="${this.dataset.target}"]`).fadeIn();
  $(".catalog-menu__big").fadeIn();
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

$('.catalog-main-list__open-cat').click(function () {
  $('.catalog-nav').slideToggle();
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

$(".js-open-menu-mobile").click(function(){
  $(this).toggleClass('open');
  $('body').toggleClass('hidden')
  $(".header-mobile__hidden").fadeToggle();
  setTimeout(() => {
    $(".header-mobile__hidden").toggleClass("open");
  }, 300);
});

$(".header-mobile__back-link").click(function () {
  $(".header-mobile__submenu").removeClass('open');
});