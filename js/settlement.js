$(function(){
	$("#contentX .content .eight input").on("click",function(){
		var nameMy = $("#contentX .content .one input").val();
		var addressMy = $("#contentX .content .two .first").val()+$("#contentX .content .two .second").val()+$("#contentX .content .two .third").val()+$("#contentX .content .three input").val();
		var postcodeMy = $("#contentX .content .four select").val();
		var emailMy = $("#contentX .content .five input").val();
		var phoneMy = $("#contentX .content .six input").val();
		var telMy = $("#contentX .content .seven input").val();
		
		addCookie("Myname",nameMy,5);
		addCookie("Myaddress",addressMy,5);
		addCookie("Mypostcode",postcodeMy,5);
		addCookie("Myemail",emailMy,5);
		addCookie("Myphone",phoneMy,5);
		addCookie("Mytel",telMy,5);
		
		addCookie("Mylogin","1",5);//判断是否登录
	
	
	})
})
