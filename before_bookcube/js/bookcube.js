var host = location.host;
var httpUrl = 'http://'+host;
var httpsUrl = 'https://'+host;
var BOOK_IMG_200 = 'http://bookimg.bookcube.com/200/';
var BOOK_IMG_150 = 'http://bookimg.bookcube.com/150/';
var BOOK_IMG_120 = 'http://bookimg.bookcube.com/120/';
var BOOK_IMG_94 = 'http://bookimg.bookcube.com/94/';
var BOOK_IMG_70 = 'http://bookimg.bookcube.com/70/';
var SERIAL_IMG_200 = 'http://serialimg.bookcube.com/200/';
var SERIAL_IMG_150 = 'http://serialimg.bookcube.com/150/';
var SERIAL_IMG_120 = 'http://serialimg.bookcube.com/120/';
var SERIAL_IMG_94 = 'http://serialimg.bookcube.com/94/';


function scrollLink(target, delay){
	var obj = target;
	var delay = delay || 1000;

	var position = obj.offset();
	$('html, body').animate({scrollTop: position.top}, delay);
}

function newTrim(string){
	str = string.replace(/^\s*/, '').replace(/\s*$/, '');
	return str;
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function getLoginURL(){
	var openURL = window.document.URL;
//	var openPath = window.location.pathname;
//	var openParam = window.location.search;
//	if(openURL.indexOf("https") == -1){
//		return_url = openPath + "" + openParam;
//	}else {
		return_url = openURL;
//	}

	return return_url;
}

function goLogin(return_url, msg){
	if(return_url){
		url = httpsUrl + '/login.asp?return_url=' + escape(return_url);
	}else{
		url = httpsUrl + '/login.asp?return_url='+escape(getLoginURL());
	}

	if(msg){
		if(confirm(msg)){
			location.href=url;
		}else{
			return false;
		}
	}else{
		location.href=url;
	}
}

// list, thumb
function setViewType(url, viewtype){
	location.href= url+'viewType='+viewtype;
}

// flat, rental
function serviceType(url, obj){
	var btn_val = '';
	if(!$(obj).hasClass('on')){
		//btn_val = $(obj).hasClass('btnFlat') ? 'flat' : 'rental';
		if ($(obj).hasClass('btnFlat'))	{ 
			btn_val = 'flat';
		}else if ($(obj).hasClass('btnBuy')){
			btn_val = 'buy';
		}else if ($(obj).hasClass('btnRentLong')){
			btn_val = 'rent_long';
		}else{
			btn_val = 'rental';
		}
	}

	var param = (btn_val != '') ? 'service='+btn_val : '';
	location.href = url + param;
}

function book_down(sku){
	window.open(httpUrl + '/download/book_down.asp?sku='+sku,'download','width=550,height=670,scrollbars=yes,toolbar=no');
}

function serial_down(serialcheck){
	window.open(httpUrl + '/download/book_down_serial.asp?serialCheck='+serialcheck,'download','width=300,height=200,scrollbars=no,toolbar=no');
}

function serial_down_order(order_num, serial_num){
	window.open(httpUrl + '/download/book_down_serial.asp?order_num='+order_num+'&serial_num='+serial_num,'download','width=300,height=200,scrollbars=no,toolbar=no');
}

function streaming(book_num){
		window.open('/mypage/pop_mp3Down_list.asp?book_num='+book_num, 'streaming', 'width=467,height=432,scrollbars=yes,toolbar=no');
	}

function SearchVerify(){
	var inputText = $('form[name=searchFrm]').find('input[name=SearchString]');

	if(newTrim(inputText.val()).length == 0 || inputText.val() == '검색어 입력'){
		alert('검색어를 입력해 주세요');
		inputText.focus();
		return false;
	}
}

function adultBookCheck(book_type, book){
	var cnt = {};
	$.ajax({
		url : '/_ajax/_adult_book_check.asp',
		data : {book : book.join(',')},
		dataType : 'json',
		async : false,
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			cnt = data;
		}
	});
	return cnt;
}

function checkbox(){
	var $checkbox_all = $('input#check_all');
	var $checkbox_all2 = $('input#check_all2');
	$checkbox_all.click(function(){//전체선택 버튼 왼쪽 최상단 checkbox
		if ($(this).is(":checked")){                
			$("input[name=book_chk]:not(:disabled)").attr("checked", true);
			$checkbox_all2.attr('checked', true);
		}else{
			$("input[name=book_chk]").attr("checked", false);
			$checkbox_all2.attr('checked', false);
		}
	});

	$checkbox_all2.click(function(){//전체선택 버튼 왼쪽 최상단 checkbox
		if ($(this).is(":checked")){                
			$("input[name=book_chk]:not(:disabled)").attr("checked", true);
			$checkbox_all.attr('checked', true);
		}else{
			$("input[name=book_chk]").attr("checked", false);
			$checkbox_all.attr('checked', false);
		}
	});

	$("input[name=book_chk]").click(function(){
		if($('input[name=book_chk]:not(:checked):not(:disabled)').length == 0){
			$('input[name=all_chk]').attr('checked', true);
		}else{
			$('input[name=all_chk]').attr('checked', false);
		}
	});

	if($('table input[name=book_chk]:not(:disabled)').length == 0){
		$('input#check_all').attr('disabled','disabled');
		$('input#check_all2').attr('disabled','disabled');
	}else{
		$('input#check_all').attr('disabled',false);
		$('input#check_all2').attr('disabled',false);
	}
}

function PopDevice(type, no){
	if(type == 'register'){
		window.open("/mypage/terminal_register.asp","terminal","width=785,height=600,scrollbars=no,toolbar=no");
	}else if(type == 'cancel'){
		window.open("/mypage/terminal_cancel.asp?productNo="+no,"terminal","width=450,height=345,scrollbars=no,toolbar=no");
	}
}

//멀티다운로더 실행
function multidownloader(){
	//window.open(httpUrl +'/download/multidownloader/multidownloader.asp','download','width=300,height=200,scrollbars=no,toolbar=no');
	window.open(httpUrl + '/download/book_down.asp','download','width=490,height=670,scrollbars=yes,toolbar=no');
}

// 랭키 footer 마크
function Rankey_Mark_Win(no){
	window.open('http://www.rankey.com/rank/cert/cert_pop.php?mark_no='+no,'Rankey_pop','width=700,height=800,scrollbars=yes');
}

// 쿠폰 팝업
function PopGiftCard(){
	window.open(httpUrl +"/coupon.asp","coupon","width=760,height=588,scrollbars=no,toolbar=no");
}

var FlatFeeAlert = {
	user_num : ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num'),
	buyMsg : function(){
		if(this.user_num){
			if(confirm('장르정액권 구매 후 이용가능합니다.\n장르정액권을 구매하시겠습니까?')){
				location.href=httpsUrl+'/order/free_ticket.asp';
			}
		}else{
			goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}
	},
	stopMsg : function(stop_expire_time_msg){
		alert('장르정액권 정지 중입니다.\n만료날짜 : '+ stop_expire_time_msg);
	}
};

var ComicFlatFeeAlert = {
	user_num : ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num'),
	buyMsg : function(){
		if(this.user_num){
			if(confirm('만화정액권 구매 후 이용가능합니다.\n만화정액권을 구매하시겠습니까?')){
				location.href=httpsUrl+'/order/free_ticket.asp';
			}
		}else{
			goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}
	},
	stopMsg : function(stop_expire_time_msg){
		alert('만화정액권 정지 중입니다.\n만료날짜 : '+ stop_expire_time_msg);
	}
};

