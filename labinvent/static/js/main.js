$(function () {
  let progPlus = 0;
  let progMinus = 60;
  let progFill = 0;
  setInterval(function () {
    ++progPlus;
    --progMinus;
    progFill = progFill + 1.666666666666667;
    $(".progress .progress-fill").css("width", progFill + "%");

    if (progPlus == 60) {
      progPlus = 0;
      progFill = 0;
      progMinus = 60;
    }

    progPlus.toString().length === 1 ? progPlus = '0' + progPlus : progPlus;
    progMinus.toString().length === 1 ? progMinus = '0' + progMinus : progMinus;
    $(".progress .progress-text .txt-left").html("Run 00:" + progPlus + "/01:00");
    $(".progress .progress-text .txt-right").html("-00:" + progMinus);
  }, 500);
});
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
