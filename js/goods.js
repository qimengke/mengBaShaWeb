$(function(){
	
	
	
/*****收起头部图片******/	
	$("#theOne .close").on("click",function(){
		$("#theOne").slideUp();
	})
	
/*****收起头部图片******/	


/******右部导航系列开始********/
	$("#navigation .second .head1 span").on("click",function(){
		$("#navigation .second").slideUp();
	})
	$("#navigation .navig ul.na li").hover(function(){
		if($(this) == "#navigation .navig ul.na li.erji"){
			$(this).css({
				"background": "red url(img/产品中心/daohang06B.png ) no-repeat center center"
			})
		}
		
		var $index = $(this).index();
		if($index == 5){
			$(this).css({"background": "red url(img/产品中心/daohang06B.png ) no-repeat center center"})
		}else{
			$("#navigation .navig .na li").eq(5).css("background","#262626 url(img/产品中心/daohang06A.png ) no-repeat center center")
		}
		//因为小耳机hover之后用的是红色背景图所以先找到它，替换成对应图片
		$("#navigation .eject").eq($index).css("display","block").siblings().not(".navig").css("display","none");
		$(this).css("background-color","#C10055").siblings().css("background-color","#262626");
		$(this).find("i").css("display","block");
		$(this).siblings().find("i").css("display","none");
		$("#navigation .eject").eq($index).hover(function(){
			
		},function(){
			
			$(this).css("display","none");
			$("#navigation .navig ul.na li").eq($index).css("background-color","#262626");
			$("#navigation .navig ul.na li").eq($index).find("i").css("display","none");
			$("#navigation .navig ul.na li").eq(5).css("background","#262626 url(img/产品中心/daohang06A.png ) no-repeat center center");
		})
		
	})
	


/******右部导航系列结束********/


/**********内容区开始***********/
/*****图片放大开始******/
 	
 	var smallPic = document.getElementById("smallPic");
 	var smallGlass = document.getElementById("smallGlass");
 	var bigPic = document.getElementById("bigPic");
 	var bigGlass = document.getElementById("bigGlass");
 	 
	/**计算小放大镜的尺寸***/
	smallGlass.style.width = bigGlass.offsetWidth*smallPic.offsetWidth/bigPic.offsetWidth + "px";
	smallGlass.style.height = bigGlass.offsetHeight*smallPic.offsetHeight/bigPic.offsetHeight + "px";
			//记住，通过比例算出结果之后需要加“px”，这才能正常的显示宽高；
	var sGx = parseInt(smallGlass.style.width);
	var sGy = parseInt(smallGlass.style.height);
	
			//因为下面获得的屏幕的位移数值是没有“px”也就是不是字符串
			//                                所以要先转化为数值进行比较
	/****计算出放大比例****/
	var scale = smallPic.offsetWidth/sGx;
	
		   //console.log(scale2);两个放大比例差不多;
			
	/****计算鼠标进入小图的位置******/
	 
	 
	 
	 
	
	smallPic.onmousemove = function(event){
       smallGlass.style.display = "block";
	   bigGlass.style.visibility = "visible";
       var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
        			//获取当前滚动条距离顶部的距离,前一个使用谷歌，后一个火狐
		var minX = event.clientX - smallPic.offsetLeft;
		var minY = event.clientY + scrollY - smallPic.offsetTop;
		var maxX =smallPic.offsetWidth - sGx/2 ;
		var maxY =smallPic.offsetHeight - sGy/2;
		
//		if((minX >= sGx/2)&&(minY >= sGy/2)&&(minX <= maxX)&&(minY <= maxY)){
//			
//			smallGlass.style.left = minX-sGx/2 + "px";//注意position位移是需要“px”的所以要加上
//			smallGlass.style.top = minY-sGy/2 + "px";
//			bigPic.style.left = 	-(minX-sGx/2)*scale + "px";
//			bigPic.style.top = 	-(minY-sGy/2)*scale + "px";
//		} 实现不了
		if(minY<sGy/2){
			smallGlass.style.top = 0;
			bigPic.style.top = 	0;
		}else if(minY>maxY){
			smallGlass.style.top = smallPic.offsetHeight - sGy + "px";
			bigPic.style.top = -(smallPic.offsetHeight - sGy)*scale + "px";
		}else{
			smallGlass.style.top = minY-sGy/2 + "px";
			bigPic.style.top = 	-(minY-sGy/2)*scale + "px";
		}
		if(minX<sGx/2){
			smallGlass.style.left = 0;
			bigPic.style.left = 	0;
		}else if(minX>maxX){
			smallGlass.style.left = smallPic.offsetWidth - sGx + "px";
			bigPic.style.left = -(smallPic.offsetWidth - sGx)*scale + "px";
		}else{
			smallGlass.style.left = minX-sGx/2 + "px";
			bigPic.style.left = -(minX-sGx/2)*scale + "px";
		}
	}		
	smallPic.onmouseout = function(){
		smallGlass.style.display = "none";
	   bigGlass.style.visibility = "hidden";
	}
		
	
	
/*****图片放大结束******/      
       
 /*****小图切换部分*****/
	var arry = ["img/产品中心/bigPic01B.jpg","img/产品中心/pic02C.jpg",
				"img/产品中心/pic03C.jpg","img/产品中心/pic05C.jpg",
				"img/产品中心/pic05C.jpg","img/产品中心/pic06C.jpg",
				"img/产品中心/pic07C.jpg"];
	
	$(".main1 .pict .pics .center li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var $index = $(this).index();
//		console.log(arry[$index]);
		$(".main1 .pict #smallPic").css({"background":"url("+arry[$index]+")","background-size":"cover"});
		$(".main1 .pict #smallPic #bigPic").attr("src",arry[$index]);
	
	})
	
	
	$(".main1 .pict .pics .right").on("click",function(){
		var $left1 = parseInt($(".main1 .pict .pics .center ul").css("left"));
		console.log($left1);
		if($left1<-59){
			return;
		}
		$(".main1 .pict .pics .center ul").animate({
			left :  $left1 - 59 
		},500);	
		
		
	})
	$(".main1 .pict .pics .left").on("click",function(){
		var $left2 = parseInt($(".main1 .pict .pics .center ul").css("left"));
		if($left2>=0){
			return;
		}
		$(".main1 .pict .pics .center ul").animate({
			left :  $left2 + 59 
		},500);	
		
	})
	
	getPic($("#container .main1 .pict .middle .bianMa ul li.share"),$("#container .main1 .pict .middle .bianMa ul li.share p"))
	
	
	$("#container .main1 .choice .anniu .three input").on("click",function(){
		var num = $("#container .main1 .choice .anniu .three input").val();
		if(num == 5){
			$("#container .main1 .choice .anniu .three p").find(".first").css("display","none");
			$("#container .main1 .choice .anniu .three p").find(".second").css("display","block");
		}else{
			$("#container .main1 .choice .anniu .three p").find(".first").css("display","block");
			$("#container .main1 .choice .anniu .three p").find(".second").css("display","none");
		}
	});	
		
	$(".main1 .rightPic .jiantou .left").on("click",function(){
		var $top1 = parseInt($(".main1 .rightPic .ppic .qun").css("top"));
		console.log($top1);
		if($top1<-760){
			return;
		}
		$(".main1 .rightPic .ppic .qun").animate({
			top :  $top1 - 190 
		},500);	
		
		
	})
	$(".main1 .rightPic .jiantou .right").on("click",function(){
		var $top2 = parseInt($(".main1 .rightPic .ppic .qun").css("top"));
		if($top2>=0){
			return;
		}
		$(".main1 .rightPic .ppic .qun").animate({
			top :  $top2 + 190 
		},500);	
		
	})
	



/*****小图切换部分*****/
       
/*******中心悬浮置顶部分开始********/
	document.onscroll = function(){
//		console.log(document.body.scrollTop);
		//console.log($("#container .main2 .containArea .header").offset().top);
		var sTop = document.body.scrollTop;
		
		if(sTop >= 1100){
			
			$("#container .main2 .containArea .header ul li.last").css("display","block");
			$("#container .main2 .containArea .header").css({
				"position":"fixed",
				"top": 0,
				"left": "18.5%"
			});
			
		}else{
			$("#container .main2 .containArea .header ul li.last").css("display","none");
			$("#container .main2 .containArea .header").css({
				
				"position":"static"
				
			})
		}
	}

	$("#container .main2 .containArea .header").find("li").not(".last").on("click",function(){
		var $index = $(this).index();
		$(this).addClass("active2").siblings().removeClass("active2");
		$("#container .main2 .containArea .cont").eq($index).css("display","block").siblings().not(".header").css("display","none");
		if(document.body.scrollTop > 1100){
		document.body.scrollTop = 1068;
		}
	})
/*******中心悬浮置顶部分结束********/

 /*****cookie*******/
	var mPic1 = "myPicture1";//图片地址
	var mSize1 = "mySize1";//型号
	var mNum1 = "myNumber1";//数量
	var mPrice1 = "myPrice1";//价格
	var mInside = "myInBox";
	/*****先找到哪个图片被选中，选的哪个型号，以及选的数量*****/
	
	
		var picT = 0;
		$(".main1 .choice .anniu .one p").on("click",function(){
			
			$(this).css("background","url(img/产品中心/xuan01B.png) no-repeat");
			$(".main1 .choice .anniu .one span").css("background","url(img/产品中心/xuan02A.png) no-repeat")
			console.log(picT);
			picT = 0;
		})
		
		$(".main1 .choice .anniu .one span").on("click",function(){
			
			$(this).css("background","url(img/产品中心/xuan02B.png) no-repeat")
			$(".main1 .choice .anniu .one p").css("background","url(img/产品中心/xuan01A.png) no-repeat");
			picT = 1;
			
		})
		
		
		/***取型号***/
		$(".main1 .choice .anniu .two p").on("click",function(){
			$(this).addClass("active3").siblings().removeClass("active3");
		})
		
		
		
		
		
		

		/***取型号***/
		
			
		
		
		
	/*****先找到哪个图片被选中，选的哪个型号，以及选的数量*****/
	
	
	
	
	$(".main1 .choice .anniu .four .btn2").on("click",function(){
			$(".main1 .choice .anniu .four .ball").
			
		
	});
			
			
			
			
	$("#coverAll .clickB .btnn").on("click",function(){		
			$("#coverAll").hide();
			/**取图片地址***/
			
			if(picT == 0){
				var mySrc1 = "img/产品中心/pic03C.jpg";
				var mySize03 = "灰色";
			}else{
				var mySrc1 = "img/产品中心/pic07C.jpg";
				var mySize03 = "白色";
			}
			var mySize01 = $(".main1 .choice .title").html();
			var mySize02 =  $(".main1 .choice .anniu .two").find(".active3").html();
			var mySize1 = mySize01 +"<br />"+ "型号："+mySize02 + "&nbsp;&nbsp;"+"颜色："+ mySize03;
			
			var myNum1 = $(".main1 .choice .anniu .three input").val();
			var myPrice1 = $(".main1 .choice .contain .one .pp span").html();
			
			addCookie(mPic1,mySrc1,5); //图片地址
			addCookie(mSize1,mySize1,5);//物品信息
			addCookie(mNum1,myNum1,5);//物品数量
			addCookie(mPrice1,myPrice1,5);//物品单价
			addCookie(mInside,"1",5);//用“0”、“1”表示cookie状态
		
			
	})
 



/*****cookie*******/

/**********内容区结束***********/
























})