var mainBest = {
	page : 'nm',
	page_class : null,
	menu : null,
	category : '',
	list : function(){

		BOOKCUBE.getInstance("pageLoading").show();
		$.ajax({
			url : '/include/main/_best_new.asp',
			data : {
				page_class : this.page_class,
				menu : this.menu,
				category : this.category
			},
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				var li = '';

				for(var i in data.result){
					var sale_text = '';
					var book_num = data.result[i].book_num;
					var series_num = data.result[i].series_num;
					var title = data.result[i].title;
					var author = data.result[i].author;
					var publisher = data.result[i].publisher;
					var explain = data.result[i].explain;
					var fixed_price = data.result[i].fixed_price;
					var price = data.result[i].price;
					var save_money = data.result[i].save_money;					
					var salePrice_text = data.result[i].salePrice_text;
					var book_19_img_yn = data.result[i].book_19_img_yn;
					var long_term_rental_able_yn = data.result[i].long_term_rental_able_yn;
					var long_term_rental_price = data.result[i].long_term_rental_price;
					var lent_long_salePrice_text = data.result[i].lent_long_salePrice_text;
					var series_cover_book_num = data.result[i].series_cover_book_num;			
					var event_price = data.result[i].event_price;		
					var event_price_text = data.result[i].event_price_text;		

					if (book_19_img_yn == 'Y'){
						var img_url_150 = '<img src="http://www.bookcube.com/images/contents/adult_19_150.jpg" alt="19금 표지 이미지" />';
						var img_url_94 = '<img src="http://www.bookcube.com/images/contents/adult_19_94.jpg" alt="19금 표지 이미지" />';
					}else{
						//종별노출(만화관)
						if (series_num == ""){
							var img_url_150 = '<img src="'+ BOOK_IMG_150 +book_num.substring(0,4)+'/'+book_num+'.jpg" alt="'+title+'" />';
							var img_url_94 = '<img src="'+ BOOK_IMG_94 +book_num.substring(0,4)+'/'+book_num+'.jpg" alt="'+title+'" />';
						}else{
							var img_url_150 = '<img src="'+ BOOK_IMG_150 +series_cover_book_num.substring(0,4)+'/'+series_cover_book_num+'.jpg" alt="'+title+'" />';
							var img_url_94 = '<img src="'+ BOOK_IMG_94 +series_cover_book_num.substring(0,4)+'/'+series_cover_book_num+'.jpg" alt="'+title+'" />';						
						}
					}

					if(salePrice_text != ''){
						sale_text = salePrice_text ;
					}

					var icon = '';
					if(mainBest.menu == 'best'){
						icon = 'best';
					}else if(mainBest.menu == 'new'){
						icon = 'new_book';
					}
					if(i == 0){
						var authorLink = author;
						if(author != ''){
							authorLink = '<a href="/search.asp?searchOption=author&SearchString='+escape(author)+'">'+author+'</a><br />';
						}
						if (series_num == ""){
							if (fixed_price != price){
								fixed_price_txt = '<br /><del><strong class="f16">&#8361; '+fixed_price+'</strong></del>';
							}else{
								var fixed_price_txt = '';
							}
							if (long_term_rental_able_yn == "true"){
								if (fixed_price != long_term_rental_price){
									long_term_fixed_price_txt = '<br /><del><strong class="f16">&#8361; '+fixed_price+'</strong></del>';
								}else{
									var long_term_fixed_price_txt = '';
								}
								var rent_long = '<p class="top10"><strong class="f16">10년 소장</strong>'+ long_term_fixed_price_txt +'<br /><strong class="red f16">&#8361; '+long_term_rental_price+lent_long_salePrice_text+'</strong></p>';
							}else{
								var rent_long = '';
								var long_term_fixed_price_txt = '';
							}
							if (event_price != ""){
								var event_price_val = '<p class="top10"><strong class="f16">이벤트가</strong><br /><strong class="red f16">&#8361; '+event_price+'</strong>'+ event_price_text +'</p>';
							}else{
								var event_price_val = ""
							}
							li += '<li class="first">'+
								'<span class="icon '+icon+'">'+mainBest.menu+'</span>'+
								'<a href="/detail.asp?book_num='+book_num+'" class="thumb">'+ img_url_150 +'</a>'+
								'<div class="book_info">'+
									'<p class="book_title"><a href="/detail.asp?book_num='+book_num+'" class="f16">'+title+'</a></p>'+
									'<p class="book_detail">저자 : '+authorLink+
									'출판사 : <a href="/search.asp?searchOption=publisher&SearchString='+escape(publisher)+'">'+publisher+'</a></p>'+
									'<p><strong class="f16">구매</strong>'+ fixed_price_txt +'<br /><strong class="red f16">&#8361; '+price+sale_text+'</strong></p>'+ rent_long + event_price_val +
									'</div>'+
									'<p class="book_description">'+explain+'</p>'+
								'</li>';
						}else{
							li += '<li class="first">'+
								'<span class="icon '+icon+'">'+mainBest.menu+'</span>'+
								'<a href="/s_detail.asp?series_num='+series_num+'" class="thumb">'+ img_url_150 +'</a>'+
								'<div class="book_info">'+
									'<p class="book_title"><a href="/s_detail.asp?series_num='+series_num+'" class="f16">'+title+'</a></p>'+
									'<p class="book_detail">저자 : '+authorLink+
									'출판사 : <a href="/search.asp?searchOption=publisher&SearchString='+escape(publisher)+'">'+publisher+'</a></p>'+
									'</div>'+
									'<p class="book_description">'+explain+'</p>'+
								'</li>';						
						}
					}else{
						var class_type = '';
						if(i == 1 || i == 2 || i == 3){
							class_type = 'top20';
						}
						
						var num_text = '<p class="num"></p>';
						if(mainBest.menu == 'best'){
							num_text = '<p class="num"><img src="/images/main/num_'+(parseInt(i)+1)+'.gif" alt="'+i+1+'" /></p>';
						}

						if (series_num == ""){
						li += '<li class="'+class_type+'">'+num_text+
									'<a href="/detail.asp?book_num='+book_num+'" class="thumb">'+ img_url_94 +'</a><p class="title"><a href="/detail.asp?book_num='+book_num+'">'+ title +'</a></p></li>';
						}else{
						li += '<li class="'+class_type+'">'+num_text+
									'<a href="/s_detail.asp?series_num='+series_num+'" class="thumb">'+ img_url_94 +'</a><p class="title"><a href="/s_detail.asp?series_num='+series_num+'">'+ title +'</a></p></li>';
						}
					}
				}
			
				$('.contents .best_list').empty().append(li);
				BOOKCUBE.getInstance("pageLoading").hide();
			},
			error: function() {}
		});
	},
	setMenu : function(page_class, menu, _this){
		this.page_class = page_class;
		this.menu = menu;
		this.category = '';
		this.page = (this.page_class == '일반') ? 'nm' : (this.page_class == '로맨스') ? 'rm' : (this.page_class == '만화') ? 'cm' : 'mf';
		$best_tab = $('.best_tab');
		$best_tab.find('a').removeClass('on');
		$(_this).addClass('on');

		if(page_class != '일반'){
			$('.list_tab_menu_sub.best').find('.btn_area').hide();
		}

		if(menu == 'best'){
			$list_tab_menu_sub = $('.list_tab_menu_sub.best');
			$list_tab_menu_sub.find('.btn_area a').removeClass('orange4');
			$list_tab_menu_sub.find('.btn_area a').eq(0).addClass('orange4');

			if(page_class == '일반'){
				$('.list_tab_menu_sub.best').find('.btn_area').show();
			}
		}else if(menu = 'new'){
			if(page_class == '일반'){
				$('.list_tab_menu_sub.best').find('.btn_area').hide();
			}
		}
		$list_tab_menu_sub.find('> .fr a').attr('href', '/'+this.menu+'.asp?page='+this.page);

		this.list();
	},
	setCategory : function(_this, category){
		this.category = category;
		this.list();
		$('.list_tab_menu_sub.best a').removeClass('orange4');
		$(_this).addClass('orange4');
	}
};

var mainSale = {
	pageNum : '',
	page_class : '',
	list : function(page_class){
		this.page_class = page_class;

		$.ajax({
			url : '/include/main/_sale_book.asp',
			data : {
				page_class : this.page_class,
				pageNum : this.pageNum
			},
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				mainSale.pageNum = data.pageNum;
				var li = '';
				for(i in data.result){
					var book_num = data.result[i].book_num;
					var title = data.result[i].title;
					var author = data.result[i].author;
					var price = data.result[i].price;
					var fixed_price_text = data.result[i].fixed_price_text;
					var book_19_img_yn = data.result[i].book_19_img_yn;	

					if (book_19_img_yn == 'Y'){
						var img_url_120 = '<img src="http://www.bookcube.com/images/contents/adult_19_120.jpg" alt="19금 표지 이미지" />';						
					}else{
						var img_url_120 = '<img src="http://bookimg.bookcube.com/120/'+book_num.substring(0,4)+'/'+book_num+'.jpg" alt="'+title+'" />';
					}

					var authorLink = author;
					if(author != ''){
						authorLink = '<a href="/search.asp?searchOption=author&SearchString='+escape(author)+'">'+author+'</a> 저';
					}

					li += '<li>'+
						'<p class="thumbnail"><a href="/detail.asp?book_num='+book_num+'">'+ img_url_120 +'</a></p>'+
						'<p class="title"><a href="/detail.asp?book_num='+book_num+'">'+title+'</a></p>'+
						'<p class="author">'+authorLink+'</p>'+
					'</li>';
				}
				$('.contents .sale_book').empty().append(li);
			},
			error: function() {}
		});
	},
	prev : function(){
		if(this.pageNum != ''){
			this.pageNum -= 1;
		}
		this.list(this.page_class);
	},
	next : function(){
		if(this.pageNum != ''){
			this.pageNum += 1;
		}
		this.list(this.page_class);
	}
};

var updateSerial = {
	pageNum : '',
	list : function(){
		$.ajax({
			url : '/include/main/_update_serial.asp',
			data : {pageNum : this.pageNum},
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				updateSerial.pageNum = data.pageNum;
				var li = '';
				for(i in data.result){
					var serial_num = data.result[i].serial_num;
					var title = data.result[i].title;
					var author = data.result[i].author;

					li += '<li>'+
						'<p class="thumbnail"><a href="/serial.asp?sub_list2=detail&serial_num='+serial_num+'"><img src="'+ SERIAL_IMG_120 +serial_num+'.jpg" alt="도서 이미지 - '+title+'" /></a></p>'+
						'<p class="title"><a href="/serial.asp?sub_list2=detail&serial_num='+serial_num+'">'+title+'</a></p>'+
						'<p class="author"><a href="/search.asp?searchOption=author&SearchString='+escape(author)+'">'+author+'</a> 저</p>'+
						'</li>';
				}
				$('.contents .update_serial').empty().append(li);
			},
			error: function() {}
		});
	},
	prev : function(){
		if(this.pageNum != ''){
			this.pageNum -= 1;
		}
		this.list();
	},
	next : function(){
		if(this.pageNum != ''){
			this.pageNum += 1;
		}
		this.list();
	}
};

var serialFreeSplit = {
	pageNum : '',
	list : function(){
		$.ajax({
			url : '/include/main/_serial_free_split.asp',
			data : {pageNum : this.pageNum},
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				serialFreeSplit.pageNum = data.pageNum;
				var li = '';
				for(i in data.result){
					var serial_num = data.result[i].serial_num;
					var title = data.result[i].title;
					var author = data.result[i].author;

					li += '<li>'+
						'<p class="thumbnail"><a href="/serial.asp?sub_list2=detail&serial_num='+serial_num+'"><img src="'+ SERIAL_IMG_120 +serial_num+'.jpg" alt="도서 이미지 - '+title+'" /></a></p>'+
						'<p class="title"><a href="/serial.asp?sub_list2=detail&serial_num='+serial_num+'">'+title+'[1화]</a></p>'+
						'<p class="author"><a href="/search.asp?searchOption=author&SearchString='+escape(author)+'">'+author+'</a> 저</p>'+
						'</li>';
				}
				$('.contents .serial_free_split').empty().append(li);
			},
			error: function() {}
		});
	},
	prev : function(){
		if(this.pageNum != ''){
			this.pageNum -= 1;
		}
		this.list();
	},
	next : function(){
		if(this.pageNum != ''){
			this.pageNum += 1;
		}
		this.list();
	}
};

var recommendDate = {
	_year : null,
	_month : null,
	_class : null,
	_data : {},
	init : function(class_type, year, month){
		this._class = class_type;
		this._year = year;
		this._month = month;
		this._data = {};

		// 상단 셀렉트 리스트 --------------------------------------
		var $date_select = $('.select_style .select_face');
		var $lyr_date_list = $('.select_list');
		var $lyr_date_li = $('.select_list li');
		$lyr_date_list.hide();
		$date_select.click(function(e){
			$(this).next().toggle();
			e.preventDefault();
		});

		this.year(this._class);
		this.month(this._class, this._year);
	},
	year : function(class_type){
		var mode = 'year';
		this._data = {
			mode : mode,
			class_type : class_type
		};
		this._process(mode);
	},
	month : function(class_type, year){
		var mode = 'month';

		this._data = {
			mode : mode,
			year : year,
			class_type : class_type
		};
		this._process(mode);
	},
	_process : function(mode){
		$.ajax({
			url : '/_ajax/_recommend_date.asp',
			data : this._data,
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				var li = '';
				if(mode == 'year'){
					for(var i in data.date_list){
						li += '<li><a href="javascript:;" onClick="recommendDate.setBox(this, \''+data.date_list[i].year+'\');">'+data.date_list[i].year+'</a></li>';
					}
					$('.select_style.year .select_list').empty().append(li)
				}else{
					for(var i in data.date_list){
						li += '<li><a href="javascript:;" onClick="recommendDate.setBox(this, \''+data.date_list[i].year+'\', \''+data.date_list[i].month+'\');">'+data.date_list[i].month+'</a></li>';
					}
					$('.select_style.month .select_list').empty().append(li);
				}
			},
			error: function() {}
		});
	},
	setBox : function(_this, year, month){
		if($(_this).parent().parent().parent().hasClass('year')){
			$('.select_style.year').find('.select_face > span').text(year);
			$('form[name=frmRecommend]').find('input[name=view_year]').val(year);
			this.month(this._class, year);
		}else{
			$('.select_style.month').find('.select_face > span').text(month);
			$('form[name=frmRecommend]').find('input[name=view_month]').val(month);
		}
		$('.select_style .select_list').hide();
	}
};

