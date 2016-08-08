//添加或取消圈子
define(['zepto'], function ($) {
	var mangeCircle = function (opt) {
		this.circleBox = opt.circleBox || $('.tag-list');
		this.selBox = opt.selBox || $('.sel-list');
		this.selIdArr = [];
		
		this.init();
	};
	
	mangeCircle.prototype = {
		init: function () {
			var k = this;
			k.selBox.html('');
			k.event();
		},
		event: function () {
			var k = this;
			// 选择圈子
			k.circleBox.on('click', '.tag',function (e) {
				e.preventDefault();
				var dom = $(this);
				if(dom.hasClass('on')) {
					return;
				}
				var name = dom.html().replace('<em></em>','');
				var id = dom.attr('data-id');
				k.select.call(k, name, id, dom);
			});
			// 取消圈子
			k.selBox.on('click', 'em',function (e) {
				e.preventDefault();
				var dom = $(this);
				var p = dom.closest('li');
				var id = p.attr('data-id');
				k.cancel.call(k, id, p);
			});
		},
		cancel: function (id, dom) {
			var k = this;
			$.ajax({
				dataType: 'json',
				data:{
					id: id
				},
				url:'data/sel.json',
				success: function(data) {
					if(data.state == 1) {
						k.removeArr(id);
						dom.remove();
						k.circleBox.find('.tag').each(function() {
							var t = $(this), did = t.attr('data-id');
							if(id == did) {
								t.removeClass('on');
							}
						});
						if(k.selIdArr.length >=3) {
							k.selBox.removeClass('box');
							k.selBox.removeClass('center');
							k.selBox.find('li').css('float', 'left');
						} else {
							k.selBox.addClass('box');
							k.selBox.addClass('center');
							k.selBox.find('li').css('float', 'none');
						}
					}
				}
			});
		},
		removeArr: function(id) {
			var k = this;
			var len = k.selIdArr.length;
			for(var i =0; i < len; i++) {
				if(id == k.selIdArr[i]) {
					k.selIdArr.splice(i,1);
				}
			}
		},
		select: function (name, id, dom) {
			var k = this;
			$.ajax({
				dataType: 'json',
				data:{
					id: id
				},
				url:'data/sel.json',
				success: function(data) {
					if(data.state == 1) {
						k.selIdArr.push(id);
						dom.addClass('on');
						k.selBox.append('<li class="sel" data-id="'+id+'">'+name+' <em></em></li>');
						if(k.selIdArr.length >=3) {
							k.selBox.removeClass('box');
							k.selBox.removeClass('center');
							k.selBox.find('li').css('float', 'left');
						}else {
							k.selBox.addClass('box');
							k.selBox.addClass('center');
							k.selBox.find('li').css('float', 'none');
						}
					}
				}
			});
		}
	};
	
	return mangeCircle;
	
});