require(['jquery', 'bookcube'], function($, bc){
	$(function(){
		function _fnView(data, num){
			if(bc.isMobile()){
				if(page == "free"){
					return '<li><a href="#"><p>'+ data.title +'</p><p>'+ data.author +'</p><p><span class="genre">'+ data.category +'</span><em>|</em>총 200화<em>|</em>2015.12.30</p><p class="icon"><span class="hit">130</span><span class="prefer">1</span><span class="sweet">1</span></p></a></li>';
				}else{
					return '<li><a href="/novel/m/detail.asp"><span class="im_br"><img src="/mobile/images/novel/dokThum.jpg" alt="" /></span></a><h4>'+ data.title +'</h4><p>'+ data.author +'</p><p>'+ data.category +'</p></li>';
				}
			}else{
				var li_class = "";
				if(page == "muhyup" || page == "fantasy"){
					if(num % 5 == 4){
						li_class=' class="liLast"';
					}
					return '<li'+li_class+'><a href="/novel/detail.asp"><span class="im_br"><img src="/images/novel/thum_daylist.jpg" alt="" /></span><span class="nStoryNew">NEW</span><span class="nStoryUp">UP</span><span class="nStoryAdult">성인</span></a><p>'+ data.title +'</p><p class="dayInfo">'+ data.author +'<br /><span>'+ data.category +'</span></p></li>';
				}else if(page == "bl" || page == "romance"){
					if(num == 3){
						li_class=' class="no_ma"';
					}
					return '<li'+li_class+'><a href="#"><div class="largeImg"><span class="im_br"><img src="/images/novel/r_dayThum.jpg" alt="" /></span></div><div class="largeInfo"><p>'+ data.title +'</p><p class="dayInfo">'+ data.author +'<br /><span>'+ data.category +'</span></p></div></a></li>';
				}else if(page == "free"){
					if(num % 2 == 1){
						li_class=' class="sw"';
					}
					return '<li'+li_class+'><a href="#"><span class="category">[라이트노벨]</span><span class="freeDayName">'+ data.title +'</span><span class="freeDayPub">20화 미완결</a><span class="listAdult">성인</span><span class="listNew">NEW</span><span class="listUp">UP</span><p>'+ data.author +'<br /><span class="lately">두눈 뜨고 레벨업 151 - 6권<em>|</em>2015.12.03</span></p><p class="icon"><span class="hits">130</span><span class="prefer">130</span><span class="sweet">297</span></p></li>'
				}
			}
		}
		
		function _fnLoad(){
			//데이터 로드
			$.post('/novel/common/data/_todayserial.asp', {page : page, dayNum : now_week, sort : now_sort}, function(data, textStatus){
				arrSortWeek[now_sort][now_week] = data;
				_fnMakeUi(data);
			}, 'json');
		}

		function _fnMakeUi(data){
			//데이터로 UI 구성
			var ui = '';
			//베스트, 업데이트, 선호작 순의 활성화 변경
			sort.removeClass('on');
			sort.each(function(){
				if($(this).data('sort') == now_sort){
					$(this).addClass('on');
					return false;
				}
			});	
			
			//월,화,수,목,주말 활성화 변경
			week.removeClass('on');
			week.each(function(){
				if($(this).data('daynum') == now_week){
					$(this).addClass('on');
					return false;
				}
			});

			for(var i=0;i<data.length;i++){
				ui += _fnView(data[i], i);
			}
			target.find('.js_week_list_book').empty().append(ui);

			//모바일일 경우 더보기 버튼이 1개이므로 현재 보고 있는 요일정보를 셋팅
			if(bc.isMobile()){
				btn_more.data('daynum', now_week);
			}
		}

		function _fnWeek(dayNum){
			//데이터가 있는지 체크 후 없으면 데이터 로드
			now_week = dayNum;
			typeof arrSortWeek[now_sort][dayNum] !== 'undefined' ? _fnMakeUi(arrSortWeek[now_sort][dayNum]) : _fnLoad();
		}

		function _fnSort(sort_item){
			//요일은 현재 설정된 요일 정보로 판단.
			now_sort = sort_item;
			arrSortWeek[sort_item] = arrSortWeek[sort_item] || [];
			typeof arrSortWeek[sort_item][now_week] !== 'undefined' ? _fnMakeUi(arrSortWeek[sort_item][now_week]) : _fnLoad();
		}

		var arrSortWeek = [],
			target = $(".js_day_list"),
			page = $(".js_page_section").data("page"),
			sort = target.find(".js_sort"),
			week = target.find(".js_week_day"),
			btn_more = target.find(".btn_more"),
			now_sort = target.find(".js_sort.on").data("sort") || 'best',
			now_week = target.find(".js_week_day.on").data("daynum");

		sort.on("click", function(e){
			e.preventDefault();
			_fnSort($(this).data("sort"));
			return false;
		});

		//월,화,수,목,금,주말 클릭 이벤트
		week.on('click', function(e){
			e.preventDefault();
			_fnWeek($(this).data('daynum'));
		});
		btn_more.on('click', function(e){
			e.preventDefault();
			alert($(this).data('daynum'));
			return false;
		})

		_fnSort('best');
	});
});