var Detail = {
	book_num :null,
	series_num : null,
	buytype : null,
	user_num : null,
	sort : null,

	init : function(book_num, series_num, buytype){
		this.book_num = book_num;
		this.series_num = series_num;
		this.buytype = buytype;
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');

		$('#select_mainclass').change(function(){
			location.href='/category.asp?branch='+$('#select_mainclass').val();
		});
		$('#select_subclass').change(function(){
			location.href='/category.asp?branch='+$('#select_mainclass').val()+$('#select_subclass').val();
		});

		/* 상세페이지 - 탭메뉴별 컨텐츠 바꾸기 */
		var $trigger_tab = $(".book_info_tab a");
		var $tab_contents = $(".book_detail_contents div.tab_contents");

		$tab_contents.hide();
		$trigger_tab.click(function(e){
			$trigger_tab.removeClass("on");
			$(this).addClass("on");

			$trigger_tab.each(function(i){
				if($trigger_tab.eq(i).hasClass("on"))
				{
					$tab_contents.hide();
					if($trigger_tab.eq(i).attr('class').indexOf('tabReview') != -1){
						if($('#detailReviewList').html() == ''){
							Review.list(book_num, series_num, "좋아요");
						}
					}
					$tab_contents.eq(i).show();
				} else {
					$tab_contents.eq(i).hide();
				}
			});
			e.preventDefault();
		});

		// 별점주기 select box 툴팁 --------------------------------------
		var $btn_star_select = $('.book_info_star .select_star_tit');
		var $layer_star_select = $('.book_info_star.select_star ul');
		var $star_trigger = $('.book_info_star.select_star ul li');
		$btn_star_select.click(function(){
			if(Detail.user_num){
				$(this).next().toggle();
			}else{
				goLogin('', '로그인 후 별점등록이 가능합니다.\n로그인 하시겠습니까?');
			}
		});
		$star_trigger.click(function(){
			var index =  $star_trigger.index(this) % 5 + 1; //  나머지값 구해 별점 1~5점만 선택되게
			$layer_star_select.hide();
			$this = $(this);
			$.ajax({
				url : '/include/detail/_book_point_input.asp',
				data : { book_num : book_num, series_num : series_num, point : index },
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					if(data.success){
						alert(data.message);
						location.reload();
					}else{
						alert(data.message);
					}
				},
				error : function(){
					alert('별점이 등록되지 못했습니다.\n다시 시도해 주시기 바랍니다.')
				}
			});
		});

		SeriesList.count(book_num, series_num, buytype, this._callback);
		Review.count(book_num, series_num, this._callback);
	},
	_callback : function(_ajaxValue, _type){
		if(_type == 'series'){
			if(_ajaxValue > 0){
				SeriesList.list(Detail.book_num, Detail.series_num, Detail.buytype);
				$('.book_info_tab a.tabSeries').addClass('first on');
				$('#detail_series').show();
			}else{
				$('.book_info_tab a.tabSeries').removeClass('first').hide();
				$('#detail_series').hide();
				$('.book_info_tab a.tabBookInfo').addClass('first on');
				$('#detail_explain').show();
			}
		}else if(_type == 'review'){
			if(_ajaxValue > 0){
				$('.book_info_tab .tabReview').text('서평('+_ajaxValue+')');
			}
		}
	}
};

var SeriesList = {
	count : function(book_num, series_num, buytype, fnCallback){
		$.ajax({
			url : '/include/detail/_series_list_count.asp',
			data : { book_num : book_num, series_num : series_num, buytype : buytype },
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				fnCallback(data.count, 'series');
			},
			error : function(){
				fnCallback(0, 'series');
			}
		});
	},
	list : function(book_num, series_num, buytype){

		this._service_type = buytype;

		BOOKCUBE.getInstance('pageLoading').show();
		$.ajax({
			url : '/include/detail/_series_list.asp',
			data : {book_num : book_num, series_num : series_num, buytype : buytype},
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				
				$('#detail_series_list').html('');
				if(data.result[0].total_count > 0){

					SeriesList._total_count = data.result[0].total_count;
					SeriesList._total_price = data.result[0].total_price;
					SeriesList._pay_count = data.result[0].pay_count;

					var tr = '';
					for(var i in data.result[1]){
						var _book_num = data.result[1][i].book_num;
						var _price = data.result[1][i].price;
						var _price_text = data.result[1][i].price_text;
						var _title = data.result[1][i].title;
						var price = '', disabled = '';
						if(buytype == 'buy' || buytype == 'rental' || buytype == 'rent_long'){
							price = _price_text + '원';
						}
						if(!data.result[1][i].order_able_yn){
							disabled = 'disabled=disabled';
						}

						if (series_num == ""){
							tr += '<tr>' +
									'<th><input type="checkbox" name="book_chk" '+disabled+' class="input_chk" title="도서선택" value="'+_book_num+'" data="'+ _price +'"  /><a href="/detail.asp?book_num='+_book_num+'">'+_title+'</a></th>'+
									'<td>'+price+'</td>'+
								'</tr>';
						}else{
							tr += '<tr>' +
									'<th><input type="checkbox" name="book_chk" '+disabled+' class="input_chk" title="도서선택" value="'+_book_num+'" data="'+ _price +'"  />'+_title+'</th>'+
									'<td>'+price+'</td>'+
								'</tr>';
						}
					}

					var table = '<table summary="시리즈 전체보기" class="list_black" cellspacing="0">' +
						'<caption>시리즈 전체보기</caption>' +
						'<colgroup>'+
								'<col width="*" /><col width="15%" />'+
						'</colgroup>'+
						'<thead>'+
						'<tr>'+
							'<th scope="col" abbr="제목" class="hide">제목</th>'+
							'<th scope="col" abbr="작성자" class="hide">단가</th>'+
						'</tr>'+
						'</thead>'+
						'<tbody>'+
						tr +
						'</tbody>'+
						'</table>';

					$('#detail_series_list').html(table);
					//SeriesList.checkbox();
					checkbox();

					$('input#check_all').click(function(){SeriesList.isTotal()});
					$('input#check_all2').click(function(){SeriesList.isTotal()});
					$('input[name="book_chk"]').click(function(){SeriesList.isTotal()});
				}
				BOOKCUBE.getInstance('pageLoading').hide();
			},
			error : function(){BOOKCUBE.getInstance('pageLoading').hide();}
		});
		/*
		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {book_num:book_num};
			this._datalist.bind(true);
		}else{
			this._datalist = new BOOKCUBE.dataList(document.getElementById('detail_series_list'), {
				url : url,
				data : {
					book_num : book_num,
					buytype : buytype
				},
				pageOuter : $('#detail_series .pagenate'),
				callback : function(data){
					if(data.result[0]['totalItems'] > 0){
						$('#detail_series_list').html('');
						$('#detail_series #check_all').attr('checked', false);
						var tr = '';
						for(var i in data.result[1]){
							var price = '';
							var disabled = '';

							if(buytype == 'buy' || buytype == 'rental'){
								price = data.result[1][i].price + '원';
							}

							if(!data.result[1][i].order_able_yn){
								disabled = 'disabled=disabled';
							}

							tr += '<tr>' +
										'<th><input type="checkbox" name="book_chk" '+disabled+' class="input_chk" title="도서선택" value="'+data.result[1][i].book_num+'"  /><a href="/detail.asp?book_num='+data.result[1][i].book_num+'">'+data.result[1][i].title+'</a></th>'+
										'<td>'+price+'</td>'+
									'</tr>';
						}

						var table = '<table summary="시리즈 전체보기" class="list_black" cellspacing="0">' +
							'<caption>시리즈 전체보기</caption>' +
							'<colgroup>'+
									'<col width="*" /><col width="15%" />'+
							'</colgroup>'+
							'<thead>'+
							'<tr>'+
								'<th scope="col" abbr="제목" class="hide">제목</th>'+
								'<th scope="col" abbr="작성자" class="hide">단가</th>'+
							'</tr>'+
							'</thead>'+
							'<tbody>'+
							tr +
							'</tbody>'+
							'</table>';

							$('#detail_series_list').html(table);
							//SeriesList.checkbox();
							checkbox();
					}
				},
				useHash : false,
				scrolldata : {
					target : $('.book_info_tab'),
					delay : 1000
				},
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
		*/
	},
	isTotal : function(){
		if(this._service_type == 'flat_fee'){return}

		var _check_cnt = 0, _check_pay_cnt = 0, _check_price = 0;
		$('input[name=book_chk]').each(function(){
			if($(this).is(':checked')){
				_check_cnt += 1;
				if($(this).attr('data') > 0){_check_pay_cnt += 1}
				_check_price += parseInt($(this).attr('data'));
			}
		});

		if(_check_pay_cnt == SeriesList._pay_count){
			_check_price = SeriesList._total_price;
		}

		$('#detail_series .total_series_check_count').text(_check_cnt);
		$('#detail_series .total_series_check_price').text(_check_price);
	}
};

