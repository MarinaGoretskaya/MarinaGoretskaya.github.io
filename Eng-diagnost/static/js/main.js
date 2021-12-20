"use strict";

window.onscroll = function showHeader() {
  var headerBg = document.querySelector('.header .b-section__bg');

  if (window.pageYOffset > 70) {
    headerBg.classList.add('header-scroll');
  } else {
    headerBg.classList.remove('header-scroll');
  }
};
"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(500);
    } else {
      $('.go-top').fadeOut(300);
    }
  });
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
});
"use strict";

$('.services__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
"use strict";

$('.steps__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
"use strict";

$('.team__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: true,
  prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
  nextArrow: '<div id="next" class="arrow arrow-next"></div>',
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});