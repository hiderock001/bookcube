$(document).ready(function(){

/*
// 상단 셀렉트 리스트 --------------------------------------

	var $btn_head_select = $('.search_area .menulist_face');
	var $lyr_select_list = $('#menulist');
	var $lyr_select_a = $('#menulist ul li a');

	$lyr_select_list.hide();
	$btn_head_select.click(function(){
		$lyr_select_list.toggle();
	});
	$lyr_select_a.click(function(e){
		$lyr_select_list.hide();
		var text = $(this).text();
		$btn_head_select.find('span.inblock').text(text);
		$('input[name=searchOption]').val($(this).attr('data'));
		e.preventDefault();
	});

*/
	// 상세검색 레이어 --------------------------------------
	var $btn_detail_srch = $('input.btn_advanced');
	var $btn_close2 = $('.search_detail .btn_layer_x');
	var $layer_detail_srch = $('.head_box .search_detail');

	$layer_detail_srch.hide();
	$btn_detail_srch.click(function(e){
		$layer_detail_srch.toggle();
		e.preventDefault();
	});
	$btn_close2.click(function(e){
		$layer_detail_srch.hide();
		e.preventDefault();
	});
/*
	$('#SearchString').click(function(){//전체선택 버튼 왼쪽 최상단 checkbox
		$(this).val('');
	});	
*/
	// 전체 카테고리 레이어 --------------------------------------
	var $btn_allcate = $('.gnb_category a.gnb_menu.first');
	var $btn_close = $('.layer_all_category .btn_layer_x');
	var $layer_allcate = $('.layer_all_category');

	$layer_allcate.hide();
	$btn_allcate.click(function(){
		$layer_allcate.toggle();
	});
	$btn_close.click(function(){
		$layer_allcate.hide();
	});

	// 전체 카테고리 레이어(new) --------------------------------------
	var $btn_allcate_new = $('.gnb_category_new a.gnb_menu.first');
	//var $btn_close = $('.layer_all_category .btn_layer_x');
	//var $layer_allcate = $('.layer_all_category');

	$layer_allcate.hide();
	$btn_allcate_new.click(function(){
		$layer_allcate.toggle();
	});
	$btn_close.click(function(){
		$layer_allcate.hide();
	});

	// 지원기기 안내 툴팁 --------------------------------------
	var $btn_tooltip = $('.with_tooltip a.btn.view_tooltip');
	var $btn_tooltip_x = $('.layer_tooltip a.btn.close_x');
	var $layer_tooltip = $('.layer_tooltip.tooltip1');
	$layer_tooltip.hide();
	$btn_tooltip.click(function(e){
		$layer_tooltip.toggle();
		e.preventDefault();
	});
	$btn_tooltip_x.click(function(e){
		$layer_tooltip.hide();
		e.preventDefault();
	});

	// 별점주기 select box 툴팁 --------------------------------------
	/*
	var $btn_star_select = $('.select_star_tit');
	var $layer_star_select = $('.select_star ul');
	var $star_trigger = $('.select_star ul li');
	$layer_star_select.hide();
	$btn_star_select.click(function(){
		$(this).next().toggle();
	});
	$star_trigger.click(function(){
		var index =  $star_trigger.index(this) % 5 + 1; //  나머지값 구해 별점 1~5점만 선택되게
		$layer_star_select.hide();		
		$(this).parent().prev().find('em').replaceWith('<em class="set"><p class="detail_star star'+ index + '"><span class="hide">별점1</span></p></em>');		
	});
	*/


	/* 상세페이지 - 시리즈 전체보기 체크박스 전체 선택 및 해제 */
	/*
	var $check_all = $('a.btn.all_chk');
	var $checkbox_all = $('input#check_all');
	var $uncheck_all = $('a.btn.all_unchk');
	$check_all.click(function(){
		$("input[name=book_chk]").attr("checked",true);
	});
	$uncheck_all.click(function(){
		$("input[name=book_chk]").attr("checked",false);
	});
	$("input[name=book_chk]").click(function(){
		$("input[name=all_chk]").attr("checked",false);
		alert($('input[name=book_chk]:not(:checked)').length);
		alert('ttt');
	});
	$checkbox_all.click(function(){//전체선택 버튼 왼쪽 최상단 checkbox
		if ($(this).is(":checked")){                
			$("input[name=book_chk]:not(:disabled)").attr("checked", true);
		  }else{
			$("input[name=book_chk]").attr("checked", false);
		  }
	 });
	 */

	/* 상세페이지 - 탭메뉴별 컨텐츠 바꾸기 */
	/*
	var $trigger_tab = $(".book_info_tab a");
	var $tab_contents = $(".book_detail_contents div.tab_contents");

	$tab_contents.hide();
	$tab_contents.first().show();
	$trigger_tab.removeClass("on");
	$trigger_tab.first().addClass("on");

	$trigger_tab.click(function(){
		$trigger_tab.removeClass("on");
		$(this).addClass("on");
		$trigger_tab.each(function(i){
			if($trigger_tab.eq(i).hasClass("on"))
			{
				$tab_contents.hide();
				$tab_contents.eq(i).show();
			} else {
				$tab_contents.eq(i).hide();
			}
		});
	}); 
*/
	/* 이벤트 롤링 */
	/*
	function tick(){
		$('#ticker li:first').slideUp( function () { $(this).appendTo($('#ticker')).slideDown(); });
	}
	setInterval(function(){ tick () }, 3500);
*/
	/* 서평쓰기 */
	/*
	var $btn_review = $('#write_review');
	var $hide_content = $('.hide_content');
	var $layer_write_review = $('.border_type3.write_review_wrap');
	$layer_write_review.hide();
	$btn_review.click(function(){
		$hide_content.hide();
		$layer_write_review.show();
	});
	*/

	// 쿠폰 결제

	var cPop = $(".coupon_pop");
	var cSel = $(".coupon_select");
	var cClose = $(".coupon_pop_close");
	var sPop = $(".story_coupon_pop");
	var sSel = $(".story_coupon_select");
	var sClose = $(".story_coupon_pop_close");
	var cApply = $(".couponApply");
	var cApply2 = $(".couponApply2");
	cSel.click(function(){
		$(cPop).fadeIn();
		return false;
	});
	cClose.click(function(){
		$(cPop).fadeOut();	
	});

	cApply.click(function(){
		var coupon_num 		= $(':radio[name="couponSelect"]:checked');
		if (coupon_num.length < 1){alert('쿠폰을 선택해주세요');return false}
		
		//재계산을 돌려준다. 각 결제 페이지에 위치
		recalculation(coupon_num.val());
		
		$(cPop).fadeOut();		
	});
	sSel.click(function(){
		$(sPop).fadeIn();
		return false;
	});
	sClose.click(function(){
		$(sPop).fadeOut();	
	});
	cApply2.click(function(){
		var coupon_num 		= $(':radio[name="couponSelect"]:checked');
		if (coupon_num.length < 1){alert('쿠폰을 선택해주세요');return false}
		
		//재계산을 돌려준다. 각 결제 페이지에 위치
		recalculation(coupon_num.val());
		$(sPop).fadeOut();		
	});

	/* 주문내역 리스트 slide_down */
	var $btn_bookname = $('table a.book_name');
	var $show_tr = $('tr.dwon_tr');
	$show_tr.hide();
	$btn_bookname.click(function(e){
		$(this).parent().parent().next().toggle();
		e.preventDefault();
	});

	/* 로그인페이지에서 input type text를 password로 변환 */
	$('.pwd').click(function(){
	  $(this).get(0).type='password';
	});

	if(jQuery.browser.version == '7.0'){
		/* 독점연재 구매 오버레이 팝업 */
		$("a.pay_pop[rel]").overlay();

		/* 회원가입 아이디 체크 */
		$("a.mem_id_chk[rel]").overlay();

		/* 회원가입 닉네임 체크 */
		$("a.mem_nick_chk[rel]").overlay();

		/* 회원가입 닉네임 체크 */
		$("a.mem_zipcode_chk[rel]").overlay();

		/* 스토리큐브-나의활동-임시저장글보기 2013-11-12추가 */
		$("a.view_my_post[rel]").overlay();

		/* facebook로그인 체크 */
		$("a.mem_facebook_chk[rel]").overlay();

		/* twitter 로그인 체크 */
		$("a.mem_twitter_chk[rel]").overlay();

		/* sns 공유 안내 체크 */
		$("a.mem_sns_chk[rel]").overlay();
	}else{
		/* 독점연재 구매 오버레이 팝업 */
		$("a.pay_pop[rel]").overlay({
			mask: '#333'
		});

		/* 회원가입 아이디 체크 */
		$("a.mem_id_chk[rel]").overlay({
			mask: '#333'
		});

		/* 회원가입 닉네임 체크 */
		$("a.mem_nick_chk[rel]").overlay({
			mask: '#333'
		});

		/* 회원가입 닉네임 체크 */
		$("a.mem_zipcode_chk[rel]").overlay({
			mask: '#333'
		});

		/* 스토리큐브-나의활동-임시저장글보기 2013-11-12추가 */
		$("a.view_my_post[rel]").overlay({
			//mask: '#333'
		});

		/* facebook로그인 체크 */
		$("a.mem_facebook_chk[rel]").overlay({
			mask: '#333'
		});

		/* twitter 로그인 체크 */
		$("a.mem_twitter_chk[rel]").overlay({
			mask: '#333'
		});

		/* sns 공유 안내 체크 */
		$("a.mem_sns_chk[rel]").overlay({
			mask: '#333'
		});		
	}
	/* FAQ - 자주찾는질문 */
	/*
	var $faq_q = $('table tr.faq_q');
	var $faq_a = $('table tr.faq_a');
	$faq_a.hide();
	$faq_a.first().show();
	$faq_q.click(function(){
		$(this).next().toggle();
	});
	*/

	/* 고객센터 파일찾기 input 투명처리 */
	var $input_file = $('.btn_file_container input.input_file');
	$input_file.css({opacity:0});

	/* main ----------------------- */
	/* 인기검색어 */
	/*
	var $bt_pop_srch = $('.popular_search a.btn_popular');
	var $lyr_popular = $('.popular_search .popular_srch_lyr');
		$lyr_popular.hide();	
		$bt_pop_srch.hover(function(){
			$lyr_popular.toggle();
		});
		$lyr_popular.hover(function(){
			$lyr_popular.toggle();
		});
	*/

	/* 화제의 전자책 */
	var $bt_pop_book = $('#main .topic_area .btn_slide a');
	var $lyr_slide_book = $('#main .topic_area ul.type_list.thumbnail');
	$bt_pop_book.click(function(e){
		$bt_pop_book.removeClass('on');
		$(this).addClass('on');
		e.preventDefault();
	});

//	 이용안내 - 탭메뉴별 컨텐츠 바꾸기 */
	
//	var $guide_tab = $(".guide .faq_menu li");
//	var $guide_contents = $(".gudie_contents");

//	$guide_contents.hide();
//	$guide_contents.first().show();
//	$guide_tab.removeClass("on");
//	$guide_tab.first().addClass("on");

//	$guide_tab.click(function(){
//		$guide_tab.removeClass("on");
//		$(this).addClass("on");
//		$guide_tab.each(function(i){
//			if($guide_tab.eq(i).hasClass("on"))
//			{
//				$guide_contents.hide();
//				$guide_contents.eq(i).show();
//			} else {
//				$guide_contents.eq(i).hide();
//			}
//		});
//	});
	

	/* 메인 - 베스트 신간 탭메뉴 바꾸기 */
	/*
	var $main_tab = $("#main .list_tab_menu a");
	var $main_contents = $("#main .list_contents_wrap");

	$main_contents.hide();
	$main_contents.first().show();
	$main_tab.removeClass("on");
	$main_tab.first().addClass("on");

	$main_tab.click(function(){
		$main_tab.removeClass("on");
		$(this).addClass("on");
		$main_tab.each(function(i){
			if($main_tab.eq(i).hasClass("on"))
			{
				$main_contents.hide();
				$main_contents.eq(i).show();
			} else {
				$main_contents.eq(i).hide();
			}
		});
	}); 
	*/

/*	
	// 상단 셀렉트 리스트 --------------------------------------
	var $date_select = $('.select_style .select_face');
	var $lyr_date_list = $('.select_list');
	var $lyr_date_li = $('.select_list li');

	$lyr_date_list.hide();
	$date_select.click(function(e){
		$(this).next().toggle();
		e.preventDefault();
	});
	$lyr_date_li.click(function(e){
		$lyr_date_list.hide();
		var txt= $(this).text();
		$(this).parent().parent().find('.select_face span').text(txt);
		if($(this).parent().parent().hasClass('year')){
			$('form[name=frmRecommend]').find('input[name=view_year]').val(parseInt(txt));
		}else{
			$('form[name=frmRecommend]').find('input[name=view_month]').val(parseInt(txt));
		}
		e.preventDefault();
	});
*/
	// right_quick
	/*
	var currentPosition = parseInt($("#right_quick").css("top")); 
	$(window).scroll(function() {
		var position = $(window).scrollTop();
		var footer_posi = $("#footer").offset().top ;

		if( position < footer_posi - 200 ) {
			$("#right_quick").stop().animate({"top":position+currentPosition+"px"},1000);
		} else {
			$("#right_quick").stop().animate({"top":footer_posi-200 +"px"},1000);
		}
	});
	*/
	
// [스토리큐브 - 2013.10.31 추가 (변혜란) ---------------------------------------------------------------------------------------------
	// 헤드 select 부분과 기타 게시판 select 부분 공통으로 변경
	var $btn_head_select = $('.menulist_face');
	var $lyr_select_list = $('.menulist');
	var $lyr_select_a = $('.menulist ul li a');

	$lyr_select_list.hide();
	$btn_head_select.click(function(){
			$(this).next().toggle();
	});
	$lyr_select_list.each(function(i){
		$lyr_select_a.click(function(e){

			$lyr_select_list.hide();

			var text = $(this).text();
			var $change_txt = $(this).parent().parent().parent().parent().find('p.menulist_face span.inblock').text(text);
			var $header_searchoption = $('form[name=searchFrm] input[name=searchOption]').val($(this).attr('data'));
			$change_txt.val($(this).attr('data'));
			e.preventDefault();
		});
	});

	// 댓글달기
	$('.guide_msg').click(function(){
		$(this).hide();
		$('.input_comment').focus();
	});

	//쪽지 발송
	$('.btn_send_note_submit').click(function(e) {

		//$('.in_lyr').hide();

		e.preventDefault();

		var objFrm = $("#popup_send_frm") ;

		var to_member_num = $("input[name=to_member_num]",objFrm);
		var to_title = $("input[name=to_title]",objFrm);
		var to_content = $("textarea[name=message_to_msg]",objFrm);

		if (to_member_num.val() == ""){ alert('잘못된 요청입니다.'); $('.in_lyr').hide(); return ;	}
		if (to_title.val() == ""){ alert('제목을 입력해주세요.'); to_title.focus(); return ;	}
		if (to_content.val() == ""){ alert('내용을 입력해주세요.'); to_content.focus(); return ;	}

		$.ajax({
			url : '/storycube/common/_message_process.asp',
			data : objFrm.serialize(),
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				alert(data.message);
			},
			error : function(){
				alert('쪽지 발송이 실패하였습니다.');				
			}
		});	
		
		$('.in_lyr').hide();
				
	});
	

	//쪽지 삭제 (팝업)
	$('.messate_del_note').click(function(e) {
		var del_msg_num = $("input[name=msg_num]","#popup_view_frm").val();

		message_del(del_msg_num);

		$('.in_lyr').hide();
	});

	$('.btn_send_note_hide').click(function(){
		$('.in_lyr').hide();
	});

	$('input.btn_del').click(function(){
		$(this).parent().parent().parent().parent().parent().next().show();
	});

	$('.in_lyr .btn_layer_x').click(function(){
		$('.in_lyr').hide();
	});

	$('#message_to_msg').keyup(function(){
		lenLimit2( $("#message_to_msg"), 400, 'orange');
	});
});