var Review = {
	_datalist : null,
	user_num : null,
	book_num : null,
	series_num : null,
	sort : null,
	jsonResult : [],
	init : function(book_num, series_num, sort){
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');
		this.book_num = book_num;
		this.series_num = series_num;
		this.sort = sort;
	},
	btnSet : function(book_num, series_num){

		this.book_num = book_num;
		this.series_num = series_num;

		var $btn_review = $('#write_review');
		var $btn_sort_new = $('#sort_new');
		var $btn_sort_like = $('#sort_like');
		var $btn_review_cancel = $('.btn_cancel');
		var $hide_content = $('.hide_content');
		var $layer_write_review = $('.border_type3.write_review_wrap');
		var $btn_area = $layer_write_review.find('.btn_area');

		$layer_write_review.hide();
		$btn_review.click(function(e){
			if(Review.user_num){
				$hide_content.hide();
				$layer_write_review.show();
				$btn_area.find('input[type=button]').click(function(){
					$hide_content.show();
					$layer_write_review.hide();
					e.preventDefault();
				});
				$btn_review_cancel.click(function(e){
					$hide_content.show();
					$layer_write_review.hide();
					e.preventDefault();
				});
			}else{
				goLogin('', '로그인 후 서평작성이 가능합니다.\n로그인 하시겠습니까?');
			}
			e.preventDefault();
		});

		$btn_sort_like.click(function(e){
			$btn_sort_new.removeClass("bold on");
			$btn_sort_like.addClass("bold on");
			Review.list(book_num, series_num, "좋아요");
			e.preventDefault();
		});

		$btn_sort_new.click(function(e){
			$btn_sort_like.removeClass("bold on");
			$btn_sort_new.addClass("bold on");
			Review.list(book_num, series_num, "최신순");
			e.preventDefault();
		});
	},
	count : function(book_num, series_num, fnCallback){
		$.ajax({
			url : '/include/detail/_review_list_count.asp',
			data : { book_num : book_num, series_num : series_num},
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				fnCallback(data.count, 'review');
			},
			error : function(){
				fnCallback(0, 'review');
			}
		});
	},
	list : function(book_num, series_num, sort){		

		this.init(book_num);
		this.init(series_num);
		this.init(sort);
		var url = '/include/detail/_review_list.asp';

		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {
				book_num:book_num,
				series_num: series_num,
				sort : sort
			};
			this._datalist.bind(true);
		}else{

			this._datalist = new BOOKCUBE.dataList(document.getElementById('detailReviewList'), {
				url : url,
				data : {
					book_num:book_num,
					series_num:series_num,
					sort:sort
				},
				pageOuter : $('.book_review .pagenate'),
				callback : function(data){

					if(data.result[0]['totalItems'] > 0){
						var li = '';
						Review.jsonResult = [];
						Review._datalist.pageOuter.show();

						for(var i in data.result[1]){
							Review.jsonResult.push(data.result[1][i]);

							var div = Review.listLayer(i);

							li += '<li class="review_'+data.result[1][i].num+'">' + div + '</li>';
						}
						$('#detailReviewList').append($('<ul>'+li+'</ul>'));
					}else{
						li = '<li>회원님께서 첫 서평의 주인공이 되어주세요.</li>';
						$('#detailReviewList').append($('<ul class="nodata hide_content">'+li+'</ul>'));
						Review._datalist.pageOuter.hide();
					}

					Review.btnSet(data.result[1][0].book_num, data.result[1][0].series_num);
				},
				useHash : false,
				scrolldata : {
					target : $('.book_info_tab'),
					delay : 1000
				},
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
	},
	listLayer : function(result_num){
		var div = '';
		var btn = this.btnReview(result_num, 'list');
		div += '<div class="fl">'+
						'<p class="review_about">'+
							'<strong>'+this.jsonResult[result_num].nickname+'</strong><em>|</em>'+this.jsonResult[result_num].input_time+'<em>|</em><span class="rank_star star'+ this.jsonResult[result_num].review_point+'">별점'+ this.jsonResult[result_num].review_point+'</span><em>|</em><span class="icons like"></span>좋아요: <strong class="orange">'+this.jsonResult[result_num].recommend_count+'</strong>'+
						'</p>'+
						'<p class="review_txt">'+this.jsonResult[result_num].content+'</p>'+
					'</div>'+
					'<div class="fr btn_area">'+btn+'</div>';
		return div;
	},
	modifyLayer : function(result_num){
		var rev = this.jsonResult[result_num];
		var review_content = rev.content.replace(/<br>/g, '\n');
		var btn = this.btnReview(result_num, 'modify');
		var book_num = $(".write_review_wrap").find('input[name=book_num]').val();
		var series_num = $(".write_review_wrap").find('input[name=series_num]').val();
		var review_point = rev.review_point;

		var div = '';
		div += '<div class="fl">'+
			'<form class="review_'+rev.num+'" method="post" action="" onsubmit=""><input type="hidden" name="num" value="'+ rev.num +'"><input type="hidden" name="book_num" value="'+ book_num +'"><input type="hidden" name="review_point" value="'+ review_point +'"><input type="hidden" name="series_num" value="'+ series_num +'">'+
			'<div class="review_about">'+
			'<p class="fl"><strong>'+rev.nickname+'</strong><em>|</em>'+this.jsonResult[result_num].input_time+'<em>'+
			'|</em><div class="mo_star_wrap"><div class="mo_review_star"><p class="on'+ review_point +'">별점주기</p></div><ul class="mo_s_star"><li><p class="star1" data="1"><span class="hide">별점1</span></p></li><li><p class="star2" data="2"><span class="hide">별점2</span></p></li><li><p class="star3" data="3"><span class="hide">별점3</span></p></li><li><p class="star4" data="4"><span class="hide">별점4</span></p></li><li><p class="star5" data="5"><span class="hide">별점5</span></p></li></ul></div><em>'+
			'|</em><span class="icons like"></span>좋아요: <strong class="orange">'+this.jsonResult[result_num].recommend_count+'</strong></p>'+
			'</div>'+
			'<p class="textarea_modify">'+
				'<textarea cols="5" rows="10" name="write_book_review">'+review_content+'</textarea>'+
			'</p></form>'+
		'</div>'+
		'<div class="fr btn_area">'+btn+'</div>';

		return div;
	},
	btnReview : function(result_num, pos){

		var btn = '';
		if(this.jsonResult[result_num].member_num == this.user_num){

			if(pos == 'list'){
				btn = '<a href="javascript:;" onClick="Review.modify('+result_num+')" class="btn review">수정</a>&nbsp;<a href="javascript:;" onClick="Review.del('+this.jsonResult[result_num].num+')" class="btn review">삭제</a>';
			}else{
				btn = '<a href="javascript:;" onClick="Review.write(\'.review_'+this.jsonResult[result_num].num+'\');" class="btn review">확인</a>&nbsp;<a href="javascript:;" onClick="Review.cancel('+result_num+');" class="btn review">취소</a>';
			}
		}else{
			if(!this.jsonResult[result_num].recommend_yn && pos == 'list'){
				btn = '<a href="javascript:;" onClick="Review.recommend('+this.jsonResult[result_num].num+')" class="btn review_like"><span class="icons like"></span>좋아요</a>';
			}
		}
		return btn;
	},
	modify : function(result_num){
		$('.review_'+this.jsonResult[result_num].num).empty().html(this.modifyLayer(result_num));
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
					$(this).parent().parent().parent().parent().find('input[name=review_point]').val(i);
				}
			}
		});
	},
	cancel : function(result_num){
		$('.review_'+this.jsonResult[result_num].num).empty().html(this.listLayer(result_num));
	},
	write : function(_target){

		var target = $(_target);
		var mode = (newTrim(target.find('input[name=num]').val()).length == 0) ? 'write' : 'modify';
		var content = target.find('textarea[name=write_book_review]').val();
		var num = target.find('input[name=num]').val();
		var book_num = target.find('input[name=book_num]').val();
		var series_num = target.find('input[name=series_num]').val();
		var review_point = target.find('input[name=review_point]').val();

		if(review_point.length == 0){
			alert('별점을 선택해주세요.');
			return false;
		}
		if(newTrim(content).length == 0){
			alert('서평을 작성해 주세요.');
			return false;
		}

		$.ajax({
			url : '/include/detail/_review_write.asp',
			type : 'post',
			dataType : 'json',
			data : {
				mode : mode,
				book_num : book_num,
				series_num : series_num,
				content : content,
				review_point : review_point,
				num : num
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.success){
					if(mode == 'write'){
						$(".write_review_wrap").find('textarea[name=write_book_review]').val('');
						Review.list(book_num, series_num);
					}else{
						Review._datalist.reload();
					}
				}else{
					alert(data.message);
				}
			},
			error: function(){}
		});
	},
	del : function(num){
		var book_num = $(".write_review_wrap").find('input[name=book_num]').val();
		var series_num = $(".write_review_wrap").find('input[name=series_num]').val();
		$.ajax({
			url : '/include/detail/_review_write.asp',
			type : 'get',
			dataType : 'json',
			data : {
				mode : 'del',
				num : num,
				book_num : book_num,
				series_num : series_num
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.success){
					Review.list(book_num, series_num);
				}else{
					alert(data.message);
				}
			},
			error: function(){}
		});
	},
	recommend : function(num){
		var book_num = $(".write_review_wrap").find('input[name=book_num]').val();
		var series_num = $(".write_review_wrap").find('input[name=series_num]').val();
		if(this.user_num){
			$.ajax({
				url : '/include/detail/_review_recommend.asp',
				type : 'post',
				dataType : 'json',
				data : {
					num : num,
					book_num : book_num,
					series_num : series_num
				},
				headers : {'cache-control' : 'no-cache'},
				cache : false,
				success : function(data){
					if(data.success){
						alert('추천하셨습니다.');
						Review._datalist.reload();
					}else{
						alert(data.message);
					}
				},
				error:function(){}
			});
		}else{
			goLogin('', '로그인 후 추천하실 수 있습니다.\n로그인 하시겠습니까?');
		}
	}
};

