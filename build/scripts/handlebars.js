"use strict";

// Set frontpage template
var frontPage = GD.templates.frontPage;
var aboutMe = GD.templates.aboutMe;

// Save context for loaded articles from .md files.
var context = {furnitureArticle: [],
			   architectureArticle: []};
var furnitureContent = '';
var architectureContent = '';

// Get JSON objects with all posts (key: path, val: text)
$.getJSON('build/posts/json/furniture.json', function(data) {
	// For each post we load it into context.
	$.each(data, function(key, val) {
		var htmlName = key.replace('.html', '');
		var text = val.split('</h1>');
		text[0] = text[0] + '</h1>';
		context.furnitureArticle.push({articleName: text[0], articleText: text[1]});
	});

	// Load furniture template with data
	furnitureContent = GD.templates.furniture(context);
});

// Get JSON objects with all posts (key: path, val: text)
$.getJSON('build/posts/json/architecture.json', function(data) {
	// For each post we load it into context.
	$.each(data, function(key, val) {
		var htmlName = key.replace('.html', '');
		var text = val.split('</h1>');
		text[0] = text[0] + '</h1>';
		context.architectureArticle.push({articleName: text[0], articleText: text[1]});
	});

	// Load furniture template with data
	architectureContent = GD.templates.architecture(context);
});

// $(document).ready(function () {
//     $('#main-content').html(frontPage);
// });