$('document').ready(function() {

	// Open menu
	$('.hamburger-wrapper').on('click', function () {
		$('.all-content').toggleClass('menu-open');
	});

	// If menu is open and clicked we close menu
	$('.furniture-main').on('click', function(e) {
		e.stopPropagation();
		console.log('FURNITUUUUREMAIN');
	});
	$('.main-content').on('click', function(e) {
		if($('.all-content').hasClass('menu-open')) {
			e.preventDefault();
			e.stopPropagation();
			$('.all-content').removeClass('menu-open');
		};
	});

	// Close menu on navigation in menu
	$('.remove-menu').on('click', function(){
		$('.all-content').removeClass('menu-open');
	});

	$(document).keyup(function(e) {
		// esc key
		if ((e.keyCode == 27) && $('.all-content').hasClass('menu-open')) {
			$('.all-content').removeClass('menu-open');
		}
	});


	$('#main-content').html(frontPage);
	toSvg();
	new Workspace();
	Backbone.history.start();


	$('.main-content').scroll(function() {
		var scrollNr = $(this).scrollTop();
		var h = ($(window).height()/2);

		if (activePage == 'frn') {
			switch (true) {
				case (scrollNr < (headerOffset.frn[1] - h)) :
					$('.image-content').removeClass('shown-img');
					$('.art1-image-content').addClass('shown-img');
					currentArtImgClass.frn = furnArtImg.art1;
					switchHover();
					break;
				case (scrollNr > (headerOffset.frn[1] - h) && scrollNr < (headerOffset.frn[2] - h)) :
					$('.image-content').removeClass('shown-img');
					$('.art2-image-content').addClass('shown-img');
					currentArtImgClass.frn = furnArtImg.art2;
					switchHover();
					break;
				case (scrollNr > (headerOffset.frn[2] - h) && scrollNr < (headerOffset.frn[3] - h)) :
					$('.image-content').removeClass('shown-img');
					$('.art3-image-content').addClass('shown-img');
					currentArtImgClass.frn = furnArtImg.art3;
					switchHover();
					break;
				case (scrollNr > (headerOffset.frn[3] - h)) :
					$('.image-content').removeClass('shown-img');
					$('.art4-image-content').addClass('shown-img');
					currentArtImgClass.frn = furnArtImg.art4;
					switchHover();
					break;
			}
		}
	});

});

var furnArtImg = {
	art1: {currentPic: 1, maxPic: 4, artNr: 'art1', project: 'openarch', artImgClass: '.art1-image-content'},
	art2: {currentPic: 1, maxPic: 5, artNr: 'art2', project: 'frametable', artImgClass: '.art2-image-content'},
	art3: {currentPic: 1, maxPic: 1, artNr: 'art3', project: 'extrachair', artImgClass: '.art3-image-content'},
	art4: {currentPic: 1, maxPic: 3, artNr: 'art4', project: 'hangle', artImgClass: '.art4-image-content'}
};
var currentArtImgClass = {frn: furnArtImg.art1, arc: '.art1-image-content'};

$(document).on('click', '.left-step-button, .right-step-button', function(e) {

	// Increment or decrement imagecount or relative picture
	if ($(e.target).hasClass('left-step-button')) {
		switchImage(-1);
		switchHover();
	}
	else if ($(e.target).hasClass('right-step-button')) {
		switchImage(1);
		switchHover();
	}
});

function switchHover() {
	if (activePage == 'frn') {
		var source;

		var leftPic = currentArtImgClass.frn.currentPic - 1;
		var rightPic = currentArtImgClass.frn.currentPic + 1;
		if (leftPic == 0) {
			leftPic = currentArtImgClass.frn.maxPic;
		}		
		if (rightPic == (currentArtImgClass.frn.maxPic + 1)) {
			rightPic = 1;
		}
		leftSrc = 'img/furniture/' + currentArtImgClass.frn.project + '/' + leftPic + '.jpg';
		rightSrc = 'img/furniture/' + currentArtImgClass.frn.project + '/' + rightPic + '.jpg';

		$('.left-step-image').css({'background': 'url('+leftSrc+') no-repeat center center', 'background-size': 'cover'});
		$('.right-step-image').css({'background': 'url('+rightSrc+') no-repeat center center', 'background-size': 'cover'});
	}
	
};

function switchImage(incDec) {
	if (activePage == 'frn') {
		var source;
		
		currentArtImgClass.frn.currentPic = (currentArtImgClass.frn.currentPic + incDec);
		if (currentArtImgClass.frn.currentPic == 0) {
			currentArtImgClass.frn.currentPic = currentArtImgClass.frn.maxPic;
		}
		else if (currentArtImgClass.frn.currentPic == (currentArtImgClass.frn.maxPic + 1)) {
			currentArtImgClass.frn.currentPic = 1;
		}

		src = 'img/furniture/' + currentArtImgClass.frn.project + '/' + currentArtImgClass.frn.currentPic + '.jpg';
		$(currentArtImgClass.frn.artImgClass).css({'background': 'url('+src+') no-repeat center center', 'background-size': 'cover'});
	}
};
