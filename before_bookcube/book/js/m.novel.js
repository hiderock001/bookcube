require(["jquery", "bookcube"], function($, bc){
	$(function(){
		//header 슬라이드 메뉴
		$(".snb ul li:nth-child(4)").on("click",function(){
			$(".slideOverlay").show();
			$(".slideMenu").animate({
				right : 0	
			},200,"swing",function(){
				$(".slideOverlay").on("click",function(){
					$(".slideOverlay").hide();
					$(".slideMenu").animate({
						right : -100+"%"	
					},200,"swing");
				});		
			});
		});
		
		// footer 공지사항
		var list = $(".notice_list");
		$(".notice_text:last").prependTo(list);
		$(list).css("margin-top","-29px");
		
		setInterval(function(){
			$(list).animate({
				marginTop:parseInt($(".notice_list:not(:animated)").css("margin-top"))+29+"px"	
			},400,"linear",function(){
				$(list).css("margin-top","-29px");
				$(".notice_text:last").prependTo(list);
			});
		},3000);
	});
});