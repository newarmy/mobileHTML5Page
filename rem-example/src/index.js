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

require(['list/tab'], function (tab) {
	new tab({
		navBox: $('nav'),
		conBox: $('#tab_content'),
		modelUrl: modelUrl,
		areaUrl: ereaUrl
	});
});