var Cart = {
	user_num : null,
	book : [],
	cartType : null,
	clear : function(cartType){
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');
		this.adult_yn = ($.cookie("adult_yn") == null || $.cookie('adult_yn') == '') ? null : $.cookie('adult_yn');
		this.book = [];
		this.cartType = cartType;
	},
	check : function(){
		if(this.book.length == 0){
			return false;
		}else{
			return true;
		}
	},
	isLogin : function(){
		if(!this.user_num){
			return goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}else{
			return true;
		}
	},
	isAdult : function(){
		var cart_able = true;
		var adultcheck = adultBookCheck('book', this.book);
		if(adultcheck.adult_book_count > 0){
			if(this.adult_yn != 'Y'){
				cart_able = false;
			}
		}
		return cart_able;
	},
	instant : function(cartType, book_num){
		location.href=httpsUrl + '/include/cart/instant.asp?book_num='+book_num+'&cartType='+cartType;
	},
	add : function(cartType, book_num){
		this.clear(cartType);
		this.book.push(book_num);
		this._add();
	},
	adds : function(cartType, target){
		this.clear(cartType);
		$('input[name='+target+']').each(function() {
			if($(this).is(':checked')){
				Cart.book.push($(this).val());
			}
		});
		this._add();
	},
	_add : function(){

		if(this.isLogin()){
			if(!this.check()){
				if(this.cartType == 'cart'){
					alert('책바구니에 담을 도서가 없습니다.');
				}else if(this.cartType == 'rental'){
					alert('대여할 도서를 선택해 주세요');
				}else if(this.cartType == 'buy'){
					alert('구매할 도서를 선택해 주세요');
				}else if(this.cartType == 'buy_rent_long'){
					alert('소장할 도서를 선택해 주세요');
				}
				return false;
			}
		}else{
			return false;
		}

		if(!this.isAdult()){
			location.href='https://www.bookcube.com/member/adult_check.asp?return_url='+ escape('/mypage.asp?class=bookcube&page=book_cart');
		}else{

			var url = '/include/cart/_addcart.asp';
			$.ajax({
				url : url,
				type : 'post',
				dataType : 'json',
				data : {
					book : this.book.join(","),
					cartType : this.cartType
				},
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					if(data.success){
						if(Cart.cartType == 'cart' || Cart.cartType == 'cart_rent_long'){
							if(confirm(data.message)){
								location.href='/mypage.asp?class=bookcube&page=book_cart';
							}
						}else if(Cart.cartType == 'rental'){
							location.href=httpsUrl+'/order/order_book.asp?order_info=rent';
						}else if(Cart.cartType == 'flat_fee' || Cart.cartType == 'comic_flat_fee'){
							if(confirm('대여/정액 다운로드 페이지에 추가되었습니다.\n지금 확인하시겠습니까?')){
								location.href='/mypage.asp?sub_list=rental';
							}
						}else if(Cart.cartType == 'buy' || Cart.cartType == "buy_cart" || Cart.cartType == "buy_rent_long"){
							location.href=httpsUrl+'/order/order_book.asp?order_info=ebook';
						}
					}else{
						alert(data.message);
					}
				},
				error: function(){}
			});
		}
	},
	series : function(cartType, book_num, series_num){
		this.clear(cartType, 'instant');
		if(this.isLogin()){

			$.ajax({
				url : '/include/detail/_series_list.asp',
				type : 'post',
				dataType : 'json',
				data : {
					book_num : book_num,
					series_num : series_num,
					buyType : cartType
				},
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					if(data.result[1].length > 0){
						for(var i in data.result[1]){
							Cart.book.push(data.result[1][i].book_num);
						}						
						Cart._add();
					}else{
						alert('도서가 없습니다.');
						return false;
					}
				},
				error: function(){}
			});
		}
	},
	del : function(book_num){
		this.clear();
		this.book.push(book_num);
		this._del();
	},
	dels : function(target){
		this.clear();
		$('input[name='+target+']').each(function() {
			if($(this).is(':checked')){
				Cart.book.push($(this).val());
			}
		});
		this._del();
	},
	_del : function(){
		if(!this.check()){
			alert('삭제 할 도서가 없습니다.');
			return false;
		}

		if(confirm('체크된 책바구니의 도서들을 삭제하시겠습니까?')){
			$.ajax({
				url : '/include/cart/_delcart.asp',
				type : 'post',
				dataType : 'json',
				data : {book : this.book.join(",")},
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){
					if(!data.success){
						alert(data.message);
					}
					location.reload();
				},
				error: function(){}
			});
		}
	},
	calculate : function(target){
		this.clear();
		var total_count = $('input[name='+target+']:checked').length;
		var _series_price = 0;
		var _series_long_term_rental_price = 0;
		var _series_price_count = 0;
		var _series_long_term_rental_price_count = 0;
		var _series_savemoney = 0;
		var _series_long_term_rental_savemoney = 0;
		var _price = 0;
		var _long_term_rental_price = 0;
		var _price_count = 0;
		var _long_term_rental_price_count = 0;
		var _series_book_price = 0;
		var _price_save = 0;
		var _long_term_rental_save = 0;
		var _series_book_save = 0;
		var _total_price = 0;
		var _total_save = 0;

		var cart_val = $('input[name=cart_val').val() ;
		if (cart_val == 'series')	{
			_series_price = $('input[name=series_price').val() ;
			_series_long_term_rental_price = $('input[name=series_long_term_rental_price').val() ;
			_series_price_count = $('input[name=price_book_count]').val();
			_series_long_term_rental_price_count = $('input[name=long_term_rental_price_count]').val();
			_series_savemoney = $('input[name=series_savemoney]').val();
			_series_long_term_rental_savemoney = $('input[name=series_long_term_rental_savemoney]').val();
		}		

		$('input[name='+target+']').each(function() {
			if($(this).is(':checked')){
				//구매
				if($(this).attr('data') == '0'){
					var _this_book_price = parseInt($('input[name='+$(this).val()+']').val());
					var _this_book_save = parseInt($(this).parent().parent().find('.cart_save_money').text());
					_price += _this_book_price;
					_price_save +=_this_book_save;
					if(_this_book_price > 0){_price_count += 1}
				}
				//10년
				if($(this).attr('data') == '2'){
					var _this_long_term_price = parseInt($('input[name='+$(this).val()+']').val());
					var _this_long_term_save = parseInt($(this).parent().parent().find('.cart_save_money').text());

					_long_term_rental_price += _this_long_term_price;
					_long_term_rental_save += _this_long_term_save;
					if(_this_long_term_price > 0){_long_term_rental_price_count += 1}
				}
				// 시리즈
				if($(this).attr('data') == ''){
					_series_book_price += parseInt($('input[name='+$(this).val()+']').val());
					_series_book_save += parseInt($(this).parent().parent().find('.cart_save_money').text());
				}

				if (cart_val == 'series')	{
					if(parseInt(_series_price_count) > 0 && _price_count == parseInt(_series_price_count)){
						_price = parseInt(_series_price);
						_price_save = parseInt(_series_savemoney);						
					}
					if(parseInt(_series_long_term_rental_price_count) > 0 && _long_term_rental_price_count == parseInt(_series_long_term_rental_price_count)){
						_long_term_rental_price = parseInt(_series_long_term_rental_price);
						_long_term_rental_save = parseInt(_series_long_term_rental_savemoney);
					}
				}

				_total_price = _series_book_price + _price + _long_term_rental_price;
				_total_save = _series_book_save + _price_save + _long_term_rental_save;

				/*
				total_count += 1;
				if (parseInt($(this).parent().parent().find('.cart_price').text().replace(',', '')) == 0){
					free_book_count += 1 ;
				}
				total_price += parseInt($(this).parent().parent().find('.cart_price').text().replace(',', ''));
				total_save_money += parseInt($(this).parent().parent().find('.cart_save_money').text().replace(',', ''));
				total_sale += parseInt($(this).parent().parent().find('.cart_ratio').text().replace(',', ''));
				*/
			}
		});
		/*
		if (cart_val == 'series')	{
			$('.cart_total_count').text(numberWithCommas(total_count)+' 종');
			if (paid_book_count == parseInt (total_count - free_book_count))	{
				$('.cart_total_price').text(numberWithCommas(series_price) + ' 원');
			}else{
				$('.cart_total_price').text(numberWithCommas(total_price) + ' 원');
			}
			$('.cart_total_savemoney').text(numberWithCommas(total_save_money)+' 원');
			$('.cart_total_ratio').text((total_count == 0) ? '0%' : parseInt(total_sale / total_count) + '%');
			
		}else{
			$('.cart_total_count').text(numberWithCommas(total_count)+' 종');
			$('.cart_total_savemoney').text(numberWithCommas(total_save_money)+' 원');
			$('.cart_total_ratio').text((total_count == 0) ? '0%' : parseInt(total_sale / total_count) + '%');
			$('.cart_total_price').text(numberWithCommas(total_price) + ' 원');
		}
		*/

		$('.cart_total_count').text(numberWithCommas(total_count)+' 종');
		$('.cart_total_savemoney').text(numberWithCommas(_total_save)+' 원');
		$('.cart_total_price').text(numberWithCommas(_total_price) + ' 원');
	}
};

var SerialDetail = {
	init : function(serial_num){
		/* 상세페이지 - 탭메뉴별 컨텐츠 바꾸기 */
		var $trigger_tab = $(".book_info_tab a");
		var $tab_contents = $(".book_detail_contents div.tab_contents");

		$tab_contents.hide();
		$trigger_tab.click(function(e){
			$trigger_tab.removeClass("on");
			$(this).addClass("on");

			$trigger_tab.each(function(i){
				if($trigger_tab.eq(i).hasClass("on"))
				{
					$tab_contents.hide();
					if($trigger_tab.eq(i).hasClass('tabReview')){
						if($('#detailReviewList').html() == ''){
							SerialReview.list(serial_num);
						}
					}
					if($trigger_tab.eq(i).hasClass('tabSerial')){
						if($('#author_serial_list').html() == ''){
							AuthorSerial.list(serial_num);
						}
					}
					$tab_contents.eq(i).show();
				} else {
					$tab_contents.eq(i).hide();
				}
			});
			e.preventDefault();
		});
		SerialSplit.list(serial_num);

		$trigger_tab.eq(0).addClass('on');
		$tab_contents.eq(0).show();

		SerialReview.count(serial_num, this._callback);
	},
	_callback : function(_ajaxValue){
		if(_ajaxValue > 0){
			$('.book_info_tab .tabReview').text('댓글('+_ajaxValue+')');
		}
	}
};

