require.config({
	baseUrl: './src',
	paths: {
		'zepto': '../lib/Zepto.min',
		'anchor': 'list/anchor'
	},
	shim: {
		'zepto': {
			exports: '$'
		}
	}
});

require(['anchor'], function (anchor) {
	new anchor({nav: $('ul')});
});