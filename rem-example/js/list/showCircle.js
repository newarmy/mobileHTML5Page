define(['zepto', 'commen/vendor'], function ($, vendor) {
	var circle = $('.circle-list');
	var back = circle.find('.back-box');
	var init = function () {
		circle.css(vendor.cssPrefix+'transition', 'all .2s ease-in');
		back.on('click', function (e){
			e.preventDefault();
			e.stopPropagation();
			circle.removeClass('show-circle');
		});
	};
	
	return init;
});