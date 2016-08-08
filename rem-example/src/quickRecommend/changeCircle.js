//切换一批圈子
define(['zepto'], function ($) {
	function changeCircles(opt){
		this.circleBox = opt.circleBox || $('.tag-list');
		this.changeBtn = opt.changeBtn|| $('.tag-btn');
		this.currentPage = 1;
		this.init();
	}
	changeCircles.prototype = {
		init: function () {
			var k = this;
			k.event();
		},
		event: function () {
			var k = this;
			k.changeBtn.on('click', function (e) {
				e.preventDefault();
				k.ajaxData.call(k);
			});
		},
		ajaxData: function () {
			var k = this;
			k.currentPage++;
			$.ajax({
				dataType: 'json',
				data:{
					pages: k.currentPage
				},
				url: 'data/data.json',
				success: function (data) {
					console.log(data);
					k.changeHTML.call(k, data);
				},
				error: function(jqXHR, textStatus, errorThrown){
					
					alert(textStatus +"   "+ errorThrown);
				}
			});
		},
		changeHTML: function(data){
			
			var k = this;
			var html = [];
			for(var i = 0, len = data.length; i < len; i++) {
				html.push('<div class="tag pos'+(i+1)+'" data-id="'+data[i].id+'"><em></em>'+data[i].name+'</div>');
			}
			k.circleBox.html(html.join(''));
		}
	};
	return changeCircles;
	
});