// 2015-04  리뉴얼
// GNB 이미지 체인지

$(function(){

	// 메인 배너 닫기
	$(".bannerClose").click(function(){
		$(".head_banner").slideUp(200);	

		var today = new Date();
		var strDate = (today.getFullYear() * 100 + today.getMonth() + 1) * 100;
		strDate = strDate + today.getDate();
		strHour = today.getHours();		

		if (strDate == '20150724'){
			$.cookie('head_banner0724', 'done', {path : '/', expires : 1});			
		}else if (strDate == '20150717'){
			$.cookie('head_banner0717', 'done', {path : '/', expires : 1});
		}else{
			$.cookie('head_banner0718', 'done', {path : '/', expires : 1});
		}
		
	});
	// 메인 배너 닫기
	$(".bannerClose").click(function(){
		$(".head_banner").slideUp(200);		
	});
	$(".lnb_left li").click(function(){
		$(".lnb_left li").removeClass("lnb_on");
		$(this).addClass("lnb_on");
	});


	// 전체 카테고리 보이기 숨기기.

	$(".all_category").click(function(){
		$(".allCate_view").toggle();	
	});
	$(".all_close").click(function(){
		$(this).parent().parent().hide();	
	});
	// 헤더 셀렉트박스 보이기,숨기기. text 바꾸기.
	$(".select").click(function(){
		$(".selectList").toggle();	
	});
	$(".selectList li").click(function(){
		var sText = $(".select > p");
		var $data_val = $(this).attr('data') ;
		$(sText).text($(this).text());
		$("#searchOption").val($data_val);
	});

	// 베스트 카테고리 주황색 포인트 주기
	$(".best_cate li").mouseenter(function(){
		$(".best_cate li").removeClass("best_on");
		$(this).addClass("best_on");
	});

	

});

