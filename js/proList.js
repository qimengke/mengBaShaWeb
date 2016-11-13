$(function(){
	getPic($("#header2 #daoR"),$("#header2 #daoR .shoppingC"));
	//$(".conAreaList .two ul.tt").slideUp(0);
	$(".conAreaList .two ul li.last").slideUp(0);
	$(".conAreaList .two .laSe").on("click",function(){
		var pp1 = $(".conAreaList .two ul.tt").css("display");
		if(pp1 == "none"){
		
			$(this).find("img").attr("src","img/产品中心/shouqi01 .png");
				
		}
		else{
			$(this).find("img").attr("src","img/产品中心/zhankai01.png");
		}
		$(".conAreaList .two ul.tt").slideToggle();
	})	
	$(".conAreaList .two ul li.right span").on("click",function(){
		var pp = $(this).parent().next(".last").css("display");
		if(pp == "none"){
		
			$(this).css({
				"background":"url(img/产品中心/zhankai00.png) no-repeat"
			})
		}
		if(pp == "list-item"){
			$(this).css({
				"background":"url(img/产品中心/shouqi00.png) no-repeat"
			})
		}
		$(this).parent().next(".last").slideToggle();
	})		
		
		
	
	
	
		
	
	
	
})
