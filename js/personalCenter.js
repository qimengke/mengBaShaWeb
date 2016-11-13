$(function(){
	$("#content .two .jia .increase").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#636363");
	});
	$("#content .two .jia .increase").on("click",function(){
		if($(this).siblings().css("display") == "none"){
			
			$(this).find("img").attr("src","img/个人中心/single19.jpg");
		}
		if($(this).siblings().css("display") == "list-item"){
			$(this).find("img").attr("src","img/个人中心/single01.jpg");
		}
		
		$(this).siblings().slideToggle();
	})	
	
	var srcMy = getCookie("myPicture1");
	var sizeMy = getCookie("mySize1");
	var numMy = getCookie("myNumber1"); 
	var priceMy = getCookie("myPrice1");
	var totleMy = priceMy*numMy;//单价*数量
	
	$("#content .main .goodas .tuPian li.first img").attr("src",srcMy);
	$("#content .main .goodas .tuPian li.first span").html(sizeMy);
	$("#content .main .goodas .tuPian li.second").html(priceMy);
	$("#content .main .goodas .tuPian li.third").html(numMy);
	$("#content .main .goodas .tuPian li.last").html(totleMy);
	
	
	$("#content .main .goodas .jieSuan li.t1 span").html(totleMy);
    $("#content .main .goodas .jieSuan li.t3 span").html(totleMy+10);

	var nameMy = getCookie("Myname");
	var userName = getCookie("myUserName");
	var addressMy = getCookie("Myaddress");
	var postcodeMy = getCookie("Mypostcode");
	var emailMy = getCookie("Myemail");
	var	phoneMy = getCookie("Myphone");
	
	$("#content .main .single .p1 span").html(userName);
	$("#content .main .single .p2 span").html(nameMy);
	$("#content .main .single .p3 span").html(addressMy);
	$("#content .main .single .p4 span").html(postcodeMy);
	$("#content .main .single .p5 span").html(emailMy);
	$("#content .main .single .p6 span").html(phoneMy);

	
	$(".main .cont .two .liebiao .yanShen li").eq(1).on("click",function(){
		
		$("#content .main  .goodas").slideToggle("slow");
	})

	$(".main .cont .two .liebiao .jiBen li").eq(1).on("click",function(){
		
		$("#content .main  .single").slideToggle("slow");
	})


})
	

