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
	$lyr_select_a.click(function(){
		$lyr_select_list.hide();
		var text = $(this).text();
		$btn_head_select.find('span.inblock').text(text);
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
/*
	// 상세검색 레이어 --------------------------------------
	var $btn_detail_srch = $('input.btn_advanced');
	var $btn_close2 = $('.search_detail .btn_layer_x');
	var $layer_detail_srch = $('.head_box .search_detail');

	$layer_detail_srch.hide();
	$btn_detail_srch.click(function(){
		$layer_detail_srch.toggle();
	});
	$btn_close2.click(function(){
		$layer_detail_srch.hide();
	});
*/
	// 지원기기 안내 툴팁 --------------------------------------
	var $btn_tooltip = $('.with_tooltip a.btn.view_tooltip');
	var $btn_tooltip_x = $('.layer_tooltip a.btn.close_x');
	var $layer_tooltip = $('.layer_tooltip.tooltip1');
	$layer_tooltip.hide();
	$btn_tooltip.click(function(){
		$layer_tooltip.toggle();
	});
	$btn_tooltip_x.click(function(){
		$layer_tooltip.hide();
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
	function tick(){
		$('#ticker li:first').slideUp( function () { $(this).appendTo($('#ticker')).slideDown(); });
	}
	setInterval(function(){ tick () }, 3500);

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

	/* 주문내역 리스트 slide_down */
	var $btn_bookname = $('table a.book_name');
	var $show_tr = $('tr.dwon_tr');
	$show_tr.hide();
	$btn_bookname.click(function(){
		$(this).parent().parent().next().toggle();
	});

	/* 로그인페이지에서 input type text를 password로 변환 */
	$('.pwd').click(function(){
	  $(this).get(0).type='password';
	});

	/* 독점연재 구매 오버레이 팝업 */
	$("a.pay_pop[rel]").overlay({
		mask: '#333'
	});

	/* 회원가입 닉네임 체크 */
	$("a.mem_chk[rel]").overlay({
		mask: '#333'
	});

	/* FAQ - 자주찾는질문 */
	var $faq_q = $('table tr.faq_q');
	var $faq_a = $('table tr.faq_a');
	$faq_a.hide();
	$faq_a.first().show();
	$faq_q.click(function(){
		$(this).next().toggle();
	});

	/* 고객센터 파일찾기 input 투명처리 */
	var $input_file = $('.btn_file_container input.input_file');
	$input_file.css({opacity:0});

	/* main ----------------------- */
	/* 인기검색어 */
	var $bt_pop_srch = $('.popular_search a.btn_popular');
	var $lyr_popular = $('.popular_search .popular_srch_lyr');
		$lyr_popular.hide();	
		$bt_pop_srch.hover(function(){
			$lyr_popular.toggle();
		});
		$lyr_popular.hover(function(){
			$lyr_popular.toggle();
		});

	/* 화제의 전자책 */
	var $bt_pop_book = $('#main .topic_area .btn_slide a');
	var $lyr_slide_book = $('#main .topic_area ul.type_list.thumbnail');
	$bt_pop_book.click(function(){
		$bt_pop_book.removeClass('on');
		$(this).addClass('on');
	});

	/* 이용안내 - 탭메뉴별 컨텐츠 바꾸기 */
	var $guide_tab = $(".guide .faq_menu li");
	var $guide_contents = $(".gudie_contents");

	$guide_contents.hide();
	$guide_contents.first().show();
	$guide_tab.removeClass("on");
	$guide_tab.first().addClass("on");

	$guide_tab.click(function(){
		$guide_tab.removeClass("on");
		$(this).addClass("on");
		$guide_tab.each(function(i){
			if($guide_tab.eq(i).hasClass("on"))
			{
				$guide_contents.hide();
				$guide_contents.eq(i).show();
			} else {
				$guide_contents.eq(i).hide();
			}
		});
	});

});


