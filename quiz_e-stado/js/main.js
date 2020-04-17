$(document).ready(function () {
	let body = $(document);

	let countCow;
	let countMilk;
	let position;
	let contact;
	let contactValue;

	let resultData;

	let section1 = body.find('#section-rect-1');
	let section2 = body.find('#section-rect-2');
	let section3 = body.find('#section-rect-3');
	let section4 = body.find('#section-rect-4');

	$('#section-rect-1').find('button').click(displaySection1);
	$('#section-rect-2').find('button').click(displaySection2);
	$('#section-rect-3').find('button').click(displaySection3);
	$('#section-rect-4').find('input[type="radio"]').click(displayInput);
	$('#section-rect-4').find('button').click(submitData);


	let allInp = section4.find('.input-txt__wrapper');
	let inpTel = section4.find('#input-tel');
	let inpEmail = body.find('#input-email');
	let inpViber = body.find('#input-viber');
	let inpTelegram = body.find('#input-telegram');
	let inpWhatsapp = body.find('#input-whatsapp');

	body.find('#inp-phone, #inp-viber, #inp-telegram, #inp-whatsapp').mask("+375 (99) 999-99-99");
	body.find('#inp-email').inputmask("email");

	function displaySection1() {
		section1.addClass('display-none');
		section2.removeClass('display-none');
		countCow = section1.find('input').val();
		if (!countCow) {
			countCow = 45;
		}
	}

	function displaySection2() {
		section2.addClass('display-none');
		section3.removeClass('display-none');


		countMilk = section2.find('input').val();
		if (!countMilk) {
			countMilk = 12;
		}
	}

	function displaySection3() {
		section3.addClass('display-none');
		section4.removeClass('display-none');

		position = section3.find('input:checked').val();
	}

	function displayInput() {
		contact = section4.find('input:checked').val();

		if (!contact) {
			contact = 'Телефон';
		}

		switch (contact) {
			case 'Телефон':
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
			case 'e-mail':
				allInp.addClass('display-none');
				inpEmail.removeClass('display-none');
				break;
			case 'viber':
				allInp.addClass('display-none');
				inpViber.removeClass('display-none');
				break;
			case 'telegram':
				allInp.addClass('display-none');
				inpTelegram.removeClass('display-none');
				break;
			case 'whatsapp':
				allInp.addClass('display-none');
				inpWhatsapp.removeClass('display-none');
				break;
			default:
				allInp.addClass('display-none');
				inpTel.removeClass('display-none');
				break;
		}
	}

	function submitData() {
		if (!contact) {
			contact = 'Телефон';
		}
		checkContactValue(contact);

		if (!contactValue || (contactValue === 'Вы не ввели данные')) {
			contactValue = 'Вы не ввели данные';
			alert(contactValue);
			return;
		}

		resultData = 'Количество дойных коров: ' + countCow + '. Вы доите ' + countMilk + ' л молока в сутки. Вы – ' + position + '. Ваш ' + contact + ': ' + contactValue + '.';
		section4.html('div').html(resultData);

		allInp.addClass('display-none');
		inpTel.removeClass('display-none');

		sendForm('ajax_form', 'send.php', resultData);

		open("https://www.figma.com/file/NgF3FzxtgvbiZqmprLURlS/e-stado-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD?node-id=0%3A1");
	}

	function checkContactValue(contact) {
		switch (contact) {
			case 'Телефон':
				contactValue = inpTel.find('#inp-phone').val();
				break;
			case 'e-mail':
				contactValue = inpEmail.find('#inp-email').val();
				break;
			case 'viber':
				contactValue = inpViber.find('#inp-viber').val();
				break;
			case 'telegram':
				contactValue = inpTelegram.find('#inp-telegram').val();
				break;
			case 'whatsapp':
				contactValue = inpWhatsapp.find('#inp-whatsapp').val();
				break;
			default:
				contactValue = 'Вы не ввели данные';
				break;
		}
	}

	function sendForm(ajax_form, url, resultData) {
		// let result;
		$.ajax({
			url: url,
			type: 'POST',
			dataType: "html",
			data: $("#" + ajax_form).serialize() + resultData,
			success: function (response) {
				// result = $.parseJSON(response);
				console.log('Данные отправлены.');
			},
			error: function () {
				console.log('Ошибка. Данные не отправлены.');
			}
		});
	}
});

