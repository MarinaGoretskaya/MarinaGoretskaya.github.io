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