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

require(['anchor', 'list/initheight', 'list/showCircle', 'list/loadCircle'], function (anchor, initH, show,loadCircle) {
	new anchor({});
	initH();
	show();
	new loadCircle({});
});