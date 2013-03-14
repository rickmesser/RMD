// Bootstrap Image Gallery
/*
 * Bootstrap Image Gallery JS Example 2.9
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *//*jslint unparam: true *//*global window, document, $ */$(function(){"use strict";$("#start-slideshow").button().click(function(){var e=$(this).data(),t=$(e.target),n=t.data("modal");n?$.extend(n.options,e):e=$.extend(t.data(),e);t.find(".modal-slideshow").find("i").removeClass("icon-play").addClass("icon-pause");t.modal(e)});$("#toggle-fullscreen").button().click(function(){var e=$(this),t=document.documentElement;if(!e.hasClass("active")){$("#modal-gallery").addClass("modal-fullscreen");t.webkitRequestFullScreen?t.webkitRequestFullScreen(window.Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen&&t.mozRequestFullScreen()}else{$("#modal-gallery").removeClass("modal-fullscreen");(document.webkitCancelFullScreen||document.mozCancelFullScreen||$.noop).apply(document)}})});$("#brand a").bind("click",function(e){e.preventDefault();$("html, body").animate({scrollTop:$(this.hash).offset().top},1e3)});$("#tt").fitText(1.1,{minFontSize:"100px",maxFontSize:"200px"});$("#message").fitText(1.1,{minFontSize:"16px",maxFontSize:"36px"});