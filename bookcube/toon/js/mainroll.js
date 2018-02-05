require(['jquery', 'bookcube'], function($, bc){
	var mainRoll = {
		init : function(page){
			function isViewDeviceCheck(m){
				//m.matches -> true : 세로
				if(m.matches){
					return true;
				}else{
					if(screen.width > 800 || screen.height > 800){
						return false;
					}else{
						return true;
					}
				}
			}

			var _ = this;

			if(bc.isMobile()){
				var mql = window.matchMedia("(orientation:portrait)");
				this.viewDevice = isViewDeviceCheck(mql)
				
				mql.addListener(function(m){
					_.viewDevice = isViewDeviceCheck(m);
					_.interval();
				});
			}else{
				this.viewDevice = false;
			}

			this.load(page);
		},
		interval : function(){
			var _ = this;

			if(this.objInterval){
				clearInterval(this.objInterval);
			}
			if(this.data.length >= 9){
				this.start();
				if(!this.viewDevice){
					this.objInterval = setInterval(function(){_.start()}, 5000);
				}
			}
		},
		load : function(page){
			var _ = this;

			$.post('/novel/common/data/_main_roll.asp',{page : page}, function(data, textstatus){
				_.data = data;
				_.interval();
			}, 'json');
		},
		setPlace : function(){
			var bgArray = [1,2,3,4,5,6,7], rnd_bgArray;

			rnd_bgArray = this.rndsort(bgArray);

			if(rnd_bgArray[3] == 7){
				var c = rnd_bgArray.shift();
				rnd_bgArray.push(c);
			}

			return rnd_bgArray;
		},
		setPlaceData : function(arrPos){
			var rndData = this.rndsort(this.data.slice(0)), ui = [];

			for(var i = 0; i<arrPos.length; i++){
				if(arrPos[i] == '7'){
					ui.push(this.wide(rndData.splice(0,1)[0]));
				}else if(arrPos[i] == '1' || arrPos[i] == '2'){
					ui.push(this.swide(arrPos[i], rndData.splice(0,2)));
				}else{
					ui.push(this.square(arrPos[i], rndData.splice(0,1)[0]));
				}
			}
			return ui;
		},
		rndsort : function(data){
			return data.sort(function(){
				return Math.random() - Math.random()
			});
		},
		wide : function(data){
			return '<li class="pos7" data-pos="7"><a href="#"><img src="'+ data.imgurl +'_800x400.jpg"></a></li>';
		},
		swide : function(pos, data){
			var li='';
			for(var i=0; i<data.length;i++){
				li += '<div><a href="#"><img src="'+ data[i].imgurl +'_400x200.jpg"></a></div>';
			}
			return '<li class="pos'+ pos +'" data-pos="'+ pos +'">' + li + '</li>';
		},
		square : function(pos, data){
			return '<li class="pos'+ pos +'" data-pos="'+ pos +'"><a href="#"><img src="'+ data.imgurl +'_400x400.jpg"></a></li>';
		},
		start : function(){
			var arrUi = this.setPlaceData(this.setPlace()), ui = '';
			if(this.viewDevice){
				var item = [], mRoll;
				for(var i=0; i<arrUi.length; i++){
					if($(arrUi[i]).data('pos') == '7'){
						ui += '<div><ul>' + arrUi[i] + '</ul></div>';
					}else{
						item.push(arrUi[i]);
						if(item.length == 2){
							ui += '<div><ul>' + item.join("").toString() + '</ul></div>';
							item = [];
						}
					}
				}

				require(["jquery", "slick"], function($){
					$('.le_wrap').empty().append('<div id="mainRoll">'+ui+'</div>');
					$(".le_wrap").removeClass("pc").addClass("mobile");

					$("#mainRoll").slick({
						speed:300,
						autoplay:true,
						autoplaysSpeed:5000
					});
				});
			}else{
				if($(".le_wrap").find("#mainRoll")){
					$(".le_wrap #mainRoll").remove();
				}
				ui = $('<ul>' + arrUi.join("").toString() + '</ul>');
				ui.hide();
				$(".le_wrap").removeClass("mobile").addClass("pc")
				$('.le_wrap').append(ui);
				if($('.le_wrap ul').length == 1){
					ui.show();
				}else{
					$('.le_wrap ul:first').fadeOut(100, function(){
						$(this).remove();
						ui.fadeIn(500);
					});
				}
			}
		}
	}

	$(function(){
		mainRoll.init($(".js_page_section").data("page"));
	})
});