var SerialSplit = {
	_datalist : null,
	_sort : '출판일 역순',
	serial_num : null,

	list : function(serial_num){
		this.serial_num = serial_num;
		var url = '/include/serial/_serial_split_list.asp';

		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {serial_num:serial_num, sort : this._sort};
			this._datalist.bind(true);
		}else{
			this._datalist = new BOOKCUBE.dataList(document.getElementById('serial_split'), {
				url : url,
				data : {
					serial_num : serial_num,
					sort : this._sort
				},
				pageOuter : $('#detail_serial_split .pagenate'),
				callback : function(data){
					if(data.result[0]['totalItems'] > 0){
						$('#serial_split').html('');
						$('#detail_serial_split #check_all').attr('checked', false);
						var tr = '';
						for(var i in data.result[1]){
							
							var disabled = '';
							
							var split_num = data.result[1][i].split_num;
							var serialcount = data.result[1][i].serialcount;
							var name = data.result[1][i].name;
							var price = data.result[1][i].price;
							var duplicate_yn = data.result[1][i].duplicate_yn;
							var view_count = data.result[1][i].view_count;
							var publish_time = data.result[1][i].publish_time;

							var title = name;
							if(serialcount){
								title = serialcount + '화 | ' + name;
							}

							for(var j in data.result[1][i].file_type_list){
								var btn = '';
								var file_type_name = data.result[1][i].file_type_list[j].file_type_name ;
								var file_type = data.result[1][i].file_type_list[j].file_type;

								if(duplicate_yn){
									btn = '<a href="javascript:;" onClick="serial_down(\''+serial_num+''+split_num+''+file_type+'\');" class="btn gray">다운로드</a>';
									disabled = 'disabled=disabled';
								}else{
									if(price == 0){
										btn = '<a href="javascript:;" onClick="SerialSplit.add(\''+serial_num+'\', this);" class="btn gray">0 원</a>';
										disabled = 'disabled=disabled';
									}else{
										btn = '<a href="javascript:;" onClick="SerialSplit.add(\''+serial_num+'\', this);" class="btn gray">'+price+' 원</a>';
									}
								}
							
								if (j == 0){									
									tr += '<tr>'+
										'<th><input type="checkbox" name="book_chk" '+disabled+' value="'+ split_num +'" data="'+ price +'" class="input_chk" title="도서 선택" /></th><th><span class="f14">'+title+'</span></th>'+
										'<td>'+ file_type_name +'</td><td>'+ view_count +'</td><td>'+publish_time+'</td><td><p class="btn_area">'+btn+'</p></td>'+
									'</tr>';
								}else{
									if(!duplicate_yn){
										btn = '';
									}
									tr += '<tr>'+
										'<th></th><th><span class="f14">'+title+'</span></th>'+
										'<td>'+ file_type_name +'</td><td></td><td></td><td><p class="btn_area">'+btn+'</p></td>'+
									'</tr>';
								}								
							}							
						}

						var table = '<table summary="독점연재 전체회차보기 리스트" class="basic type_double_line" cellspacing="0">'+
							'<caption>독점연재 전체회차보기</caption>'+
							'<colgroup>'+
								'<col width="50" /><col width="*" /><col width="66" /><col width="66" /><col width="83" /><col width="104" />'+
							'</colgroup>'+
							'<thead>'+
								'<tr>'+
									'<th scope="col" colspan=2 abbr="전자책 제목">전자책 제목</th>'+
									'<th scope="col" abbr="파일포멧">파일포맷</th>'+
									'<th scope="col" abbr="조회수">조회수</th>'+
									'<th scope="col" abbr="등록일">등록일</th>'+
									'<th scope="col" abbr="다운로드">다운로드</th>'+
								'</tr>'+
							'</thead>'+
							'<tbody>'+
							tr +
							'</tbody>'+
							'</table>';

							$('#serial_split').html(table);
							checkbox();
					}
				},
				useHash : false,
				scrolldata : {
					target : $('.book_info_tab'),
					delay : 1000
				},
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
	},
	sort : function(){
		this._sort = (this._sort == '출판일 역순') ? '출판일 순' : '출판일 역순';
		var text = (this._sort == '출판일 역순') ? '1화부터 정렬' : '최신순 정렬';
		$('.select_btn a.btn_sort span').text(text);
		this.list(this.serial_num);
	},
	add : function(serial_num, obj){
		$('input[name=book_chk]').attr('checked',false);
		$('input[name=all_chk]').attr('checked',false);
		var _this = $(obj).parent().parent().parent().find('input[name=book_chk]');
		_this.attr('checked', true);
		SerialCart.add(serial_num, _this);
	}
};

var SerialReview = {
	_datalist : null,
	user_num : null,
	init : function(serial_num){
		this.serial_num = serial_num;
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');

		if($('#detailNoticeList').html() == ''){
			this.notice();
		}
	},
	count : function(serial_num, fnCallback){
		$.ajax({
			url : '/include/serial/_serial_review_count.asp',
			data : { serial_num : serial_num },
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				fnCallback(data.count);
			},
			error : function(){
				fnCallback(0);
			}
		});
	},
	notice : function(){
		$.ajax({
			url : '/include/serial/_comment_notice_list.asp',
			data : { serial_num : this.serial_num },
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.result.length > 0){
					var tr = '';
					for(var i in data.result){
						tr += '<tr>'+
									'<th>관리자</th>'+
									'<td class="al">'+data.result[i].content+'</td>'+
									'<td class="ac">'+data.result[i].input_time+'</td>'+
								'</tr>';
					}
					var table = '<table summary="댓글 공지 리스트" cellspacing="0">'+
							'<caption>댓글 목록</caption>'+
							'<colgroup>'+
								'<col width="22%" /><col width="*" /><col width="16%" />'+
							'</colgroup>'+
							'<tbody>'+
							tr+
							'</tbody>'+
							'</table>';

					$('#detailNoticeList').append(table);
				}
			},
			error : function(){}
		});
	},
	list : function(serial_num){
		this.init(serial_num);

		var url = '/include/serial/_serial_review_list.asp';

		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {
				serial_num:serial_num,
				notice_yn : false
			};
			this._datalist.bind(true);
		}else{
			this._datalist = new BOOKCUBE.dataList(document.getElementById('detailReviewList'), {
				url : url,
				data : {
					serial_num:serial_num,
					notice_yn : false
				},
				pageOuter : $('.serial_review .pagenate'),
				callback : function(data){
					if(data.result[0]['totalItems'] > 0){
						var tr = '';
						for(var i in data.result[1]){
							var btn = '';
							if(SerialReview.user_num == data.result[1][i].member_num){
								btn = '<a href="javascript:;" onClick="SerialReview.del(\''+data.result[1][i].num+'\')" class="btn_del"><span class="hide">삭제</span></a>';
							}
							tr += '<tr>'+
										'<th>'+data.result[1][i].nickname+'</th>'+
										'<td class="al">'+data.result[1][i].content+btn+'</td>'+
										'<td class="ac">'+data.result[1][i].input_time+'</td>'+
									'</tr>';
						}
						var table = '<table summary="댓글 리스트" cellspacing="0">'+
							'<caption>댓글 목록</caption>'+
							'<colgroup>'+
								'<col width="22%" /><col width="*" /><col width="16%" />'+
							'</colgroup>'+
							'<tbody>'+
							tr+
							'</tbody>'+
							'</table>';

						$('#detailReviewList').append(table);
					}
					$('.box_comment').find('input[name=content]').keyup(function(e){
						if(e.keyCode == 13){
							SerialReview.write();
						}
					});
				},
				useHash : false,
				scrolldata : {
					target : $('.book_info_tab'),
					delay : 1000
				},
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
	},
	isLogin : function(){
		if(!this.user_num){
			return goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}else{
			return true;
		}
	},
	write : function(){
		if(this.isLogin()){
			var content = $('.box_comment').find('input[name=content]');
			if(newTrim(content.val()).length == 0){
				alert('내용을 입력해 주세요');
			}else{
				$.ajax({
					url : '/include/serial/_serial_review_process.asp',
					type : 'post',
					dataType : 'json',
					data : {
						mode : 'write',
						serial_num : this.serial_num,
						content : content.val()
					},
					headers : {'cache-control' : "no-cache"},
					cache : false,
					success : function(data){
						if(data.success){
							content.val('');
							SerialReview.list(SerialReview.serial_num);
							SerialReview.count(SerialReview.serial_num, SerialDetail._callback);
						}else{
							alert(data.message);
						}
					},
					error: function(){}
				});
			}
		}
	},
	del : function(num){
		$.ajax({
			url : '/include/serial/_serial_review_process.asp',
			type : 'post',
			dataType : 'json',
			data : {
				num : num,
				mode : 'del'
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.success){
					SerialReview._datalist.reload();
					SerialReview.count(SerialReview.serial_num, SerialDetail._callback);
				}else{
					alert(data.message);
				}
			},
			error: function(){}
		});
	}
};

var AuthorSerial = {
	list : function(serial_num){
		var url = '/include/serial/_author_serial_list.asp';

		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {serial_num:serial_num};
			this._datalist.bind(true);
		}else{
			this._datalist = new BOOKCUBE.dataList(document.getElementById('author_serial_list'), {
				url : url,
				data : {
					serial_num:serial_num,
					notice_yn : false
				},
				pageOuter : $('#author_serial .pagenate'),
				callback : function(data){
					if(data.result[0]['totalItems'] > 0){
						var table, tr='';
						for(var i in data.result[1]){
							var _class_name, _title, _serialcount, _author, _serial_num, _adult_yn, _monopoly_yn, _newebook_yn, _last_input_time, _new_text, _adult_text, _monopoly_text, _prefer_yn, prefer_fun;
							_class_name = data.result[1][i].class_name;
							_title = data.result[1][i].title;
							_serialcount = data.result[1][i].serialcount;
							_author = data.result[1][i].author;
							_serial_num = data.result[1][i].serial_num;
							_adult_yn = data.result[1][i].adult_yn;
							_monopoly_yn = data.result[1][i].monopoly_yn;
							_view_count = data.result[1][i].view_count;
							_newebook_yn = data.result[1][i].newebook_yn;
							_last_input_time = data.result[1][i].last_input_time;
							_prefer_yn = data.result[1][i].prefer_yn;

							if (_prefer_yn == "false"){
								prefer_fun = 'PremiumPreferInput';
								prefer_val = '선호작 추가';
							}else{
								prefer_fun = 'PremiumPreferDelete';
								prefer_val = '선호작 해제';
							}

							_new_text = (_newebook_yn) ? '&nbsp;<span class="icon">New</span>':'';
							_adult_text = (_adult_yn)?'&nbsp;<span class="icon adult">19</span>':'';
							_monopoly_text = (_monopoly_yn)?'&nbsp;<span class="icon monopoly">독점</span>':'';

							tr += '<tr>'+
										'<td class="col_left"><a href="/storycube/premium/serial_split_list.asp?serial_num='+_serial_num+'" class="title"><span class="purple">['+_class_name+']</span>'+_title+' ['+_serialcount+'화]</a>'+_new_text + _monopoly_text + _adult_text +'<p>최근작성일 '+_last_input_time+'<em>|</em>전체조회 '+_view_count+'</p></td>'+
										'<td><a href="#none" class="author">'+_author+'</a></td><td><a href="javascript:;" onClick="'+ prefer_fun +'(\''+_serial_num+'\');" class="btn btn_purple">'+ prefer_val +'</a></td>'+
									'</tr>';
						}
						table = '<table summary="작가의 다른 연재" class="type_result">'+
									'<caption>작가의 다른 연재</caption>'+
									'<colgroup><col width="567px" /><col width="102px" /><col width="188px" /></colgroup>'+
									'<tbody>'+tr+'</tbody></table>';

						$('#author_serial_list').append(table);
						AuthorSerial._datalist.pageOuter.show();
					}else{
						AuthorSerial._datalist.pageOuter.hide();
						$('#author_serial_list').append('<p style="height:200px;text-align:center;line-height:200px">다른 연재가 없습니다.</p>');
					}
				},
				useHash : false,
				scrolldata : {target : $('.book_info_tab'),delay : 1000},
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
	}
};

var SerialCart = {
	_data : {},
	init : function(serial_num){
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');
		this._overlay = $('#overay_pop').overlay({api:true, mask:'#333'});
		this.serial_num = serial_num;
		this.split = [];
		this.total_price = 0;
		this.data = {};
	},
	check : function(){
		if(this.split.length == 0){
			return false;
		}else{
			return true;
		}
	},
	isLogin : function(){
		if(!this.user_num){
			return goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}else{
			return true;
		}
	},
	all : function(serial_num){
		this.init(serial_num);
	
		BOOKCUBE.getInstance("pageLoading").show();

		$.ajax({
			url : '/include/serial/_serial_split_list.asp',
			type : 'post',
			dataType : 'json',
			data : {
				serial_num : serial_num,
				pageNum : 1,
				pagesize : 1000
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.result[0]['totalItems'] > 0){
					for(var i in data.result[1]){
						if(!data.result[1][i].duplicate_yn){
							if(data.result[1][i].sell_yn){
								SerialCart.split.push(data.result[1][i].split_num);
								SerialCart.total_price += parseInt(data.result[1][i].price);
							}
						}
					}
					BOOKCUBE.getInstance("pageLoading").hide();

					SerialCart._add();
				}else{
					alert('연재 리스트가 없습니다.');
				}
			},
			error: function(){}
		});
	},
	add : function(serial_num, obj){
		this.init(serial_num);
		this.split.push(obj.val());
		this.total_price += parseInt(obj.attr('data'));
		this._add();
	},
	adds : function(serial_num, target){
		this.init(serial_num);

		$('input[name='+target+']').each(function() {
			if($(this).is(':checked')){
				SerialCart.split.push($(this).val());
				SerialCart.total_price += parseInt($(this).attr('data'));
			}
		});
		this._add();
	},
	_add : function(){
		if(this.isLogin()){
			if(this.check()){
				if(this.total_price == 0){
					this._data = {
						serial_num : this.serial_num,
						splitData : this.split.join(',')
					};
					this.cart();
				}else{
					this.showOverlay();
				}
			}else{
				alert('구매할 연재를 선택해 주세요.');
				return false;
			}
		}
	},
	showOverlay : function(){
		$('#overay_pop').find('.spt_cnt').text(this.split.length + '회');
		$('#overay_pop').find('.spt_price').text(this.total_price + '원');
		$('#order_total_price').val(this.total_price);
		$('#order_serial_num').val(this.serial_num);
		serial_coupon_list(this.serial_num,this.total_price);
		this._overlay.load();
	},
	cart : function(){
		$.ajax({
			url : '/order/_order_serial_process.asp',
			type : 'post',
			dataType : 'json',
			data : this._data,
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				
				if(!data.success){
					alert(data.message);
				}

				if (data.coupon_send == 'ok'){
					if (confirm(data.coupon_name +'이 지급되었습니다.\n[마이페이지>나의 쿠폰] 페이지로 이동하시겠습니까?')){
						location.href = "/mypage.asp?class_name=storycube&page=mybookcube&sub_list=serial";
					} 
				}
				
				if(SerialSplit._datalist){
					SerialSplit._datalist.reload();

					if(confirm('구매하신 연재를 바로 보시겠습니까?')){
						serial_down_order(data.order_num, data.serial_num);
					}

				}else{
					SerialSplit.list(SerialCart._data.serial_num);
				}
			},
			error: function(){}
		});
	},
	pay : function(){
		var pay_type = $('#overay_pop').find('input[name=pay_method]:checked').val();
		var coupon_discount_amount = $('#coupon_discount_amount').val();
		var couponSelect = $('#couponSelect').val();
		if(pay_type){
			if(confirm('연재를 결제하시겠습니까?')){
				this._data = {
					serial_num : this.serial_num,
					splitData : this.split.join(','),
					pay_type : pay_type,
					coupon_discount_amount : coupon_discount_amount,
					couponSelect : couponSelect

				};
				this.cart();
			}
		}else{
			alert('결제 수단을 선택해 주세요');
			return false;
		}
		this._overlay.close();
	}
};