// 오늘의 추천
$(function(){
	$(".tBook_op").css("opacity",".6");	
	$(".tBook_op, .tBook_text").hide();
	$(".tBook_list li").each(function() {
		$(this).hover(function() {
			$(this).children(".tBook_op").stop(true, true).fadeIn(500);
			$(this).children(".tBook_text").stop(true, true).fadeIn(300);
		},
		function() {
			$(this).find(".tBook_op, .tBook_text").stop(true, true).fadeOut(500);
		});
	});
});

	// 메인 이벤트 슬라이드
$(function(){
	var event = $(".event");
	var maLeft = "margin-left";
	if($(".event li").length > 3){
		$(".eventPage:last").prependTo(event);
		$(event).css("margin-left","-279px");
	}
	$(".prev_btn").click(function(){
		$(event).animate({
			marginLeft:parseInt($(".event:not(:animated)").css(maLeft))+279+"px"	
		},200,function(){
			$(event).css(maLeft,"-279px");
			$(".event_page:last").prependTo(event);	
		});	
	});
	$(".next_btn").click(function(){
		$(event).animate({
			marginLeft:parseInt($(".event:not(:animated)").css(maLeft))-279+"px"	
		},200,function(){
			$(event).css(maLeft,"-279px");
			$(".event_page:first").appendTo(event);	
		});	
	});	
});



//테마관,브랜드관
$(function(){
	$(".tbZone_view > div:not(:first)").hide();
	$(".tbZone_list li").mouseenter(function(evt) {
		var li_idx = $(this).index();
		console.log(li_idx);
		$(".tbZone_view > div").hide();
		$('.tbZone_view > div').eq(li_idx).show();
	});
	var onBtn=$(".tbZone_list li:first"); 
	$(".tbZone_list li").mouseenter(function(){
		$(".tbZone_list li").removeClass("on");
		$(this).addClass("on");	
	    
		$("img",onBtn).attr("src",
		$("img",onBtn).attr("src").replace("_on.png",".png"));
		$("img",this).attr("src",
        $("img",this).attr("src").replace(".png","_on.png"));
		onBtn=$(this);
	});


});

// 메인 베스트 탭메뉴
$(function(){
	$(".best_box > div:not(:first)").hide();
	$(".best_cate li").mouseenter(function(evt) {
		var li_idx = $(this).index();
		$(".best_box > div").hide();
		$('.best_box > div').eq(li_idx).show();
	});
});



// 리얼장르 슬라이드
function BannerSlider()
{

	this.BANNER_WIDTH = 836;
	this.SHOW_DURATION = 1000; 
	this.$banner_content=null;
	this.nBannerLength = 0;
	this.nCurrentBannerIndex = 0;
	this.$banner_dots=null;
	this.autoTImerID=0;
}




BannerSlider.prototype.initMenu=function(){
	
	this.$banner_content = $("#real_slide_content");
	this.nBannerLength = this.$banner_content.children("a").length;
	this.$banner_content.width(this.BANNER_WIDTH * this.nBannerLength);
	this.$banner_dots = $("");	
}


BannerSlider.prototype.initEventListener=function(){
	var objThis = this;
	$(".real_prev").bind("click", function(){
		objThis.prevBanner();
	});
	$(".real_next").bind("click", function(){
		objThis.nextBanner();
	});
	
}

BannerSlider.prototype.prevBanner=function(){
	var nIndex = this.nCurrentBannerIndex-1;
	if(nIndex<0)
		nIndex = this.nBannerLength-1;
	this.showBannerAt(nIndex);			
}


BannerSlider.prototype.nextBanner=function()
{
	var nIndex = this.nCurrentBannerIndex+1;
	if(nIndex>=this.nBannerLength)
		nIndex = 0;
	this.showBannerAt(nIndex);	
}

BannerSlider.prototype.showBannerAt=function(nIndex){
	if (nIndex != this.nCurrentBannerIndex) {
		var nPosition = -this.BANNER_WIDTH * nIndex;
		this.showBannerDotAt(nIndex);
		this.$banner_content.stop();
		this.$banner_content.animate({
			left: nPosition
		}, this.SHOW_DURATION, "easeOutQuint");
		
		this.nCurrentBannerIndex = nIndex;
	}
}



BannerSlider.prototype.showBannerDotAt=function(nIndex){
	this.$banner_dots.eq(this.nCurrentBannerIndex).removeClass("");
	this.$banner_dots.eq(nIndex).addClass("");
}

// 리얼 슬라이드 등록한 이미지 2개 이상일 경우만 좌우 화살표 노출

$(function(){
	var le = $("#real_slide_content").children("a");	
	if(le.length <= 1){
		$(".real_prev, .real_next").css("display","none");
	}else{
		$(".real_prev, .real_next").css("display","block");	
	}
});

$(function(){
	$(".s_star").hide();	
	$(".review_star").click(function(){
		$(".s_star").toggle();
	});
	$(".s_star li").click(function(){
		var starP = $(".review_star p");
		$(this).parent().hide();
		for(i=1; i<6; i++){
			$(starP).removeClass("on"+ i);
			if($(this).children().hasClass("star" + i)){
				$(starP).addClass("on" + i);
				$("#review_point").val(i);
			}
		}
	});
});
$(function(){
	$(".mo_s_star").hide();	
	$(".mo_review_star").click(function(){
		$(".mo_s_star").toggle();
	});
	$(".mo_s_star li").click(function(){
		var starP = $(".mo_review_star p");
		$(this).parent().hide();
		for(i=1; i<6; i++){
			$(starP).removeClass("on"+ i);
			if($(this).children().hasClass("star" + i)){
				$(starP).addClass("on" + i);
			}
		}
	});
});

