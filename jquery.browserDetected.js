/**
 * @author: Saveliy Bondarenko
 * @date: 21.11.12, 2:44
 * version 1.0
 */

(function($){
	jQuery.fn.browserDetected = function(){
		var item = $(this);

		var name;
		var browserVersion = $.browser.version;

		if ($.browser.msie)
			name = 'ie';
		else if ($.browser.mozilla)
			name = 'ff';
		else if ($.browser.opera)
			name = 'op';
		else if ($.browser.webkit && window.navigator.userAgent.indexOf('Chrome') > 0)
			name = 'ch';
		else if ($.browser.safari)
			name = 'sf';

		// Переопределение версии браузера для Chrome и Safari.

		if (name == 'ch') {
			var regexp=/Chrome\/([0-9]+)/;
			browserVersion = regexp.exec(window.navigator.userAgent)[1];
		} else if (name == 'sf') {
			var regexp=/AppleWebKit.+Version\/([0-9])+/;
			browserVersion = regexp.exec(window.navigator.userAgent)[1];
		}
		$(item).addClass(name + ' ' + name + parseInt(browserVersion));
		return item;
	};
})(jQuery);
