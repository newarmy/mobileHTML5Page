define(['zepto', 'commen/vendor'], function ($, vendor) {
	/*var circle = $('.circle-list');
	var back = circle.find('.back-box');
	var init = function () {
		circle.css(vendor.cssPrefix+'transition', 'all .2s ease-in');
		$('.list').on('click', function (){
			circle.addClass('show-circle');
		});
		back.on('click', function (e){
			e.preventDefault();
			e.stopPropagation();
			circle.removeClass('show-circle');
		});
	};*/
	var loadCircle = function(opt){
		this.list = opt.list || $('.list');
		this.circleList = opt.circleList || $('.circle-list');
		this.box = this.circleList.find('.listm');
		this.id = null;
		this.imgArr = [];
		this.init();
	};
	loadCircle.prototype = {
		init: function () {
			var k = this;
			k.event();
		},
		ajax: function () {
			var k = this;
			$.ajax({
				type: 'get',
				url: 'data/aodi.json',
				//jsonp: 'callback',
				//jsonpCallback: k.callbackName,
				data : {
					modelid: k.id
				},
				dataType: 'json',
				success: function (data) {
					k.drawHTML.call(k, data);
				},
				error: function(){}
			});
		},
		drawHTML: function(data) {
			var k = this;
			var arr = [], list, imgurl, index = 0;
			for(var key in data) {
				arr.push('<li class="model-title box start box-align"><div class="model-circle box start"><span class="name">'+key+'</span></div></li>');
				for(var j = 0, l = data[key].length; j < l; j++) {
					list = data[key][j];
					arr.push('<li class="li box start box-align"><a href="'+list.id+'" class=" anchor box start box-align">');
					arr.push('<div class="img-box box center box-align"><div class="img-p">');
					imgurl = list.headImgId ? list.headImgId : 'images/c.png';
					arr.push('<img src="'+imgurl+'" r_src="images/c.png"></div></div><div class="circle box start">');
					arr.push('<span class="circle-name">'+list.communityName+'车友圈</span><span class="circle-people">2322人</span></div>');
					arr.push('<span class="focus">+关注</span></a></li>');
					index++;
				}
			}
			k.box.html(arr.join(''));
			k.showLayer();
			k.imgArr = [];
			k.box.find('img').each(function () {
				var t = $(this);
				k.imgArr.push({
					obj: t,
					pos: t.closest('li')[0].offsetTop
				});
			});
			k.lazyLoad();
			
		},
		lazyLoad: function (imgs){
			var k = this;
			var stop  = k.circleList.find('.listp')[0].scrollTop, ch = k.circleList.height(),tt;
			for(var i = 0, len = k.imgArr.length; i < len; i++) {
				tt = k.imgArr[i];
				if(tt.obj.attr('r_src') && tt.pos < Number(stop+ch)) {
					tt.obj.attr('src', tt.obj.attr('r_src'));
					tt.obj.removeAttr('r_src');
				}
			}
		},
		showLayer: function () {
			var k = this;
			k.circleList.addClass('show-circle');
		},
		event: function () {
			var k = this;
			k.circleList.on(vendor.transitionEndEvent, function () {
				if(!k.circleList.hasClass('show-circle')){
					k.circleList.css('display', 'none');
				}
			});
			k.circleList.on('touchmove', function (e) {
				//e.preventDefault();
				k.lazyLoad();
				
			});
			k.list.on('click', 'li', function (e) {
				e.preventDefault();
				var id = $(this).attr('data-id');
				if(!id) {
					return;
				}
				k.circleList.css('display', '-webkit-box');
				if(k.id == id) {
					setTimeout(function(){
						k.showLayer();
					}, 10);
				} else {
					k.id = id;
					k.ajax();
				}
				
			});
			k.box.on('click', '.focus', function (e) {
				k.defualt(e);
			});
		},
		defualt: function (e) {
			e.preventDefault();
			e.stopPropagation();
		}
	};
	return loadCircle;
});