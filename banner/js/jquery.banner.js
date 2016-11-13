;$(function() {
	$.extend({
		opacityFn: function($bannerBox,$bannerList,$bannerImg,$prevBtn,$nextBtn,$bubble,duration,playTime) {
			var timer = "";
			var index = 0;


			var imgLength = $bannerList.length;
			/*alert(imgLength)*/
			//将显示的顺序一一对应
			for (var i = 0; i < imgLength; i++) {
				$bannerList.eq(i).css({
					"zIndex": imgLength - i
				});
				$bubble.append("<li></li>");
			}
			$bubble.find("li").eq(0).addClass("active");
			/*setTimeout(function(){
				autoPlay(1)
			},2000);
			*/
			function autoPlay(_index) {
				$bannerList.eq(_index).fadeIn(playTime).siblings().fadeOut(playTime);
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