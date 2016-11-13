$(function(){
/*header1 二维码*/
	getPic($("#origin ul li.sao1"),$("#origin ul li.saoMa1"))
	getPic($("#origin ul li.sao2"),$("#origin ul li.saoMa2"))
	getPic($("#origin ul li.sao3"),$("#origin ul li.saoMa3"))
	getPic($("#origin ul li.sao4"),$("#origin ul li.saoMa4"))
	getPic($("#origin ul li.sao5"),$("#origin ul li.sao5 span"));
	$("#origin ul li.one").hover(function(){
		$(this).css("background-color","white");
		$("#origin ul li.one span").css({"display":"block","background-color":"white"});
	},function(){
		$(this).css("background-color","none");
		$("#origin ul li.one span").css("display","none");
	})
/*header1 二维码*/
	
/*header2 搜索框焦点事件*/
	$("div").find("#souSuokua input").focus(function(){
		if($(this).val() === $(this).attr("defaultText")){
			$(this).val("");
		}
	});
	$("div").find("#souSuokua input").blur(function(){		
		if($(this).val() === ""){
			$(this).val($(this).attr("defaultText")) ;
		}
	});
/*header2 搜索框焦点事件*/
	
	
/*main部分红色导航*/
	getPic($("#headDi .womenClose"),$("#header2 #headDi .lieB"));
	getPic($("#headDi .womenClose"),$("#header2 #headDi .lieB .oneFir"));	
	getPic($("#headDi .braClose"),$("#header2 #headDi .lieB .twoFir"));	
	getPic($("#headDi .braClose"),$("#header2 #headDi .lieB"));
	getPic($("#headDi .manClose"),$("#header2 #headDi .lieB .threeFir"));	
	getPic($("#headDi .manClose"),$("#header2 #headDi .lieB"));
	
	$("#headDi .redPP").hover(function(){
		$(this).css("background-color","red");
		
	},function(){
		$(this).css("background-color","black");
	});
	
	getBackground($("#headDi .oneFir"),$("#headDi .lieA .womenClose"),"background-color","red","black");
	getBackground($("#headDi .twoFir"),$("#headDi .lieA .braClose"),"background-color","red","black");	
	getBackground($("#headDi .threeFir"),$("#headDi .lieA .manClose"),"background-color","red","black");
/*main部分红色导航*/
	
	
/*主页轮播*/
		
	setTime(5);
	
	
	$("#headDi #ballTi li").mouseenter(function(){
			$(this).css("background","mediumvioletred");
			var $index = $(this).index();
			$("#main1 .bigTu .bigPic").eq($index).show().siblings().hide();
			$("#main1 .smallTu .smallPic").eq($index).show().siblings().hide();
			$(this).siblings().css("background","white");
			
		});	
		
	$("#headDi #ballTi li").mouseleave(function(){
			var $index = $(this).index();
			setTime($index);
	});
/*主页轮播*/
	
	
/*黑框切换部分*/
	$("#blackKuang li").mouseover(function(){
		
		$(this).css({"background":"black","color":"white"}).siblings().css({"background":"","color":"#666666"});
		
		$(this).find("span").css("display","block");
		$(this).siblings().find("span").css("display","none");
		
		$(this).find("a").css("color","white");
		$(this).siblings().find("a").css("color","#666666");
		var $index = $(this).index();
		//console.log($index);
		$("#main2 .firstRight").eq($index).fadeIn().siblings().not(".firstLeft").fadeOut();
	});
	
	sharkePic($("#main2 .sPic li a"),{"right":6},{"right":0});
	coverPic($("#main2 .ssPic li a"),"span",".ssP1");
/*黑框切换部分*/
	
/*---main2 second部分-----*/
	coverPic($("#main2 .second1 .secondFire a"),"span","p");

	/*--main2 secondSix区域hover--*/
	$("#main2 .second1 .secondSix li").mouseover(function(){
		$(this).css("color","red").find("p").css("display","block");
		$(this).siblings().css("color","black").find("P").css("display","none");
		var $index = $(this).index();
		$("#main2 .second1 .secondSenven ul").eq($index).css("display","block").siblings().css("display","none");
 	})
	/*--main2 secondSix区域hover--*/


/*---main2 second部分-----*/
	
	
	
	
	/****cookie部分***/
	
		var myUserName = "myUserName";
		var myPwd = "myPwd"
		var isLogin = "isLogin";
		//alert(getCookie(isLogin));
		if(getCookie(isLogin) == 1){
			var userName = getCookie(myUserName);
			$("#useInfo").html('欢迎您,' + userName + '|<a href="javascript:void(0)" id="cancel">退出</a>');
			$("#userPwd").show();
		}else{
			$("#useInfo").html('<a href="login.html">登录</a>|<a href="register.html">注册</a>');
			$("#{userPwd").hide();
		}
		$("#cancel").on("click",function(){
			if(getCookie(isLogin) == 1){
				updateCookie(isLogin,"0");
				window.location = "index.html"
			}
		})
	
	
	
	/****cookie部分***/	
		
	
	
	
	
	
});



/*--------------封装区--------------------*/


/*---背景色保持---*/
	function getBackground($ele,$eleFind,elemeA,elemeB,elemeC){
	$ele.mouseover(function(){
		$eleFind.css(elemeA,elemeB);
	});
	$ele.mouseout(function(){
		$eleFind.css(elemeA,elemeC);
	});
	
}
/*---背景色保持---*/

/*---出现影藏图形---*/
	function getPic($ele,$eleFind){
	$ele.hover(function(){
		$eleFind.css("display","block").hover(function(){
			$(this).css("display","block");
			
		},function(){
			$(this).css("display","none");
		})
	},function(){
		$eleFind.css("display","none");
	})
}
/*---出现影藏图形---*/


/*---设定定时器--- */
	function setTime(index){
		abc();//先调用计时器，让其在页面加载完之后立即执行一次
		var timer = setInterval(abc,4000)	
		function abc(){
			if(index > 4 ){
				index = 0;
			}
			
			$("#main1 .bigTu .bigPic").eq(index).show().siblings().hide();
			$("#main1 .smallTu .smallPic").eq(index).show().siblings().hide();
			$("#headDi #ballTi li").eq(index).css("background-color","mediumvioletred").siblings().css("background-color","white");
			
			index++;
		}
	
}	
/*---设定定时器--- */



/*---图片抖动---*/
	function sharkePic($ele,keyValue1,keyValue2){
	$ele.hover(function(){
		$(this).stop().animate(keyValue1,200)
	},function(){
		$(this).stop().animate(keyValue2,200);
	})
}
/*---图片抖动---*/

/*--图片覆盖--*/
	function coverPic($ele,element1,element2){
	$ele.hover(function(){
		$(this).find(element1).css("display","block");
		$(this).find(element2).css("display","none");
	},function(){
		$(this).find(element1).css("display","none");
		$(this).find(element2).css("display","block");
	})
}
/*--图片覆盖--*/



			
/*--------------封装区--------------------*/		

