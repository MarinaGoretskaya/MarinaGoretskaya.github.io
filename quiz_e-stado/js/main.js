$(document).ready ( function(){
	let body = $(document);

	let countCow;
	let countMilk;
	let position;
	let contact;

	let section1 = body.find('#section-rect-1');
	let section2 = body.find('#section-rect-2');
	let section3 = body.find('#section-rect-3');
	let section4 = body.find('#section-rect-4');

	$('#section-rect-1').find('input').keyup(displaySection1);
	$('#section-rect-2').find('input').keyup(displaySection2);
	$('#section-rect-3').find('input').click(displaySection3);
	$('#section-rect-4').find('input').click(displaySection4);

	let allInp = section4.find('.input-txt__wrapper');
	let inpTel = section4.find('#input-tel');
	let inpEmail = body.find('#input-email');
	let inpViber = body.find('#input-viber');
	let inpTelegram = body.find('#input-telegram');
	let inpWhatsapp = body.find('#input-whatsapp');

	let btnSubmit = section4.find("button[type='submit']");
	console.log(btnSubmit);


	// $('input').on('blur', function() {
	// 	$(this).val(function( i, val ) {
	// 		return val.toUpperCase();
	// 	});
	// });

	function displaySection1() {
		section1.addClass('display-none');
		section2.removeClass('display-none');
		countCow = section1.find('input').val();
		console.log(countCow);
	}

	function displaySection2() {
		section2.addClass('display-none');
		section3.removeClass('display-none');

		countMilk = section2.find('input').val();
		console.log(countMilk);
	}
	function displaySection3() {
		section3.addClass('display-none');
		section4.removeClass('display-none');

		position = section3.find('input:checked').val();
		console.log(position);
	}
	function displaySection4() {
		contact = section4.find('input:checked').val();
		console.log(contact);

		if(!contact) {
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

		btnSubmit.click(submitData);

	}

	function submitData() {
		console.log('Данные отправлены');
		btnSubmit.addClass('display-none');

		section4.html('div').html('Количество дойных коров: ' + countCow + '. Вы доите ' + countMilk + ' л молока в сутки. Вы ' + position + '.');

		// section4.addClass('display-none');
		// section1.removeClass('display-none');
	}

});

