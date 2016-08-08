define(['zepto'], function ($) {
	return function (obj) {
		$('.complete-btn').on('click', function(e) {
			e.preventDefault();
			var arr = obj.selIdArr;
		});
	};
});