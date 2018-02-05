
$(function(){
	var rtab = $(".rtab li a");
	$(rtab).click(function(){
		$(rtab).removeClass("active");
		$(this).addClass("active");
	});
	var tb = $(".tb_top ul li");
	$(tb).click(function(){
		$(tb).removeClass("on");
		$(this).addClass("on");
		return false;
	});
	
});

//공지사항
$(function(){
	var list = $(".notice_list");
	$(".notice_text:last").prependTo(list);
	$(list).css("margin-top","-29px");
	
	setInterval(function(){
		$(list).animate({
			marginTop:parseInt($(".notice_list:not(:animated)").css("margin-top"))+29+"px"	
		},400,"linear",function(){
			$(list).css("margin-top","-29px");
			$(".notice_text:first").appendTo(list);	
		});
	},3000);
});

// 서브 페이지 2015.04.17

$(function(){
	var dt = $(".myreview dt");	
	var dd = $(".myreview dd");

	$(dt).click(function(){
		if($(this).find("span").hasClass("tab_open")){
			$(this).next().fadeOut(100);
			$(this).find("span").removeClass("tab_open");
			
		}
		else{
			$(dd).hide();
			$(dt).find("span").removeClass("tab_open");
			$(this).next().fadeIn(300);
			$(this).find("span").addClass("tab_open");
			
		}
	 });
});

// m_review

$(function(){
	var snsBox = $(".sns_more_box");
	var snsMore = $(".sns_box .more");
	$(snsBox).hide();
	$(snsMore).click(function(){
		if($(this).hasClass("t_on")){
			$(snsBox).slideUp();
			$(this).removeClass("t_on");
			$(this).text("더보기");
		}
		else{
			$(snsBox).slideDown();
			$(this).addClass("t_on");
			$(this).text("닫기");
		}
	});
	
	$(".review_view > div:not(:first)").hide();
	$(".review_tab ul li").click(function() {
		var li_idx = $(this).index();
		$(".review_tab ul li").removeClass("on");
		$(this).addClass("on");
		$(".review_view > div").hide();
		$(".review_view > div").eq(li_idx).show();
	});


	var text = $(".text_area textarea");
	$(text).focus(function(){
		$(this).val("");	
	});

});

$(function(){
	var li = $(".rtab_view ul li");
	var num = $(".rtab_view ul li").find("p").index(2);	
	if(num){
		$(li).css("height","219px");
	}
});

$(function(){
	var all = $("input[name='allcheck']");
	$(all).change(function(){
		var is_check = $(this).is(":checked");
		$(".allChk").prop("checked",is_check);
		$(all).prop("checked",is_check);
	});
});

$(function(){
	$(".mtab li").click(function() {
		var li_idx = $(this).index();
		$(".mtab li").removeClass("on");
		$(this).addClass("on");
		$(".mjoin_wrap > div").hide();
		$(".mjoin_wrap > div").eq(li_idx).show();
	});	
});