;$(function() {
	$.fn.extend({
		opacityFn: function(duration,playTime) {
			var timer = "";
			var index = 0;
			var imgLength = $(this).find(".bannerImg").length;
			var $bannerList = $(this).find(".bannerList li");
			var $bubble = $(this).find(".bubble");
			var $prevBtn = $(this).find("#prevBtn");
			var $nextBtn = $(this).find("#nextBtn");
			var $bannerImg = $(this).find(".bannerList li .bannerImg");
			//将显示的顺序一一对应
			for (var i = 0; i < imgLength; i++) {
				$bannerList.eq(i).css({
					"zIndex": imgLength - i
				});
				$bubble.append("<li></li>");
			}
			$bubble.find("li").eq(0).addClass("active");
			function autoPlay(_index) {
				$bannerList.eq(_index).stop().fadeIn(playTime).siblings().fadeOut(playTime);
				$bubble.find("li").removeClass("active");
				$bubble.find("li").eq(_index).addClass("active");
			}

			$prevBtn.on("click", function() {
				index--;
				if (index < 0) {
					index = imgLength - 1;
				}
				autoPlay(index);
			});
			$nextBtn.on("click", function() {
				index++;
				if (index > imgLength - 1) {
					index = 0;
				}
				autoPlay(index);
			});
			timer = setInterval(function() {
				$nextBtn.click();
			}, duration);

			$bubble.find("li").on("click", function() {
				index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				autoPlay(index);
			});


			clearTimer($bannerImg);
			clearTimer($bubble);
			clearTimer($prevBtn);
			clearTimer($nextBtn);

			function clearTimer($ele) {
				$ele.hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$nextBtn.click();
					}, duration);
				})
			}
		},
		slide: function(duration,playTime) {
			var timer = "";
			var index = 0;
			var imgLength = $(this).find(".bannerImg").length;
			var $bannerList = $(this).find(".bannerList li");
			var $bubble = $(this).find(".bubble");
			var $prevBtn = $(this).find("#prevBtn");
			var $nextBtn = $(this).find("#nextBtn");
			var $bannerImg = $(this).find(".bannerList li .bannerImg");
			//将显示的顺序一一对应
			for (var i = 0; i < imgLength; i++) {
				$bannerList.eq(i).css({
					"zIndex": imgLength - i
				});
				$bubble.append("<li></li>");
			}
			$bubble.find("li").eq(0).addClass("active");
			function autoPlay(_index) {
				$bannerList.eq(_index).stop().slideDown(playTime).siblings().slideUp(playTime);
				$bubble.find("li").removeClass("active");
				$bubble.find("li").eq(_index).addClass("active");
			}

			$prevBtn.on("click", function() {
				index--;
				if (index < 0) {
					index = imgLength - 1;
				}
				autoPlay(index);
			});
			$nextBtn.on("click", function() {
				index++;
				if (index > imgLength - 1) {
					index = 0;
				}
				autoPlay(index);
			});
			timer = setInterval(function() {
				$nextBtn.click();
			}, duration);

			$bubble.find("li").on("click", function() {
				index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				autoPlay(index);
			});


			clearTimer($bannerImg);
			clearTimer($bubble);
			clearTimer($prevBtn);
			clearTimer($nextBtn);

			function clearTimer($ele) {
				$ele.hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$nextBtn.click();
					}, duration);
				})
			}
		}
	});
});