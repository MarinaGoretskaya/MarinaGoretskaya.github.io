window.onscroll = function showHeader() {
  let headerBg = document.querySelector('.header');

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
      $('.mob-menu').removeClass('closed').addClass('opened');
    });
  });
  $('button.hamburger-closer').click(function (event) {
    event.preventDefault();
    $('.mob-menu').fadeOut(400, function () {
      $('.mob-menu').removeClass('opened').addClass('closed');
    });
  });
  $('.mob-menu').click(function (e) {
    let div = $('.mob-menu__wrap');

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.mob-menu').fadeOut(400, function () {
        $('.mob-menu').removeClass('opened').addClass('closed');
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const modal = document.getElementById('modal');
  let popup = document.getElementsByClassName('my-mfp');
  let btnClose = document.getElementsByClassName('mfp-close');
  let status = document.getElementById('modal-status');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch(form.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        status.classList.add('open', 'success');
        status.innerHTML = "<div class='message'>" + result.message + "</div>"; // alert(result.message);

        form.reset();
        form.classList.remove('_sending');
        setTimeout(function () {
          status.classList.remove('open', 'success');
          $.magnificPopup.close();
        }, 1200);
      } else {
        // alert("Ошибка");
        status.classList.add('open', 'error');
        status.innerHTML = "<div class='message'>Произошла ошибка</div>";
        form.classList.remove('_sending');
        form.reset();
        setTimeout(function () {
          status.classList.remove('open', 'error');
          $.magnificPopup.close();
        }, 1200);
      }
    } else {
      status.classList.add('open', 'warning');
      status.innerHTML = "<div class='message'>Заполните обязательные поля</div>"; // alert('Заполните обязательные поля');

      setTimeout(function () {
        status.classList.remove('open', 'warning');
      }, 1200);
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
    return !/^(\+?)\d{7,12}/.test(input.value);
  }
});
$('.popup-open').magnificPopup({
  type: 'inline',
  midClick: true,
  mainClass: 'my-mfp',
  closeBtnInside: true
}); // $(document).ready(function() {
//     $('.popup-open').click(function (event) {
//         event.preventDefault();
//         $('header.header').addClass('header-under-popup');
//     });
//
//     $('.mfp-close').click(function (event) {
//         event.preventDefault();
//         $('header.header').removeClass('header-under-popup');
//     });
//
// });
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
$('.rent-tabs__link:first').click();

function changeActiveBlock(e) {
  e.preventDefault();
  $('.rent-tabs__block').removeClass('block-active');
  $($('.rent-tabs__item.slick-current').children('.rent-tabs__link').attr('href')).addClass('block-active');
}

$('.rent-tabs__item').click(function (e) {
  changeActiveBlock(e); // e.preventDefault();
  // $('.rent-tabs__block').removeClass('block-active');
  // $($(this).children('.rent-tabs__link').attr('href')).addClass('block-active');
});
$('.rent-tabs').slick({
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  variableWidth: true,
  asNavFor: '.rent__slider',
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 3
    }
  }]
});
$('.rent__slider').slick({
  asNavFor: '.rent-tabs',
  infinite: true,
  initialSlide: 0,
  dots: false,
  arrows: true,
  prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
  nextArrow: '<div id="next" class="arrow arrow-next"></div>',
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }, {
    breakpoint: 360,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }]
});
$('.slider-item').click(function (e) {
  changeActiveBlock(e);
});
$('.rent__slider .arrow').click(function (e) {
  changeActiveBlock(e);
});
$('.rent__slider').on('afterChange', function (e) {
  changeActiveBlock(e);
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
  variableWidth: true,
  focusOnSelect: true,
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
      slidesToShow: 1,
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