$(function(){
	$(".sort").click(function(){
		if($(this).hasClass("ascend")){
			$(this).removeClass("ascend");
			$(this).addClass("descend");
		}else{
			$(this).removeClass("descend");
			$(this).addClass("ascend");
		}
		return false;
	});	
});



$(function(){
	$(".gudie_contents:not(:first)").hide();
	for(i=0; i<6; i++){
		$(".faq_menu ul li").eq(i).click(function(){
			var li_idx = $(this).index();
			$(".faq_menu ul li").removeClass("on");
			$(this).addClass("on");
			$(".gudie_contents").hide();
			$('.gudie_contents').eq(li_idx).show();	
		});
	}
});

function chk_display(){
	var chk = $("input[name=writerEpil]:checked").val();
	if(chk == 1 ){
		$(".text_box").css("display","block");
	}else{
		$(".text_box").css("display","none");
	}	
}
function apply_display(){
	var chk = $("input[name=applyDate]:checked").val();
	if(chk == 1 ){
	
	}else{
		
	}	
}


// 업로드 툴 달력

$(function() {
	$("#date").datepicker({
		position:"bottom",
		futureOnly:true
	});
});



$.fn.extend({
	datepicker: function(option) {
		var setting = {
			position: "right",
			dateSpliter: '-', 
			style: null,
			futureOnly: false
		};

		if (option && typeof(option.position) != "undefined") {
			setting.position = option.position;
		}
		if (option && typeof(option.dateSpliter) != "undefined") {
			setting.dateSpliter = option.dateSpliter;
		}
		if (option && typeof(option.futureOnly) != "undefined") {
			setting.futureOnly = option.futureOnly;
		}
		if (option && typeof(option.style) != "undefined") {
			setting.style = option.style;
		}
		
		$("body").click(function() {
			$(".datepicker").remove();
		});

		//클릭 이벤트
		$(this).click(function(e) {
			e.stopPropagation();

			var p = $(this).position();

			if (setting.position == "right") {
				setting.top = p.top + parseInt($(this).css("margin-top").replace("px", ""));
				setting.left = p.left + $(this).outerWidth() + 5;
			}
			else {
				setting.top = p.top + parseInt($(this).css("margin-top").replace("px", "")) + $(this).outerHeight() + 5;
				setting.left = p.left;
			}
			
			drawCalendar(this);	
		});
		
		//달력 그리기
		function drawCalendar(obj, view_date) {
			//전에 그려진 달력 지움
			$(".datepicker").remove();
			
			var table =	$("<table>").append(
				$("<thead>").append(
					$("<tr>")
						.append($("<th id='th'>").text("일"))
						.append($("<th id='th'>").text("월"))
						.append($("<th id='th'>").text("화"))
						.append($("<th id='th'>").text("수"))
						.append($("<th id='th'>").text("목"))
						.append($("<th id='th'>").text("금"))
						.append($("<th id='th'>").text("토"))
				)
			);
			
			if (!view_date) {
				view_date = new Date();
			}

			//달력의 시작일
			var first_date = new Date(view_date.getFullYear(), view_date.getMonth(), 1);
			var start_date = new Date(first_date.getTime());

			//시작일의 요일
			var first_day = start_date.getDay();

			//시작일이 일요일이 되도록 조정
			start_date.setDate(start_date.getDate() - first_day);

			//달력의 마지막일
			var end_date = new Date(view_date.getFullYear(), view_date.getMonth() + 1, 0);
			
        	//달력에 노출될 날짜 수 (7의 배수)
        	var day_total = end_date.getDate() + first_day;
        	var day_supply = 7 - (end_date.getDate() + first_day) % 7;
        	if (day_supply < 7) {
        		day_total += day_supply;
        	}

	        var tbody = $("<tbody>");
        	
        	//달력 배열 만듬
        	var today = new Date();
			var date = new Date(start_date.getTime());
	        var calendar = [];
	        for (var i = 0; i < day_total; i++) {
	        	calendar[i] = {
	        		date: date.getFullYear() + (date.getMonth() + 1).pad(2) + date.getDate().pad(2),
	        		text: date.getDate()
        		}
        		;
	        	//과거 날짜 처리
	        	if (setting.futureOnly === true && date.toYmdDateString() < today.toYmdDateString()) {
	        		calendar[i].past_day = true;	
	        	} 	

	            date.setDate(date.getDate() + 1);
	        }
	        
    		var str_compare = view_date.getFullYear() + (view_date.getMonth() + 1).pad(2);
    		var idx_calendar;
    		if (setting.style) {
    			if (setting.style.length) {
		        	$.each(setting.style, function(i, b) {
						if (b.date.substring(0, 6) == str_compare) {
							idx_calendar = first_day + parseInt(b.date.substring(6, 8)) - 1;
							calendar[idx_calendar].color = b.color;
							calendar[idx_calendar].background_color = b.background_color;
							calendar[idx_calendar].tooltip = b.tooltip;
						}        		
		        	});
    			}
    			else {
					if (setting.style.date.substring(0, 6) == str_compare) {
						idx_calendar = first_day + parseInt(setting.style.date.substring(6, 8)) - 1;
						calendar[idx_calendar].color = setting.style.color;
						calendar[idx_calendar].background_color = setting.style.background_color;
						calendar[idx_calendar].tooltip = setting.style.tooltip;
					}        		
	        	}
			}
			        	
	        //클릭 이벤트를 만들기 위해 배열을 가지고 each문을 돌림
	        var tr, td;
	        $.each(calendar, function(i, c) {
	        	if (i % 7 == 0) {
	        		tr = $("<tr>");
	        	}
	        	
	        	td = $("<td>").text(c.text);
    			
    			if (c.past_day === true) {
    				td.addClass("past_day");
    			}
    			else {
		        	td.click(function() {
	    				$(obj).val(c.date.datespliter(setting.dateSpliter));
	    				$(".datepicker").remove();
	    			});    				
    			}
    			
    			if (c.color) {
    				td.css("color", c.color);
				}

    			if (c.background_color) {
    				td.css("background-color", c.background_color);
				}
				
				if (c.tooltip) {
					td.attr("title", c.tooltip);
    			}
    			
	        	tr.append(td);
	        	
	        	if (i % 7 == 6) {
	        		tbody.append(tr);
	        	}
	        });
			table.append(tbody);

			var div = $("<div>").addClass("datepicker").css({
				top: setting.top,
				left: setting.left			
			}).append(
				$("<div>").append(
					$("<span>").text(view_date.getFullYear() + "년 ")
				).append(
					$("<a class='date_left'>").text("<").attr("href", "#").click(function() {
						var move_date = new Date(view_date.getTime());
						move_date.setMonth(move_date.getMonth() - 1);
						drawCalendar(obj, move_date);
						
						return false;
					})
				).append(
					$("<span>").text(" " + (view_date.getMonth() + 1) + "월 ")
				).append(
					$("<a class='date_right'>").text(">").attr("href", "#").click(function() {
						var move_date = new Date(view_date.getTime());
						move_date.setMonth(move_date.getMonth() + 1);
						drawCalendar(obj, move_date);
						
						return false;
					})
				)
			).append(table);

			$(obj).after(div);
			
			$(".datepicker").click(function(e) {
				e.stopPropagation();
			});
		}
	}
});

Number.prototype.pad = function(len) {
	return ('0' + this).slice(-len);
};


String.prototype.datespliter = function(datespliter) {
	return this.substring(0, 4) + datespliter + this.substring(4, 6) + datespliter + this.substring(6, 8);
};


