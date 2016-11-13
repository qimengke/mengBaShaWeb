$(function(){
	var numMy = getCookie("myNumber1"); 
	var priceMy = getCookie("myPrice1");
	var totleMy = priceMy*numMy;//单价*数量
	
	$("#contentOut .pp .one span").html(totleMy);
	$("#contentOut .pp .two p").html(totleMy);
	$("#contentOut .pp .two span").html(totleMy);
	$("#contentOut .pp .three p").html(totleMy);
	
	
})
