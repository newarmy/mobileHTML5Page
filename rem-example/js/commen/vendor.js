SA.register('vendor', function (a, $) {
	var style = document.createElement('div').style,
		getPrefix = function() {
			for(var tempStr, arr = 'webkitT,MozT,msT,OT'.split(","), index = 0, len = arr.length; len > index; index++) {
				if(tempStr = arr[index] +"ransform", tempStr in style) {
					return arr[index].substr(0,arr[index].length-1);
				}
			}
			return !1;
		}(),
		prefix = getPrefix ? '-'+getPrefix.toLowerCase()+'-': '',
		getScriptStyle = function(v) {
			return "" === getPrefix ? v : ((v = v.charAt(0).toUpperCase() + v.substr(1)), getPrefix + v);
		},
		f = getScriptStyle("transform"),
		g = getScriptStyle("transition"),
		h = getScriptStyle("transitionProperty"),
		i = getScriptStyle("transitionDuration"),
		j = getScriptStyle("transformOrigin"),
		k = getScriptStyle("transitionTimingFunction"),
		l = getScriptStyle("transitionDelay"),
		transitionEndEvent = function() {
			return "webkit" == getPrefix || "O" === getPrefix ? getPrefix.toLowerCase() + "TransitionEnd": "transitionend"
		} ();
		style = null;
		return {
			vendor: getPrefix,
			propVendor: getPrefix,
			cssVendor: prefix,
			propPrefix: getPrefix,
			cssPrefix: prefix,
			transform: f,
			transition: g,
			transitionProperty: h,
			transitionDuration: i,
			transformOrigin: j,
			transitionTimingFunction: k,
			transitionDelay: l,
			transitionEndEvent: transitionEndEvent
		};
});