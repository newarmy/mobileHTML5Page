define(['zepto'], function ($) {
	var anchor = function (opt) {
		this.cp = opt.cp || $('.list');
		this.nav = opt.nav || $('.letter-box');
		this.posArr = [];
		this.navArr = [];
		this.moveFlag = false; 
		this.nowIndex = -1;//当前字符索引
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
				if((i == len-1) && k.navArr[len-1] < py) {/*指针在字符下方*/
					i = len-1;
				}
				if(k.navArr[0] > py) {/*指针在字符上方*/
					i = 0;
				}
				 var pos = k.posArr[i].pos;
				 if(pos != -1 && k.nowIndex != i) {
					k.animateScroll(pos, 100);
				 }
				 k.nowIndex = i;
				k.moveFlag = true;
			});
			//滑动定位
			k.nav.on('touchend', function (e) {
				e.preventDefault();
				$(document).off('touchmove');
			});
		},
		setScrollTop: function (e) {/*点击定位效果*/
			var k = this;
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
			 document.body.scrollTop  = v - 2*($('header').height());
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
				k.posArr.push({id:$.trim(t.html()) , pos:t.offset().top});
			});
		}
	};
	
	return anchor;
	
});