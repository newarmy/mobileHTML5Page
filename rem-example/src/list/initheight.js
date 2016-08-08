define(['zepto'], function ($) {
	return function () {
		$(document).ready(function() {
			var headerH = $('header').height();
			var winH = $(window).height();
			$('.circle-list').css('height', (winH-headerH)+'px')
		});
	};
});