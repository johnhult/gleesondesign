$('document').ready(function() {
	setTimeout(function() {
		$('.half-two-wrapper').addClass('fadeback');
	}, 500)

	$(window).scroll(function() {
		var scrollNr = $(this).scrollTop();
		var imageSwitch = $('.image-fixed-bg');
		switch (true) {
			case (scrollNr < 350) :
				console.log(scrollNr);
				imageSwitch.removeClass('show-image-article')
				imageSwitch.eq(0).addClass('show-image-article');
				break;
			case (scrollNr > 350 && scrollNr < 950) :
				console.log(scrollNr);
				imageSwitch.removeClass('show-image-article')
				imageSwitch.eq(1).addClass('show-image-article');
				break;
			case (scrollNr > 950 && scrollNr < 1650) :
				console.log(scrollNr);
				imageSwitch.removeClass('show-image-article')
				imageSwitch.eq(2).addClass('show-image-article');
				break;
			case (scrollNr > 1650) :
				console.log(scrollNr);
				imageSwitch.removeClass('show-image-article')
				imageSwitch.eq(3).addClass('show-image-article');
				break;

		}
	});
});