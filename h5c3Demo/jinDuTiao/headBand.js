(function($){
	$.fn.extend({
		headBand: function(option){
			var viewH = $(window).height(),//页面高
			ScrollH = $('body')[0].scrollHeight,//元素高
			S_V = ScrollH - viewH,
			getThis = this.prop('className') !== '' ?
				'.' + this.prop('className') : this.prop('id') !== '' ?
				'#' + this.prop('id') : this.prop('nodeName');
			$(window).scroll(function(){
				var ScoT_s = $(this).scrollTop(),
				Band_w = 100 - (ScrollH - viewH - ScoT_s) / S_V *100;
				defaultSetting = {
					background: 'green',
					height: 3,
					width: Band_w + '%'
				};
				setting = $.extend(defaultSetting,option);
				$(getThis).css({
					'background': setting.background,
					'position': 'fixed',
					'top': '0',
					'z-index': '99999',
					'height': setting.height + 'px',
					'width': defaultSetting.width
				});
			});
			return this;
		}
	});
}(jQuery));
