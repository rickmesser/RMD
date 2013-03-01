/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'RMD\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-twitter' : '&#x54;',
			'icon-rdio' : '&#x52;',
			'icon-instagram' : '&#x49;',
			'icon-dribbble' : '&#x44;',
			'icon-texas' : '&#x4a;',
			'icon-aar' : '&#x4c;',
			'icon-vine' : '&#x56;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};