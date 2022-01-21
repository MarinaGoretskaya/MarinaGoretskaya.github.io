window.onscroll = function showHeader() {
  let headerBg = document.querySelector('.header .b-sec__bg');

  if (window.pageYOffset > 70) {
    headerBg.classList.add('header-scroll');
  } else {
    headerBg.classList.remove('header-scroll');
  }
};
$(document).ready(function () {
  $('button.menu-burger').click(function (event) {
    event.preventDefault();
    $('.mob-menu').fadeIn(400, function () {
      $('.mob-menu') // .css('display', 'block')
      .removeClass('closed').addClass('opened');
    });
  });
  $('button.hamburger-closer').click(function (event) {
    event.preventDefault();
    $('.mob-menu').fadeOut(400, function () {
      $('.mob-menu') // .css('display', 'block')
      .removeClass('opened').addClass('closed');
    });
  }); // jQuery(function($){
  //     $(document).mouseup(function (e) {
  //         let div = $('.mob-menu');
  //         if (!div.is(e.target)
  //             && div.has(e.target).length === 0) {
  //             div.hide();
  //         }
  //     });
  // });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert("Ошибка");
        form.classList.remove('_sending');
      }
    } else {
      alert('Заполните обязательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_tel')) {
        if (telTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function telTest(input) {
    return !/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(input.value);
  }
});
$('.popup-open').magnificPopup({
  type: 'inline',
  midClick: true // other options

});
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
$('.video-block__link').magnificPopup({
  type: 'iframe',
  iframe: {
    markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: 'v=',
        src: 'https://www.youtube.com/embed/xBsbgDEoB1k'
      }
    },
    srcAction: 'iframe_src'
  }
});
$('.rent-tabs__item').click(function (e) {
  e.preventDefault();
  $('.rent-tabs__item').removeClass('item-active');
  $('.rent-tabs__block').removeClass('block-active');
  $(this).addClass('item-active');
  $($(this).children('.rent-tabs__link').attr('href')).addClass('block-active');
});
$('.rent-tabs__link:first').click();
$('.rent__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: true,
  prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
  nextArrow: '<div id="next" class="arrow arrow-next"></div>',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      arrows: false,
      centerMode: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      arrows: false,
      centerMode: false
    }
  }, {
    breakpoint: 360,
    settings: {
      slidesToShow: 1,
      arrows: false,
      centerMode: false
    }
  }]
});
$('.catalog__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: true,
  prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
  nextArrow: '<div id="next" class="arrow arrow-next"></div>',
  slidesToShow: 6,
  slidesToScroll: 1,
  rows: 1,
  responsive: [{
    breakpoint: 1441,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      arrows: false
    }
  }, {
    breakpoint: 360,
    settings: {
      slidesToShow: 2,
      arrows: false
    }
  }]
}); // $('.slider-item').slick('slickNext');
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
$('.tizers__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: false,
  slidesPerRow: 3,
  // slidesToShow: 3,
  slidesToScroll: 1,
  rows: 2,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesPerRow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesPerRow: 3
    }
  }, {
    breakpoint: 360,
    settings: {
      slidesPerRow: 1
    }
  }]
});
$('.reviews__slider').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: true,
  prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
  nextArrow: '<div id="next" class="arrow arrow-next"></div>',
  slidesToShow: 1,
  slidesToScroll: 1
});