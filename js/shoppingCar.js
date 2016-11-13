$(function(){
	document.onscroll = function(){
		var $top = document.body.scrollTop;
		
		if($top >= 480){
			$("#contentX .saoMa .right").css({
				"position": "fixed",
				"bottom": 0,
				"left": "74%"
			})
		}else{
			$("#contentX .saoMa .right").css({
				"position": "static",
				"background-color": "white",
				"opacity": "0.9"
			})
		}
	}
	var mPic1 = "myPicture1";//图片地址
	var mSize1 = "mySize1";//型号
	var mNum1 = "myNumber1";//数量
	var mPrice1 = "myPrice1";//价格
	var mInside = "myInBox";
	
	if(getCookie(mInside) == 1){
		$("#contentX .Nosee").css("display","block");
		$("#contentX .canSee").css("display","none");
		var srcPic = getCookie(mPic1);
		$("#contentX .goods ul li.one img").attr("src",srcPic);//获取图片地址
		var mySize11 = getCookie(mSize1);
		$("#contentX .goods ul li.two").html(mySize11);//获取物品信息
		var goodPrice = getCookie(mPrice1);
		$("#contentX .goods ul li.three span").html(goodPrice);//物品单价
		var goodNum = getCookie(mNum1);
		$("#contentX .goods ul li.four").html(goodNum);//物品数量
		
		var totlePrice = goodNum * goodPrice;
		
		
		$("#contentX .goods ul li.five span").html(totlePrice);
		$("#contentX .saoMa .right .one span").html(goodNum);
		$("#contentX .saoMa .right .price span").html(totlePrice);
		
		$("#contentX .goods ul li.six").on("click",function(){
			updateCookie(mInside,"0");
			$("#contentX .Nosee").css("display","none");
			$("#contentX .canSee").css("display","block");
		})
	
	}
	
	
	
	
	
})
