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
 */$(".carousel").carousel({interval:4500});$("#brand a").bind("click",function(e){e.preventDefault();$("html, body").animate({scrollTop:$(this.hash).offset().top},1e3)});$("#tt").fitText(1.1,{minFontSize:"100px",maxFontSize:"200px"});$("#message").fitText(1.1,{minFontSize:"16px",maxFontSize:"56px"});$("#lead-in").fitText(1.1,{minFontSize:"12px",maxFontSize:"26px"});