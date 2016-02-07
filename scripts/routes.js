"use strict";
var headerOffset = {frn: [], arc: []};
var activePage;
var Workspace = Backbone.Router.extend({
	
	routes : {
		'': 				'front',
		'furniture': 		'furniture',
		'architecture':     'architecture',
		'about': 			'about'
	},


	front: function() {
		$('#main-content').html(frontPage);
	},

	furniture: function() {
		// Change content and set activePage
		$('#main-content').html(furnitureContent);
		activePage = 'frn';
		toSvg();

		// Seve the offset for headers
		if (headerOffset.frn.length <= 0) {
			var furnitureHeaders = $('.left-sidebar').find('h1');
			$.each(furnitureHeaders, function(key, value) {
				headerOffset.frn.push($(value).offset().top);
			});
		}

		activateFrnScroll();
		switchHover();
	},

	architecture: function() {
		// Change content and set activePage
		$('#main-content').html(architectureContent);
		activePage = 'arc';
		toSvg();

		// Save offset for headers
		if (headerOffset.arc.length <= 0) {
			var architectureHeaders = $('.left-sidebar').find('h1');
			$.each(architectureHeaders, function(key, value) {
				headerOffset.arc.push($(value).offset().top);
			});
		}

		activateArcScroll();
		switchHover();
	},

	about: function() {
		$('#main-content').html(aboutMe);
	},
});