Date.prototype.toYmdDateString = function() {
	return this.getFullYear().toString() + (this.getMonth() + 1).pad(2) + this.getDate().pad(2);
};


$(function() {
	$("#date2").datepic({
		position:"bottom",
		futureOnly:true
	});
});
$.fn.extend({
	datepic: function(option) {
		var setting = {
			position: "right",
			dateSpliter: '-', 
			style: null,
			futureOnly: false
		};

		if (option && typeof(option.position) != "undefined") {
			setting.position = option.position;
		}
		if (option && typeof(option.dateSpliter) != "undefined") {
			setting.dateSpliter = option.dateSpliter;
		}
		if (option && typeof(option.futureOnly) != "undefined") {
			setting.futureOnly = option.futureOnly;
		}
		if (option && typeof(option.style) != "undefined") {
			setting.style = option.style;
		}
		
		$("body").click(function() {
			$(".datepicker").remove();
		});

		//클릭 이벤트
		$(this).click(function(e) {
			e.stopPropagation();

			var p = $(this).position();

			if (setting.position == "right") {
				setting.top = p.top + parseInt($(this).css("margin-top").replace("px", ""));
				setting.left = p.left + $(this).outerWidth() + 5;
			}
			else {
				setting.top = p.top + parseInt($(this).css("margin-top").replace("px", "")) + $(this).outerHeight() + 5;
				setting.left = p.left;
			}
			
			drawCalendar(this);	
		});
		
		//달력 그리기
		function drawCalendar(obj, view_date) {
			//전에 그려진 달력 지움
			$(".datepicker").remove();
			
			var table =	$("<table>").append(
				$("<thead>").append(
					$("<tr>")
						.append($("<th id='th'>").text("일"))
						.append($("<th id='th'>").text("월"))
						.append($("<th id='th'>").text("화"))
						.append($("<th id='th'>").text("수"))
						.append($("<th id='th'>").text("목"))
						.append($("<th id='th'>").text("금"))
						.append($("<th id='th'>").text("토"))
				)
			);
			
			if (!view_date) {
				view_date = new Date();
			}

			//달력의 시작일
			var first_date = new Date(view_date.getFullYear(), view_date.getMonth(), 1);
			var start_date = new Date(first_date.getTime());

			//시작일의 요일
			var first_day = start_date.getDay();

			//시작일이 일요일이 되도록 조정
			start_date.setDate(start_date.getDate() - first_day);

			//달력의 마지막일
			var end_date = new Date(view_date.getFullYear(), view_date.getMonth() + 1, 0);
			
        	//달력에 노출될 날짜 수 (7의 배수)
        	var day_total = end_date.getDate() + first_day;
        	var day_supply = 7 - (end_date.getDate() + first_day) % 7;
        	if (day_supply < 7) {
        		day_total += day_supply;
        	}

	        var tbody = $("<tbody>");
        	
        	//달력 배열 만듬
        	var today = new Date();
			var date = new Date(start_date.getTime());
	        var calendar = [];
	        for (var i = 0; i < day_total; i++) {
	        	calendar[i] = {
	        		date: date.getFullYear() + (date.getMonth() + 1).pad(2) + date.getDate().pad(2),
	        		text: date.getDate()
        		}
        		;
	        	//과거 날짜 처리
	        	if (setting.futureOnly === true && date.toYmdDateString() <= today.toYmdDateString()) {
	        		calendar[i].past_day = true;	
	        	} 	

	            date.setDate(date.getDate() + 1);
	        }
	        
    		var str_compare = view_date.getFullYear() + (view_date.getMonth() + 1).pad(2);
    		var idx_calendar;
    		if (setting.style) {
    			if (setting.style.length) {
		        	$.each(setting.style, function(i, b) {
						if (b.date.substring(0, 6) == str_compare) {
							idx_calendar = first_day + parseInt(b.date.substring(6, 8)) - 1;
							calendar[idx_calendar].color = b.color;
							calendar[idx_calendar].background_color = b.background_color;
							calendar[idx_calendar].tooltip = b.tooltip;
						}        		
		        	});
    			}
    			else {
					if (setting.style.date.substring(0, 6) == str_compare) {
						idx_calendar = first_day + parseInt(setting.style.date.substring(6, 8)) - 1;
						calendar[idx_calendar].color = setting.style.color;
						calendar[idx_calendar].background_color = setting.style.background_color;
						calendar[idx_calendar].tooltip = setting.style.tooltip;
					}        		
	        	}
			}
			        	
	        //클릭 이벤트를 만들기 위해 배열을 가지고 each문을 돌림
	        var tr, td;
	        $.each(calendar, function(i, c) {
	        	if (i % 7 == 0) {
	        		tr = $("<tr>");
	        	}
	        	
	        	td = $("<td>").text(c.text);
    			
    			if (c.past_day === true) {
    				td.addClass("past_day");
    			}
    			else {
		        	td.click(function() {
	    				$(obj).val(c.date.datespliter(setting.dateSpliter));
	    				$(".datepicker").remove();
	    			});    				
    			}
    			
    			if (c.color) {
    				td.css("color", c.color);
				}

    			if (c.background_color) {
    				td.css("background-color", c.background_color);
				}
				
				if (c.tooltip) {
					td.attr("title", c.tooltip);
    			}
    			
	        	tr.append(td);
	        	
	        	if (i % 7 == 6) {
	        		tbody.append(tr);
	        	}
	        });
			table.append(tbody);

			var div = $("<div>").addClass("datepicker").css({
				top: setting.top,
				left: setting.left			
			}).append(
				$("<div>").append(
					$("<span>").text(view_date.getFullYear() + "년 ")
				).append(
					$("<a class='date_left'>").text("<").attr("href", "#").click(function() {
						var move_date = new Date(view_date.getTime());
						move_date.setMonth(move_date.getMonth() - 1);
						drawCalendar(obj, move_date);
						
						return false;
					})
				).append(
					$("<span>").text(" " + (view_date.getMonth() + 1) + "월 ")
				).append(
					$("<a class='date_right'>").text(">").attr("href", "#").click(function() {
						var move_date = new Date(view_date.getTime());
						move_date.setMonth(move_date.getMonth() + 1);
						drawCalendar(obj, move_date);
						
						return false;
					})
				)
			).append(table);

			$(obj).after(div);
			
			$(".datepicker").click(function(e) {
				e.stopPropagation();
			});
		}
	}
});

Number.prototype.pad = function(len) {
	return ('0' + this).slice(-len);
};


String.prototype.datespliter = function(datespliter) {
	return this.substring(0, 4) + datespliter + this.substring(4, 6) + datespliter + this.substring(6, 8);
};


Date.prototype.toYmdDateString = function() {
	return this.getFullYear().toString() + (this.getMonth() + 1).pad(2) + this.getDate().pad(2);
};


// 가격수정 팝업창

$(function(){
	$("#pop_display").click(function(){
		$(".pop_modify").fadeIn();	
	});	
	$(".xclose").click(function(){
		$(".pop_modify").fadeOut();			
	});
	$(".cash_del").click(function(){
		var delYes = confirm("가격정보를 삭제하시겠습니까?");
		if(delYes){

		}
		return false;
	});
});



// 웹툰
$(function(){
	var li = $(".day_select li");
	$(".day_select li.on").children().next().show();
	$(li).click(function(){
		var lix= $(this).index();
		$(li).removeClass("on");
		$(this).addClass("on");
		$(li).children().next().hide();
		if($(li).hasClass("on")){
			$(this).children().next().show();
		}
		$(".ahead_list").removeClass("on");
		$(".ahead_list").eq(lix).addClass("on");
		return false;
	});
});

