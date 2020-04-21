$(document).ready(function () {
	let body = $(document);
	let allNavItems = body.find('.nav-item');
	let allSections = body.find('section');

	$('.nav-item').click(navigate);

	function navigate() {
		allNavItems.removeClass('active');
		$(this).addClass('active');
		displaySection($(this));
	}

	function displaySection(navItemActive) {
		allSections.addClass('display-none');
		if (navItemActive.hasClass('all')) {
			$('.container.All').removeClass('display-none');
		} else if (navItemActive.hasClass('bonfesto')) {
			$('.container.Bonfesto').removeClass('display-none');
		} else if (navItemActive.hasClass('villmonte')) {
			$('.container.Villmonte').removeClass('display-none');
		} else if (navItemActive.hasClass('cooking')) {
			$('.container.Cooking').removeClass('display-none');
		} else {
			$('.container.all').removeClass('display-none');
		}
	}

});