var SerialPrefer = {
	_serial : [],
	user_num : ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num'),
	adult_yn : ($.cookie("adult_yn") == null || $.cookie('adult_yn') == '') ? null : $.cookie('adult_yn'),
	isAdult : function(){
		var cart_able = true;
		var adultcheck = adultBookCheck('serial', this._serial);
		if(adultcheck.adult_book_count > 0){
			if(this.adult_yn != 'Y'){
				cart_able = false;
			}
		}
		return cart_able;
	},
	add : function(serial_num){
		this._serial = [];
		this._serial.push(serial_num);
		this._process('input');
	},
	dels : function(target){
		this._serial = [];
		$('input[name='+target+']').each(function() {
			if($(this).is(':checked')){
				SerialPrefer._serial.push($(this).val());
			}
		});
		this._process('del');
	},
	_process : function(mode){
		if(this.user_num){
			if(this._serial.length == 0){
				alert('선호작을 선택해 주시기 바랍니다.');
				return false;
			}else{
				if(this.isAdult()){
					$.ajax({
						url : '/include/serial/_serial_prefer_process.asp',
						type : 'get',
						dataType : 'json',
						data : {
								mode : mode,
								serial : this._serial.join(',')
						},
						headers : {'cache-control' : "no-cache"},
						cache : false,
						success : function(data){
							alert(data.message);
							if(mode == 'del'){
								location.reload();
							}
						},
						error: function(){}
					});
				}else{
					alert('성인 로그인 필요');
				}
			}
		}else{
			goLogin('', '로그인 후 이용가능합니다.\n로그인 하시겠습니까?');
		}
	}
};

var faq = {
	_num : null,
	init : function(){
		var $faq_q = $('table tr.faq_q');
		var $faq_a = $('table tr.faq_a');
		$faq_a.hide();
		$faq_q.click(function(){
			faq.view($(this), $(this).find('td').attr('class'));
		});
	},
	view : function($this, num){
		if(this._num != num){
			this._num = num;
			$.ajax({
				url : '/_ajax/_bbs_view_count_add.asp',
				data : {num : num},
				type : 'post',
				dataType : 'json',
				headers : {'cache-control' : "no-cache"},
				cache : false,
				success : function(data){},
				error : function(){}
			});
			var $faq_a = $('table tr.faq_a');
			$faq_a.hide();
			$this.next().show();
		}
	}
};

function my1vs1ImgDel(num){
	if(confirm('이미지를 삭제하시겠습니까?')){
		$.ajax({
			url : '/include/customer/_my1vs1_img_del.asp',
			data : {num : num},
			type : 'post',
			dataType : 'json',
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				alert(data.message);
				location.reload();
			},
			error : function(){
				alert('이미지를 삭제하지 못했습니다.\n다시 시도해 주시기 바랍니다.');
				location.reload();
			}
		});
	}
}

var eventComment = {
	_datalist : null,
	user_num : null,
	event_num : null,
	list : function(event_num){
		this.user_num = ($.cookie("user_num") == null || $.cookie('user_num') == '') ? null : $.cookie('user_num');
		this.event_num = event_num;

		//var url = '/upload/event/'+event_num+'/event_comment.asp';
		var url = '/upload/event/312/_event_comment.asp';

		if(this._datalist){
			this._datalist.url = url;
			this._datalist.data = {
				event_num : event_num
			};
			this._datalist.bind(true);
		}else{
			this._datalist = new BOOKCUBE.dataList(document.getElementById('detailReviewList'),{
				url : url,
				data : { event_num : event_num },
				pageOuter : $('.event_comment .pagenate'),
				callback : function(data){
					if(data.result[0]['totalItems'] > 0){
						var tr = '';
						for(var i in data.result[1]){
							var btn = '';
							if(eventComment.user_num == data.result[1][i].member_num){
								btn = '<a href="javascript:;" onClick="eventComment.del(\''+data.result[1][i].num+'\')" class="btn_del"><span class="hide">삭제</span></a>';
							}
							tr += '<tr>'+
										'<th>'+data.result[1][i].id+'</th>'+
										'<td class="al">'+data.result[1][i].content+btn+'</td>'+
										'<td class="ac">'+data.result[1][i].input_time+'</td>'+
									'</tr>';
						}
						var table = '<table summary="댓글 리스트" cellspacing="0">'+
							'<caption>댓글 목록</caption>'+
							'<colgroup>'+
								'<col width="22%" /><col width="*" /><col width="16%" />'+
							'</colgroup>'+
							'<tbody>'+
							tr+
							'</tbody>'+
							'</table>';

						$('#detailReviewList').append(table);
						eventComment._datalist.pageOuter.show();
					}else{
						var table = '<table summary="댓글 리스트" cellspacing="0">'+
							'<caption>댓글 목록</caption>'+
							'<colgroup>'+
								'<col width="22%" /><col width="*" /><col width="16%" />'+
							'</colgroup>'+
							'<tbody>'+
							'<tr><td colspan="3"><p class="nodata">SNS 공유 후 댓글을 남겨 주세요.</p></td></tr>'+
							'</tbody>'+
							'</table>';

						$('#detailReviewList').append(table);
						eventComment._datalist.pageOuter.hide();
					}

					$('.box_comment').find('input[name=content]').keyup(function(e){
						if(e.keyCode == 13){
							eventComment.write();
						}
					});
				},
				useHash : false,
				error: function(xhr, status) {
					alert("[" + status + "]\n\n" + xhr.responseText);
				}
			});
		}
	},
	write : function(){
		if(this.user_num){
			var content = $('.box_comment').find('input[name=content]');
			if(newTrim(content.val()).length == 0){
				alert('내용을 입력해 주세요');
			}else{
				$.ajax({
					url : '/upload/event/312/_event_comment_process.asp',
					type : 'post',
					dataType : 'json',
					data : {
						mode : 'write',
						content : content.val()
					},
					headers : {'cache-control' : "no-cache"},
					cache : false,
					success : function(data){
						if(data.success){
							content.val('');
							eventComment.list(eventComment.event_num);
						}else{
							alert(data.message);
						}
					},
					error: function(){}
				});
			}
		}else{
			goLogin('','로그인 후 작성 가능합니다.\n로그인 하시겠습니까?');
		}
	},
	del : function(num){
		$.ajax({
			url : '/upload/event/312/_event_comment_process.asp',
			type : 'post',
			dataType : 'json',
			data : {
				num : num,
				mode : 'del'
			},
			headers : {'cache-control' : "no-cache"},
			cache : false,
			success : function(data){
				if(data.success){
					eventComment._datalist.reload();
				}else{
					alert(data.message);
				}
			},
			error: function(){}
		});
	}
};

//길이 체크
function checkLength(thisObj){
	if (thisObj.value.length == thisObj.maxLength){
		nextFocus(thisObj);
	}
}

//영문/숫자 체크
function nohangulChk(thisObj){

	var cnt = 0;

	for(i=0; i<thisObj.value.length; i++) {
		if(thisObj.value.charCodeAt(i)>=0 && thisObj.value.charCodeAt(i)<=127) {
			// ascii
		} else {
			// not ascii
			cnt++;
		}
		if(cnt!=0){
			alert('영문 및 숫자만 입력해주세요'); 
			thisObj.value = "";							
		}
	}
}

//숫자 체크
function numChk(thisObj){
	if(isNaN(thisObj.value) == true){
		alert("숫자로 입력해주세요");
		thisObj.value = "";
	}
}