// 마이페이지 팝업창
$(function(){
	var book = $(".bookcashPop");
	var save = $(".savePop");
	var gift = $(".giftPop");
	var coupon = $(".couponPop");
	var mpopImg = $(".mpop_top img");
	
	$(".pop_book tr td:nth-child(2),.pop_save tr td:nth-child(2), .pop_gift tr td:nth-child(2), .pop_coupon tr td:nth-child(2)").css({"font-weight":"bold","color":"#46474b"});
	$(".pop_coupon tr td:nth-child(1)").css({"font-weight":"bold","color":"#46474b","text-align":"left","padding-left":"10px"});
	$(".pop_coupon tr td:nth-child(3)").css({"text-align":"left","pading-left":"10px"});
	
	$(book).click(function(){
		$(".pop_book").fadeIn();
	});
	$(save).click(function(){
		$(".pop_save").fadeIn();
	});
	$(gift).click(function(){
		$(".pop_gift").fadeIn();
	});
	$(coupon).click(function(){
		$(".pop_coupon").fadeIn();	
	});
	$(mpopImg).click(function(){
		$(".mpop").fadeOut();	
	});;
});


// 웹툰
$(function(){
	var wtDate = $(".day_select li");
	
	$(wtDate).click(function(){
		$(wtDate).removeClass("on");
		$(this).addClass("on");
	});
	
});
// 웹툰 슬라이드

$(function(){
	var banner = $(".wtBanner");
	var maLeft = "margin-left";
	var wt = $(".wtBanner li");
	if($(".wtBanner li").length > 3){
		$(".bannerView > img").show();
		$(".bannerPage:last").prependTo(banner);
		$(banner).css("margin-left","-283px");
	}
	$(wt).eq(1).children().next().css("background","#21447a");
	$(wt).eq(1).children().children().addClass("ho_br");
	$(".prevBtn").click(function(){
		var wt = $(".wtBanner li");
		$(banner).animate({
			marginLeft:parseInt($(".wtBanner:not(:animated)").css(maLeft))+283+"px"	
		},200,function(){
			$(banner).css(maLeft,"-283px");
			$(".bannerPage:last").prependTo(banner);	
		});	
		$(wt).children().next().css("background","url(/images/webtoon/bannerText.png) repeat");
		$(wt).children().children().removeClass("ho_br");
		$(wt).eq(1).children().next().css("background","#21447a");
		$(wt).eq(1).children().children().addClass("ho_br");
		if(au)clearTimeout(au);
		au=setTimeout(auto,3000);
		

	});
		$(".nextBtn").click(function(){
		var wt = $(".wtBanner li");
		$(banner).animate({
			marginLeft:parseInt($(".wtBanner:not(:animated)").css(maLeft))-283+"px"	
		},200,function(){
			$(banner).css(maLeft,"-283px");
			$(".bannerPage:first").appendTo(banner);	
		});	
		$(wt).children().next().css("background","url(/images/webtoon/bannerText.png) repeat");
		$(wt).children().children().removeClass("ho_br");
		$(wt).eq(3).children().next().css("background","#21447a");
		$(wt).eq(3).children().children().addClass("ho_br");
		if(au)clearTimeout(au);
		au=setTimeout(auto,3000);
		

	});	


	$(wt).mouseover(function(){
		var wt = $(".wtBanner li");	
		$(wt).eq(2).children().next().css("background","url(/images/webtoon/bannerText.png) repeat");
		$(wt).eq(2).children().children().removeClass("ho_br");
		$(this).children().children().addClass("ho_br");
		$(this).children().next().css("background","#21447a");	
	});	
	$(wt).mouseout(function(){
		$(this).children().children().removeClass("ho_br");
		$(this).children().next().css("background","url(/images/webtoon/bannerText.png) repeat");		
	});	
	
	function auto(){
		$(".nextBtn").trigger("click");
	}

	var au = setTimeout(auto,3000,"easeOutQuint");
	

});


