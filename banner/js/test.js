$(function(){
	
	var $bannerBox = $(".banner");
	var	$bannerList = $(".bannerList li");
	var	$bannerImg = $(".bannerImg");
	var	$prevBtn = $("#prevBtn");
	var	$nextBtn = $("#nextBtn");
	var	$bubble = $(".bubble");
	var duration = 3000;
	var playTime = 200;
	
	
			/*var index = */
	$.opacityFn($bannerBox,$bannerList,$bannerImg,$prevBtn,$nextBtn,$bubble,duration,playTime);
})
