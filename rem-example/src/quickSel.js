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

require(['quickRecommend/changeCircle', 'quickRecommend/manageCircle','quickRecommend/linkTo'], function (changeC, mangeC, linkTo) {
	var cc = new changeC({});
	var mc = new mangeC({});
	linkTo(mc);
});