//input 이동
function nextFocus(element){
	var form = element.form;
	
	for (var i=0; i<form.length ;i++ ){

		if (form.elements[i] == element)	{
			i++;
			var next = form.elements[i];
			next.focus();
			break;	
		}			
	}	
}

function Left(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else
		return String(str).substring(0,n);
}
function Right(str, n){
	if (n <= 0)
		return "";
	else if (n > String(str).length)
		return str;
	else {
		var iLen = String(str).length;
	return String(str).substring(iLen, iLen - n);
	}
}

function facebook(url){
	objShortUrl = makeShortUrl(url);
	if(objShortUrl){
		shortUrl = objShortUrl.data.url;
	}else{
		shortUrl = '';
	}
	window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(shortUrl),"facebook","width=600,height=500,scrollbars=no,toolbar=no,resizable=yes");
}

function twitter(url, text){
	objShortUrl = makeShortUrl(url);
	if(objShortUrl){
		shortUrl = objShortUrl.data.url;
	}else{
		shortUrl = '';
	}
	window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(shortUrl) + '&text=' + encodeURIComponent(text),"twitter","width=600,height=433,scrollbars=no,toolbar=no");
}

function makeShortUrl(longUrl){
	/*
	var apiUrl = 'https://api-ssl.bitly.com/v3/shorten?domain=bit.ly&format=json&access_token=5942ac80ce8ffbfdcbecd1f007803eb023adda03&longUrl='+encodeURIComponent(longUrl);
	var apiData = {};

	$.getJSON(apiUrl, function(data){
		console.log(data);
	});
	*/
	var apiData = {};

	$.ajax({
		url : '/_ajax/_make_short_url.asp',
		data : {longUrl : longUrl},
		dataType : 'json',
		type : 'post',
		async : false,
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			apiData = data
		},
		error : function(){alert('error');}
	});

	return apiData;
}

function check_facebook_close(){
	$("a.mem_facebook_chk[rel]").overlay().close();
}

function check_twitter_close(){
	$("a.mem_twitter_chk[rel]").overlay().close();
}

function check_sns_close(){
	$("a.mem_sns_chk[rel]").overlay().close();
}

function chk_99_event_close(){
	$("a.mem_sns_chk[rel]").overlay().close();
}

function check_alarm_view(){
	$("#alarm_view").attr("src", "/include/alarm_pop.asp");
	$(".alarm_layer_box").fadeIn();
}

function visit_history_input(){

	$.ajax({
		url : '/novel/common/data/_visit_history_input.asp',
		data : {},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
			}				
		},
			error : function(){
			alert('실패하였습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}


function WebtoonPreferInput(webtoon_num){

	$.ajax({
		url : '/webtoon/action/_prefer_input.asp',
		data : {webtoon_num : webtoon_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			alert(data.message);
			location.reload();
		},
		error : function(){
			alert('선호작으로 추가하지 못했습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}

function WebtoonPreferDelete(webtoon_num){

	$.ajax({
		url : '/webtoon/action/_prefer_delete.asp',
		data : {webtoon_num : webtoon_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			alert(data.message);
			location.reload();
		},
		error : function(){
			alert('선호작 해제하지 못했습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}

// 웹툰 19금 노출 yn 설정
function AdultViewYnSet(){

	$.ajax({
		url : '/webtoon/include/_adult_view_yn_set.asp',
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if(data.success){
				location.reload();
			}else{
				alert(data.message);
			}
		},
		error : function(){
		}
	});	
	
}









//storycube 관련 추가-----------------------------------------------------------------------------------------------------------
function msgFadeOut(){
	$('#msg_layer').fadeOut();
}

function enterKeySearch(e){

	fnGetEvent(e) ;

	if(keyVal == 13){  /* IE기준으로 설명 */			
		total_search();
	}
}

function fnGetEvent(e) { 
	if (navigator.appName == 'Netscape') { 
		keyVal = e.which; //Netscape, CHROME 
	} else if (navigator.appName == 'Microsoft Internet Explorer'){ 
		keyVal = e.keyCode ; //MS 
	} 
	else{ 
		keyVal = e.which ; //OPERA 
	} 
		return keyVal;
}

function total_search(){

	var objFrm = $("#searchFrm") ;		
	var searchOption = $("input[name=searchOption]",objFrm);	
	var searchString = $("input[name=searchString]",objFrm);
	var searchSerialType = $("input[name=serial_type]",objFrm);

	if (searchString.val() == ""){alert('검색어를 입력해주세요'); return ;	}

	var action_page = "/storycube/search.asp?searchOption="+ searchOption.val() +"&searchString="+ escape(searchString.val()) +"&serial_type="+ searchSerialType.val();

	location.href = action_page ;
}

function PreferInput(member_serial_num){

	$.ajax({
		url : '/storycube/common/_prefer_input.asp',
		data : {member_serial_num : member_serial_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
				location.reload();
			}
		},
		error : function(){
			alert('선호작으로 추가하지 못했습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}

function PreferDelete(member_serial_num){

	$.ajax({
		url : '/storycube/common/_prefer_delete.asp',
		data : {member_serial_num : member_serial_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
				location.reload();
			}
		},
		error : function(){
			alert('선호작에서 해지하지 못했습니다.\n다시 시도해 주시기 바랍니다.');
		}
	});
}

function PremiumPreferInput(serial_num){
	$.ajax({
		url : '/storycube/common/_premium_prefer_input.asp',
		data : {serial_num : serial_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
				location.reload();
			}
		},
		error : function(){
			alert('선호작으로 추가하지 못했습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}


function PremiumPreferDelete(serial_num){
	$.ajax({
		url : '/storycube/common/_premium_prefer_delete.asp',
		data : {serial_num : serial_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
				location.reload();
			}
		},
		error : function(){
			alert('선호작에서 해지하지 못했습니다.\n다시 시도해 주시기 바랍니다.');
		}
	});
}

//북마크
function bookmark_serial(member_serial_num, msg_num){

	$.ajax({
		url : '/storycube/common/_member_serial_bookmark_input.asp',
		data : {
			member_serial_num : member_serial_num,
			msg_num : msg_num				
		},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
			}				
		},
			error : function(){
			alert('실패하였습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}

function recommend_serial(member_serial_num, msg_num){

	$.ajax({
		url : '/storycube/common/_member_serial_recommend_input.asp',
		data : {
			member_serial_num : member_serial_num,
			msg_num : msg_num				
		},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
			}				
		},
			error : function(){
			alert('실패하였습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});		
}

function recommend(msg_num){
	
	$.ajax({
		url : '/storycube/board/_recommend_input.asp',
		data : {
			msg_num : msg_num
			},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			if (data.message == "login"){
				if ( confirm("로그인 후 이용가능합니다.\n로그인 하시겠습니까??") ) {
					location.href = httpsUrl +"/login.asp?<%=login_return_url%>";
				}
			}else{
				alert(data.message);
			}				
		},
			error : function(){
			alert('실패하였습니다.\n다시 시도해 주시기 바랍니다.');

		}
	});
}

function serial_report(){
	window.open(httpUrl +'/customer.asp?page=my1vs1&page2=write&member_serial_report=Y','member_serial_report','width=1000,height=600,left=50,top=50,location=yes,scrollbars=yes,toolbar=yes,resizable=yes');
}

function serial_download_report(){
	window.open(httpUrl +'/customer.asp?page=my1vs1&page2=write&member_serial_download=Y','member_serial_report','width=800,height=600,left=50,top=50,location=yes,scrollbars=yes,toolbar=yes,resizable=yes');
}

$(document).ready(function(){ 	

	$('.popup_message').click(function(e) {

		e.preventDefault();

		var position = $(window).scrollTop();
		var divTop = position + e.clientY + 10; //상단 좌표
		var divLeft =  e.clientX; //좌측 좌표
		var m_num = $(this).attr("member_num");
		var m_nickname= $.trim($(this).html());
		if (m_num == '<%=user_num%>'){				
			var msg_layer_name = "msg_layer_my";
			$("#msg_layer").fadeOut();	
		}else{
			var msg_layer_name = "msg_layer";	
			$("input[name=member_num]","#frmMsg").val( m_num);

			$("#msg_layer_my").fadeOut();
		}
	

		$("input[name=sc_keyword]","#frmMsg").val( m_nickname);
	
		$('#'+ msg_layer_name).css({
			"top": divTop
			,"left": divLeft
			, "position": "absolute"
		}).fadeIn('fast', function(){
			msg_view_flag = 0;
		});
				
	});
	
	// 이름으로 검색
	$('#btnSearchName').click(function(e) {

		var nickname = $("input[name=sc_keyword]","#frmMsg").val();	

		e.preventDefault();			
		
		msgFadeOut();	

		location.href = "/storycube/search.asp?searchOption=nickname&searchString="+ escape(nickname);
	});
	
	$('#btnMessagePopup').click(function(e) {

		$('#msg_layer').hide();
		$('.in_lyr').hide();

		e.preventDefault();

		var position = $(window).scrollTop();
		
		var divTop = position + e.clientY; //상단 좌표
		var divLeft =  e.clientX - 600; //좌측 좌표
		var to_member_num = $("input[name=member_num]","#frmMsg").val();	
		var to_nickname = $("input[name=sc_keyword]","#frmMsg").val();	

		$("input[name=to_member_num]","#popup_send_frm").val(to_member_num);
		$("input[name=to_nickname]","#popup_send_frm").val(to_nickname);
		$("input[name=to_title]","#popup_send_frm").val('');
		$("textarea[name=message_to_msg]","#popup_send_frm").val('');

		$('#message_to_nickname').html(to_nickname) ;
		
		$('#popup_send').css({
			"top": divTop
			,"left": divLeft
			, "position": "absolute"
		}).fadeIn('fast', function(){
			
		});	
	});

	
});

function lenLimit2( objTxt, limit, limitid )
{	
	var text = objTxt.val();	
	var fieldname = objTxt.attr("alertmsg");
	if( $.trim(fieldname) == "" ) {
		fieldname = "댓글은";
	}
	var textlength = text.length;
	if(textlength > limit) {
/*
		if( limitid != '' ) {
			$('#' + limitid).html( fieldname +' '+limit+'자 이상 쓸수 없습니다!');
		} else {
			alert(fieldname +' '+ limit+'자 이상 쓸수 없습니다!');
		}
*/
		objTxt.val(text.substr(0,limit));
		return false;
	} else {
		if( limitid != '' ) {
			$('#' + limitid).html(textlength);
		}
		return true;
	}
}

function gift_book(book_num, gift_order_type){
	location.href=httpsUrl + '/include/cart/instant.asp?book_num='+book_num+'&gift_order_type='+gift_order_type;
}

function adult_login(msg, url){
	if(confirm(msg)){
		location.href = httpsUrl +"/member/adult_check.asp?return_url="+ escape(url)
	}else{
		return false;
	}	
}