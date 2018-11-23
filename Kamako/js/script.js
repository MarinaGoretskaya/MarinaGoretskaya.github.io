$(document).ready(function() { //всё происходит пoсле зaгрузки стрaницы



  $('a.menu-button').click( function(event){
    event.preventDefault();
    $('.mobile_menu').fadeIn(400, function(){
      $('.mobile_menu')
      .css('display', 'block')
    });
  });


jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".mobile_menu"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide(); // скрываем его
    }
  });
});


jQuery(function($) {
    var $navMenu = $('.menu__wrapper');    
    var body = $('html, body');
    
    $(window).scroll(function(){
    
      if($(window).scrollTop() > 130){
        $navMenu.addClass('fixed');
      }
      else if ($(window).scrollTop() < 130){
        $navMenu.removeClass('fixed');
      }     
    });
});

$('.owl-carousel').owlCarousel({
    items:1,
    margin:0,
    autoplay:true,
    autoplayTimeout:7500,
    loop: true,
});


});