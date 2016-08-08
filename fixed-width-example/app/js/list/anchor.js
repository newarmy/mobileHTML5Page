define(['zepto'], function ($) {
	var anchor = function (opt) {
		this.cp = opt.cp || $('body');
		this.nav = opt.nav;
		this.posArr = [];
		this.navArr = [];
		this.moveFlag = false; 
		this.nowIndex = -1;
		this.init();
	};
	
	anchor.prototype = {
		init: function () {
			var k = this;
			k.setPos();
			k.setNav();
			k.setEvent();
		},
		setNav: function () {/*得到导航相对视口的高度*/
			var k = this;
			k.nav.find('li').each(function() {
				var t = $(this);
				console.log(t.offset().top - document.body.scrollTop);
				k.navArr.push(t.offset().top - document.body.scrollTop);
			});
		},
		setEvent: function() {
			var k = this;
			//点击定位
			k.nav.on('touchend', 'li', function (e) {
				k.setScrollTop.call(k, e);
			});
			//滑动定位
			k.nav.on('touchstart', function (e) {
				e.preventDefault();
				$(document).on('touchmove', function(e) {
					e.preventDefault();
				});
			});
			//滑动定位
			k.nav.on('touchmove', function (e) {
				e.preventDefault();
				var py = e.touches[0].clientY;
				for(var i = 0, len = k.navArr.length; i < len-1; i++) {
					if(py >= k.navArr[i] && py < k.navArr[i+1]) {
						break;
					}
				}
				if(k.navArr[len-1] < py) {
					i = len-1;
				}
				
				var pos = k.posArr[i].pos;
				 if(pos != -1 && k.nowIndex != i) {
					k.animateScroll(pos, 100);
				 }
				 k.nowIndex = i;
				k.moveFlag = true;
				console.log(k.moveFlag);
			});
			//滑动定位
			k.nav.on('touchend', function (e) {
				e.preventDefault();
				$(document).off('touchmove');
			});
		},
		setScrollTop: function (e) {/*点击定位效果*/
			var k = this;
			console.log(k.moveFlag);
			if(k.moveFlag) {
				k.moveFlag = false;
				return;
			}
			var t = $(e.target);
			var id = t.html();
			var pos = k.getPos(id);
             if(pos != -1) {
				k.setP(pos);
			 }
		},
		animateScroll: function (to, time) {/*动画滚动效果*/
			var k = this;
			var from = Number(document.body.scrollTop),
			i = 0,
			runTime = 5; // run every 5ms;
			time /= runTime;
			var interval = setInterval(function () {
				i++;
				k.setP((to - from)/time*i + from);
				if(i >= time) {
					clearInterval(interval);
				}
			}, runTime);
		},
		setP: function (v) {
			 document.body.scrollTop  = v;
		},
		getPos: function(id) {
			//获得每个字母相对文档的位置
			var k = this;
			var len = k.posArr.length;
			for(var i = 0; i < len; i++) {
				var temp = k.posArr[i];
				if(temp.id == id) {
					return temp.pos;
				}
			}
			return -1;
		},
		setPos: function () {
			//存储每个字母相对文档的位置
			var k = this;
			var hs = k.cp.find('h3');
			hs.each(function () {
				var t = $(this);
				k.posArr.push({id:t.html() , pos:t.offset().top});
			});
		}
	};
	
	return anchor;
	
});