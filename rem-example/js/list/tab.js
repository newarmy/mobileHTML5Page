define(['zepto', 'commen/vendor'], function ($, vendor) {
	function tab(opt) {
		this.navBox = opt.navBox;
		this.conBox = opt.conBox;
		this.prefix = vendor.cssPrefix;
		this.minHeight = 0;
		this.oneHeight = 0;
		this.twoHeight = 0;
		this.threeHeight = 0;
		this.modelFlag = false;
		this.areaFlag = false;
		this.index = 0;
		this.modelUrl = opt.modelUrl;
		this.areaUrl =  opt.areaUrl;
		this.loading = false;
		this.letterBox = $('.letter-box');
		this.cons = null;
		this.tabs = null;
		this.init();
	}
	tab.prototype = {
		init: function() {
			var k = this;
			k.cons = k.conBox.find('.tabcon');
			k.tabs = k.navBox.find('a');
			k.minHeight = $(window).height();
			k.oneHeight = k.cons.eq(0).height();
			k.tabs.removeClass('cur').eq(0).addClass('cur');
			k.letterBox.css('visibility', 'hidden');
			k.conBox.css(vendor.cssPrefix+'transition', 'all .2s ease-in');
			k.event();
		},
		event: function() {
			var k = this;
			k.tabs.on('click',function(e){
				e.preventDefault();
				if(k.loading) {
					return;
				}
				var t = $(this);
				var index = t.index();
				k.index = index;
				k.tabs.removeClass('cur').eq(index).addClass('cur');
				switch(index) {
					case 0 :
					    document.body.scrollTop  =0;
						k.conBox.css(vendor.cssPrefix+'transform', 'translateX(0)');
						k.letterBox.css('visibility', 'hidden');
						k.setTabHeight(k.oneHeight);
						break;
					case 1 :
					    k.letterBox.css('visibility', 'visible');
						
						if(k.modelFlag){
							k.conBox.css(vendor.cssPrefix+'transform', 'translateX(-7.5rem)');
							k.setTabHeight(k.twoHeight);
							return;
						}
						k.load(k.modelUrl);
						k.modelFlag = true;
						break;
					case 2 :
						document.body.scrollTop  = 0;
						k.letterBox.css('visibility', 'hidden');
						
						if(k.areaFlag){
							k.conBox.css(vendor.cssPrefix+'transform', 'translateX(-15rem)');
							k.setTabHeight(k.threeHeight);
							return;
						} 
						k.load(k.areaUrl);
						k.areaFlag = true;
				}
			})
		},
		load: function (url) {
			var k = this;
			k.loading = true;
			var $iframe = $('<iframe style="width:0;height:0;display:none;border:none;" />').appendTo(document.body);
			$iframe.on('load',function () {
				var $self = $(this);
				//console.log($self[0].contentDocument);
				var data = $($self[0].contentDocument).find('body').html();
				var box = k.cons.eq(k.index);
				if ($.trim(data) == "")
					return;
				box.html(data);
				k.loading = false;
				$self.remove();
				if(k.index == 1) {
					k.conBox.css(vendor.cssPrefix+'transform', 'translateX(-7.5rem)');
					setTimeout(function(){
						k.twoHeight = box.height();
						k.setTabHeight(k.twoHeight);
					},200);
					require(['modelCircle']);
				} else if(k.index == 2) {
					k.conBox.css(vendor.cssPrefix+'transform', 'translateX(-15rem)');
					setTimeout(function(){
						k.threeHeight = box.height();
						k.setTabHeight(k.threeHeight);
					},200);
				}
				k.cons.eq(k.index).find('img').lazyload();
				
			});
			if(!url) {
				return;
			}
			$iframe.attr("src", url);
	   },
	   setTabHeight: function(curH) {
		 var k = this;  
		 var mh = k.minHeight;
		 var h = (mh > curH) ? mh : curH;
		 k.conBox.css("height",h+"px");
	   },
	};
	return tab;
});