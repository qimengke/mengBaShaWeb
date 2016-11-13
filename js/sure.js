$(function(){
	
	
	var loginMy = getCookie("Mylogin");
	var nameMy = getCookie("Myname");
	var addressMy = getCookie("Myaddress");
	var postcodeMy = getCookie("Mypostcode");
	var emailMy = getCookie("Myemail");
	var	phoneMy = getCookie("Myphone");
	var	telMy = getCookie("Mytel");
	
	var srcMy = getCookie("myPicture1");
	var sizeMy = getCookie("mySize1");
	var numMy = getCookie("myNumber1"); 
	var priceMy = getCookie("myPrice1");
	var totleMy = priceMy*numMy;//单价*数量
	//console.log(totleMy+srcMy+sizeMy+numMy+priceMy);
	
	
	
	
	
	if(loginMy == 1){
		/*****地址栏*******/
		$("#contentX .content1 p.one").html(nameMy);
		$("#contentX .content1 p.two").html(addressMy);
		$("#contentX .content1 p.three").html(postcodeMy);
		$("#contentX .content1 p.four").html(emailMy);
		$("#contentX .content1 p.five").html(phoneMy);
		$("#contentX .content1 p.six").html(telMy);
		
		/*****图片框******/
		$("#contentX .content3 .kua li.one img").attr("src",srcMy);
		$("#contentX .content3 .kua li.one p").html(sizeMy);
		$("#contentX .content3 .kua li.two").html(priceMy);
		$("#contentX .content3 .kua li.three").html(numMy);
		$("#contentX .content3 .kua li.four").html(totleMy);
	
		/*****结算*****/
		$("#contentX .content4 .totle .one span").html(totleMy);
		$("#contentX .content4 .totle .three span").html(totleMy+10);
	}
		
		
		
		
})