$(function(){
	$(".day_title ul li").click(function(){
		$(".day_title ul li").removeClass("on");
		$(this).addClass("on");

		var list_type = $(this).parent().attr('data') ;
		var weekday_sort = $(this).attr('data') ;

		// 웹툰 메인
		if (list_type == 'webtoon'){

			$.ajax({
				url : '/webtoon/include/main/_weeklist.asp',
				data : { weekday_sort : weekday_sort},
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){

					var ul = '';
					$(".look_ahead").html('');
					var d = new Date();
					var d_today = d.getDay()+1;

					for (var j=1; j < 10 ; j++){

						var _param_weekday_val = j + 1 ;
						if (j == 7){_param_weekday_val = 1;	}
						if (j > 7){_param_weekday_val = j;	}

						ul += '<ul class="ahead_list">';
						var li = '';

						for(var i in data.result){

							var _param_weekday = data.result[i].param_weekday ;
							var _webtoon_num = data.result[i].webtoon_num ;
							var _adult_yn = data.result[i].adult_yn ;
							var _modify_yn = data.result[i].modify_yn ;
							var _new_yn = data.result[i].new_yn ;
							var _title = data.result[i].title ;
							var ahead_class = '';
							var _detail_url = '/webtoon/detail.asp?webtoon_num='+ _webtoon_num ;
							var _poster_img = 'http://webtoonimg.bookcube.com/80/'+ _webtoon_num +'.jpg';

							if (_adult_yn == "True"){
								var adult_img = '<img src="/images/webtoon/icon_19.png" alt="성인" class="icon_19" />';
							}else{
								var adult_img = '';
							}

							if (_modify_yn == "True"){
								var modify_img = '<img src="/images/webtoon/icon_up.png" alt="up" class="icon_up" />';
							}else{
								var modify_img = '';
							}

							if (_new_yn == "True"){
								var new_img = '<img src="/images/webtoon/icon_new.png" alt="new" class="icon_new" />';
							}else{
								var new_img = '';
							}

							if (d_today == _param_weekday){ ahead_class = " on"; }

							if (_param_weekday == _param_weekday_val){
								li += '<li><a href="'+ _detail_url + '"><div class="ahead_view'+ ahead_class +'">'+
											'<span class="im_br"><img src="'+ _poster_img +'" alt="" /></span>'+
											adult_img + modify_img + new_img +
										'</div>'+
										'<p>'+ _title +'</p></a></li>';
							}
						}

						ul += li +'</ul>';	
					}

					$(".look_ahead").html(ul);

				},
				error : function(){
				}					
			});		
			return false;
		// 스토리큐브 프리미엄 연재 메인
		}else if (list_type == 'serial'){

			$.ajax({
				url : '/storycube/include/main/_serial_list.asp',
				data : { weekday_sort : weekday_sort},
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){

					var ul = '';
					$(".focusList").html('');
					var d = new Date();
					var d_today = d.getDay()+1;

					for (var j=1; j < 7 ; j++){

						if (j == 1){
							var list_url_num = 16 ;
						}else if (j == 2){
							var list_url_num = 17 ;
						}else if (j == 3){
							var list_url_num = 20 ;
						}else if (j == 4){
							var list_url_num = 21 ;
						}else{
							var list_url_num = '' ;
						}
						ul += '<li><a href="/storycube/premium/list_category.asp?class_num='+ list_url_num +'"><img src="/images/storycube/focus'+ j +'.png" alt="무협" /></a><ul class="focusSub">';
						var li = '';

						for(var i in data.result){

							var _serial_num = data.result[i].serial_num ;
							var _serial_adult_book = data.result[i].serial_adult_book ;
							var _serial_newebook_yn = data.result[i].serial_newebook_yn ;
							var _serial_update_yn = data.result[i].serial_update_yn ;
							var _web_class = data.result[i].web_class ;							
							var _serial_title = data.result[i].serial_title ;

							var _detail_url = '/storycube/premium/serial_split_list.asp?serial_num='+ _serial_num ;
							var _poster_img = SERIAL_IMG_94 + _serial_num +'.jpg';

							if (_serial_adult_book == "True"){
								var adult_img = '<img src="/images/webtoon/icon_19.png" alt="adult" class="st_19" />';
							}else{
								var adult_img = '';
							}

							if (_serial_update_yn == "True"){
								var modify_img = '<img src="/images/webtoon/icon_up.png" alt="up" class="icon_up" />';
							}else{
								var modify_img = '';
							}

							if (_serial_newebook_yn == "True"){
								var new_img = '<img src="/images/webtoon/icon_new.png" alt="new" class="icon_new" />';
							}else{
								var new_img = '';
							}

							if (j == _web_class){

								li += '<li><a href="'+ _detail_url + '"><span class="st_br"><img src="'+ _poster_img +'" alt="" /></span>'+
											'<p>'+ _serial_title +'</p>'+
											new_img + modify_img + adult_img +  
										'<div class="focusBg"></div></li>';
							}
							
						}

						ul += li +'</ul></li>';	
					}
				
					$(".focusList").html(ul);

					//alert(ul);

				},
				error : function(){
				}					
			});		

			return false;
		
		// 스토리큐브 무료 연재 메인
		}else if (list_type == 'member_serial'){

			$.ajax({
				url : '/storycube/include/main/_member_serial_list.asp',
				data : { weekday_sort : weekday_sort},
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){

					var ul = '';
					$(".focusList").html('');
					var d = new Date();
					var d_today = d.getDay()+1;					

					for (var j=1; j < 7 ; j++){

						if (j == 1){
							var list_url_num = 2 ;
						}else if (j == 2){
							var list_url_num = 3 ;
						}else if (j == 3){
							var list_url_num = 6 ;
						}else if (j == 4){
							var list_url_num = 7 ;
						}else{
							var list_url_num = '' ;
						}
						ul += '<li><a href="/storycube/free/list_category.asp?class_num='+ list_url_num +'"><img src="/images/storycube/focus'+ j +'.png" alt="무협" /></a><ul class="focusSub">';

						var li = '';

						for(var i in data.result){

							var _member_serial_num = data.result[i].member_serial_num ;
							var _member_serial_adult_yn = data.result[i].member_serial_adult_yn ;
							var _member_serial_newebook_yn = data.result[i].member_serial_newebook_yn ;
							var _member_serial_upload_yn = data.result[i].member_serial_upload_yn ;
							var _web_class = data.result[i].web_class ;							
							var _member_serial_title = data.result[i].member_serial_title ;
							var _poster_img_url = data.result[i].poster_img_url ;

							var _detail_url = '/storycube/free/serial_split_list.asp?member_serial_num='+ _member_serial_num ;

							if (_member_serial_adult_yn == "True"){
								var adult_img = '<img src="/images/webtoon/icon_19.png" alt="adult" class="st_19" />';
							}else{
								var adult_img = '';
							}

							if (_member_serial_newebook_yn == 1){
								var modify_img = '<img src="/images/webtoon/icon_up.png" alt="up" class="icon_up" />';
							}else{
								var modify_img = '';
							}

							if (_member_serial_upload_yn == "True"){
								var new_img = '<img src="/images/webtoon/icon_new.png" alt="new" class="icon_new" />';
							}else{
								var new_img = '';
							}

							if (j == _web_class){

								li += '<li><a href="'+ _detail_url + '"><span class="st_br"><img src="'+ _poster_img_url +'" width=""94"" height=""131"" alt="" /></span>'+
											'<p>'+ _member_serial_title +'</p>'+
											new_img + modify_img + adult_img +  
										'<div class="focusBg"></div></li>';
							}
							
						}

						ul += li +'</ul></li>';	
					}
				
					$(".focusList").html(ul);

					//alert(ul);

				},
				error : function(){
				}					
			});		

			return false;
		}

	
	});	
	


	// 리스트 1,4,7,10... 마진값 없애기(제이쿼리로 css3 크로스브라우징)
	$(".public_list li:nth-child(3n+1), .recoList li:nth-child(3n+1)").css("margin-left","0");
	$(".wtRecoList li:nth-child(4n+1)").css("margin-left","0");

	$(".snsOpen").click(function(){
		$(".snsPop").fadeIn();
		return false;
	});
	$(".snsClose").click(function(){
		$(".snsPop").fadeOut();
		return false;
	});
});

// 스토리큐브 날개 배너 베스트 top10
$(function(){
	$(".best10 .best10_inner .best_menu a").click(function(){
		$(".best10 .best10_inner .best_menu a").removeClass("on");
		$(this).addClass("on");

		var jjol_menu = $(this).attr('data') ;

		$.ajax({
				url : '/storycube/include/main/_jjol_list.asp',
				data : { jjol_menu : jjol_menu},
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){

					var ul = '';
					$(".best10 .best10_inner ul").html(ul);
					
					for(var i in data.result){
						var _serial_num = data.result[i].serial_num ;
						var _member_serial_num = data.result[i].member_serial_num ;
						var _title = data.result[i].title ;
						var _num = data.result[i].num ;

						if (jjol_menu == 'serial'){
						var _detail_url = httpUrl +'/storycube/premium/serial_split_list.asp?serial_num='+ _serial_num ;
					}else if (jjol_menu == 'member_serial'){
						var _detail_url = httpUrl +'/storycube/free/serial_split_list.asp?member_serial_num='+ _member_serial_num ;
					}
						
						ul += '<li><a href="'+ _detail_url +'"><span>'+ _num +'위</span>'+ _title +'</a></li>';
					}

					$(".best10 .best10_inner ul").html(ul);

					if (jjol_menu == 'serial'){
						$(".best10 .best10_more").html('<a href="'+ httpUrl +'/storycube/premium/list_category.asp"><img src="/images/storycube/best10_more.png" alt="더보기" /></a>');
					}else if (jjol_menu == 'member_serial'){
						$(".best10 .best10_more").html('<a href="'+ httpUrl +'/storycube/free/list_category.asp"><img src="/images/storycube/best10_more.png" alt="더보기" /></a>');
					}
			

				},
				error : function(){
				}					
			});		
			return false;
	});
});

//장바구니 입력.
function wtPayment(webtoon_num, split_num){

	$.ajax({
		url : '/include/cart/_addWebtoonCart.asp',
		type : 'post',
		dataType : 'json',
		data : {
			webtoon_num : webtoon_num,
			split_num : split_num
		},
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.success == true){
				//무료 연재인 경우 웹툰 실행
				if (data.price == 0){
					location.href = '/webtoon/viewer.asp?webtoon_num='+ webtoon_num +'&split_num='+ split_num ;
				//유료 연재인 경우, 결재창 실행
				}else{
					wtPayment2();
				}

			}else{
				alert(data.message);
				location.reload();	
			}			
		},
		error: function() {}
	});
}

//결제창 세팅
function wtPayment2(){

	$.ajax({
		url : '/include/cart/_webtoonCartView.asp',
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.success == true){

				var _webtoon_num = data.result[0].webtoon_num;
				var _split_num = data.result[0].split_num;
				var _price = data.result[0].price;
				var _title = data.result[0].title;

				//결제 페이지 세팅
				$("#order_split_title_val").html(_title);
				$("#order_split_num_val").html(_split_num + '회');
				$("#order_split_price_val").html(_price + '원');
				$(".spt_price").html(' '+_price+'원');

				$("#order_webtoon_num").val(_webtoon_num);
				$("#order_split_num").val(_split_num);
				$("#order_total_price").val(_price);

				if($("#user_bookcash").val() >= _price){
					$("#pay_bookcash").prop("checked", true);
				}else{
					if($("#user_savemoney").val() >= _price){
						$("#pay_savemoney").prop("checked", true);
					}else{
						if($("#user_gift_card").val() >= _price){
							$("#pay_gift_card").prop("checked", true);
						}
					}	
				}

				//쿠폰리스트 세팅
				webtoon_coupon_list(_webtoon_num, _price);

				//결제창 띄우기
				var top = $(window).height() - 795;
				$("#wtPayment").css("display","block").css("left","50%").css("margin-left","-404px").css("top","110px");	
				return false;

			}else{
				alert(data.message);
				location.reload();	
			}			
		},
		error: function() {}
	});
}

function webtoon_coupon_list(webtoon_num, total_amount){

	$.ajax({
		url : '/webtoon/include/_webtoon_coupon_list.asp',
		type : 'post',
		dataType : 'json',
		data : {
			webtoon_num : webtoon_num,
			total_amount : total_amount
		},
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){

			var tr = '' ;
			if (data.result.length == 0){
				$('.cash_coupon_box').empty().append('<input type="hidden" name="couponSelect" id="couponSelect" value=""><strong>사용 가능한 쿠폰이 없습니다.</strong>');
			}else{
				for(i in data.result){

					var member_coupon_num = data.result[i].member_coupon_num;
					var member_coupon_name = data.result[i].member_coupon_name;
					var discount_amount = data.result[i].discount_amount;
					var expire_time = data.result[i].expire_time;
					var target_web_class = data.result[i].target_web_class;
					var book_expire_type = data.result[i].book_expire_type;
					var target_condition = data.result[i].target_condition;
					var target_product = data.result[i].target_product;

					tr += '<tr><td scope="row"><label for="" class="hide">쿠폰 선택</label><input type="radio" name="couponSelect" id="couponSelect" class="c_radio" value="'+ member_coupon_num +'" /></td>'+
							'<td class="tbl_font">'+ member_coupon_name +'</td><td>'+ discount_amount +'</td>'+
							'<td class="tbl_align">적용분야 : '+ target_product + '<br />카테고리 : '+ target_web_class +'<br />서비스 유형 : '+ book_expire_type +'<br />쿠폰 적용 금액 : '+ target_condition +'</td><td>~ '+ expire_time +'</td></tr>' ;			
				}

				$('#member_coupon_list').empty().append(tr);
				$('.o_f16.coupon_count').empty().append('(사용 가능한 쿠폰 : '+ (i*1+1) +'장)');
			}
			
		},
		error: function() {}
	});
}

$(function(){
	// wt-700 결제 팝업 닫기
	$(".close").click(function(){
		$("#wtPayment").hide();	
		return false;
	});	
	
});
$(function(){
	var all = $("input[name='s_allChk']");
	$(all).change(function(){
		var is_check = $(this).is(":checked");
		$("input[name='favorChk']").prop("checked",is_check);	
	});		
});


$(function(){
	// wt-700 결제 팝업 닫기
	$(".w_prefer_del").click(function(){

		if ($("input:checkbox[name='favorChk']:checked").length == 0){

			alert('삭제할 웹툰을 선택해주세요.');

		}else{

			var _webtoon_num = "";

			$("input:checkbox[name='favorChk']").each(function(){
	 
				if(this.checked){
					if (_webtoon_num.length > 0){ _webtoon_num += ',';	}
					_webtoon_num += this.value ;
				}
			});

			$.ajax({
				url : '/include/mypage/_my_webtoon_prefer_del.asp',
				type : 'post',
				dataType : 'json',
				data : {
					webtoon_num : _webtoon_num
				},
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					if (data.success == true){
						alert('삭제되었습니다.');
						location.reload();	
					}else{
						alert(data.message);
						location.reload();	
					}			
				},
				error: function() {}
			});
		
		}
	});

});

$(function(){
	// wt-700 결제 팝업 닫기
	$(".cookOpen").click(function(){
		var _data_val = $(this).attr('data');

		$.ajax({
				url : '/include/mypage/_webtoon_cube_input.asp',
				type : 'post',
				dataType : 'json',
				data : {
					data_type : _data_val
				},
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					alert(data.message);
					location.reload();	
				},
				error: function() {}
			});
	});
});

$(function(){
	// wt-700 결제 팝업 닫기
	$("#webtoon_search").click(function(){
		var _data_val = $("#searchOption").val();
		var _searchString = $("#SearchString_webtoon").val();

		if (_searchString == ''){
			alert('검색어를 검색해주세요.');	
			return ;
		}else{
			var objFrm = $("#searchFrm") ;
			objFrm.attr("method","get");
			objFrm.attr("action","/webtoon/search.asp");
			objFrm.submit();
		}	
	});		
});

$(function(){

	$('#SearchString_webtoon').keypress(function(e){

		if(e.keyCode==13){

			var _data_val = $("#searchOption").val();
			var _searchString = $("#SearchString_webtoon").val();

			if (_searchString == ''){
				alert('검색어를 검색해주세요.');	
				return ;
			}else{
				var objFrm = $("#searchFrm") ;
				objFrm.attr("method","get");
				objFrm.attr("action","/webtoon/search.asp");
				objFrm.submit();
			}	
		}
	});	
});


$(function(){
	// wt-700 결제 팝업 닫기
	$("#storycube_search").click(function(){
		var _data_val = $("#searchOption").val();
		var _searchString = $("#SearchString").val();

		if (_searchString == ''){
			alert('검색어를 검색해주세요.');	
			return ;
		}else{
			var objFrm = $("#searchFrm") ;
			objFrm.attr("method","get");
			objFrm.attr("action","/storycube/search.asp");
			objFrm.submit();
		}	
	});		
});


// 스토리큐브

// 신작 연재 배너 슬라이드
$(function(){
	var list = $(".stNew");
	$(".stNewSlide:last").prependTo(list);
	$(list).css("margin-top","-80px");
	setInterval(function(){
		$(list).animate({
			marginTop:parseInt($(".stNew:not(:animated)").css("margin-top"))-80+"px"	
		},1000,"linear",function(){
			$(list).css("margin-top","-80px");
			$(".stNewSlide:first").appendTo(list);
		});
	},3000);

});

//쫄쫄이 메뉴
//$(function(){
//	var defaultTop=parseInt($(".jjol").css("top"));
//	$(window).on("scroll",function(){
//		var sideScroll = $(window).scrollTop();
//		if(sideScroll > 620){
//			$(".jjol").stop().animate({
//				top:defaultTop+sideScroll+"px"	
//			},500,"swing");	
//		}
//	});		
//});

// 쫄쫄이 
$(function(){
	$(window).on("scroll",function(){
		var sideScroll = $(window).scrollTop();	
		if(sideScroll > 620){
			$(".jjol").css("position","fixed").css("top","20px");
		}
		if(sideScroll < 620){
			$(".jjol").css("position","absolute").css("top","640px");
		}
	});	
});

$(function(){
	$(".pPopClose").on("click",function(){
		$(this).parent().parent().parent().parent().parent().fadeOut();	
		return false;
	});	
});

// 쫄쫄이 서브
$(function(){
	$(window).on("scroll",function(){
		var sideScroll = $(window).scrollTop();	
		if(sideScroll > 295){
			$(".jjol_sub").css("position","fixed").css("top","20px");
		}
		if(sideScroll < 295){
			$(".jjol_sub").css("position","absolute").css("top","305px");
		}
	});	
});


function gift_series(){
	$("#presentPop").fadeIn(500);
}


function webtoon_recommend(webtoon_num, split_num){

	$.ajax({
			url : '/webtoon/action/_recommend_input.asp',
			type : 'post',
			dataType : 'json',
			data : {
				webtoon_num : webtoon_num,
				split_num : split_num
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				viewer.showToast(data.message);

				if (data.success == true){
					$("#viewer_recommend_cnt").html(data.recommend_count);
				}					
			},
			error: function() {}
		});

	event.stopPropagation();
}
function adult_click(){
	$.cookie('adult_click', 'done', {path : '/', expires : 1});
	$(".adult_click").hide();
}
