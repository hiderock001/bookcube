var BOOKCUBE = {};

BOOKCUBE.getInstance = function(instanceType) {
	switch (instanceType) {
		case "mask":
			if (this._mask == null) {
				this._mask = new BOOKCUBE.MaskEffect();
			}
			return this._mask;
		case "pageLoading":
			if (this._pageLoading == null) {
				this._pageLoading = new BOOKCUBE.PageLoading();
			}
			return this._pageLoading;
		default:
			break;
	}
};

BOOKCUBE.MaskEffect = function() {
	this.target = $("#bc_mask");
	if (this.target.length == 0) {
		this.target = $('<div id="bc_mask"></div>');
		$("body").append(this.target);
		this.target.css({
			"position":"absolute",
			"top":"0px",
			"left":"0px",
			"width":$(window).width(),
			"height":$(document).height(),
			"z-index":9000,
			"background-color":"rgba(0, 0, 0, 0.5)",
			"display":"none"
		});
	}
	if(window.addEventListener){
		window.addEventListener('resize', this, false);
	}else{
		window.attachEvent('resize', this);
	}
};

BOOKCUBE.MaskEffect.prototype = {
	show: function() {
		$("body").css("overflow", "visibile");
		this.render();
		this.target.show();
	},

	hide: function() {
		$("body").css("overflow", "visibile");
		this.render();
		this.target.hide();
	},

	render: function() {
		this.target.css({
			"width":$(window).width(),
			height:$(document).height()
		});
	},

	handleEvent: function(e) {
		switch (e.type) {
			case "resize": this.render(); break;
		}
	}
};

BOOKCUBE.PageLoading = function() {
	this.target = $("#bc_page_loading");
	if (this.target.length == 0) {
		this.target = $('<div id="bc_page_loading"></div>');
		$("body").append(this.target);
	}
	if(window.addEventListener){
		window.addEventListener('resize', this, false);
	}else{
		window.attachEvent('resize', this);
	}
};

BOOKCUBE.PageLoading.prototype = {
	show: function() {
		BOOKCUBE.getInstance("mask").show();
		this.render();
		this.target.show();
	},

	hide: function(delay) {
		var pageLoading = this;
		if (delay && delay != 0) {
			setTimeout(function() {
				pageLoading.hideNow();
			}, delay);
		} else {
			pageLoading.hideNow();
		}
	},

	hideNow: function() {
		BOOKCUBE.getInstance("mask").hide();
		this.render();
		this.target.hide();
	},

	render: function() {
		var target = $(this.target);
		$(target).css({"left":$(window).scrollLeft() + ($(window).width() - $(target).width()) / 2,
				"top":$(window).scrollTop() + ($(window).height() - $(target).height()) / 2});
	},

	handleEvent: function(e) {
		switch (e.type) {
			case "resize": this.render(); break;
		}
	}
};
//========================================================================
// DataList
//========================================================================

BOOKCUBE.dataList = function(target, options){
	if(target == null){return null}

	this.target = target;
	this.options = options || {};
	this.url = this.options.url;
	this.data = this.options.data || {};
	this.callback = this.options.callback || function(data) { if (!data.success) { alert(data.message); } };
	this.pagecallback = this.options.pagecallback || function(){};
	this.error = this.options.error || function(xhr, status) { alert("[" + status + "]\n\n" + xhr.responseText); };
	this.binder = this.options.binder || [];
	this.template = this.options.template || "";
	this.pageParamName = this.options.pageParamName || "pageNum";
	this.type = this.options.type || 'get';
	this.useHash = (this.options.useHash == undefined) ? true : this.options.useHash;
	this.scrolldata = this.options.scrolldata || null;
	this.historyback = this.options.historyback || function(){this.bind(false)}
	this.isCreatedHash = false;

	this.pageOuter = this.options.pageOuter || null;

	if (this.pageOuter != null)
	{
		this.pageOuter.activeClassName = this.pageOuter.activeClassName || "on";
	}

	this.startPage = 0;
	this.endPage = 0;
	this.totalPages = 0;
	this.itemCount = 0;
	this.pageCount = 0;
	this.totalItems = 0;
	this.selectedIndex = 0;
	this.nextPage = 0;
	this.prevPage = 0;

	//this.bind();
	if(window.addEventListener){
		window.addEventListener("hashchange", this, false);
	}else{
		window.attachEvent("hashchange", this);
	}

	this.init();
}
BOOKCUBE.dataList.prototype = {
	init : function(){
		if (this.useHash && window.location.hash) {
			this.resolveHash(window.location.hash.substring(1));
		}
		this.bind(true);
	},

	createHash: function() {
		var ret = "";
		if (this.url) {
			ret += "bc_url=" + encodeURIComponent(this.url);
		}
		if ($.param(this.data)) {
			ret += "&" + $.param(this.data).replace(/[+]/g, '%20');
		}
		return encodeURIComponent(ret);
	},

	saveHash: function() {
		if (this.useHash) {
			this.isCreatedHash = true;
			window.location.hash = this.createHash();
		}
	},

	resolveHash: function(hash) {
		var params = decodeURIComponent(hash).split("&");
		this.data = {};
		for (var i in params) {
			var kvp = params[i].split("=");
			var key = kvp[0];
			var val = decodeURIComponent(kvp[1]);

			if (key == "bc_url") {
				this.url = val;
			} else {
				this.data[key] = val;
			}
		}
	},

	myfunc : function(createHash) {
		if (createHash && this.isCreatedHash == false) {
			this.saveHash();
		}
	},

	reload: function() {
		this.data[this.pageParamName] = this.getPage();
		this.bind(false);
	},

	bind : function(createHash){
		var dataList = this;

		BOOKCUBE.getInstance("pageLoading").show();

		if (dataList.useHash && createHash == undefined) {
			createHash = true;
		}

		$.ajax({
			url : dataList.url,
			data : dataList.data,
			dataType : 'json',
			type : dataList.type,
			success : function(data){
				dataList.startPage = Number(data.result[0]["startPage"]);
				dataList.endPage = Number(data.result[0]["endPage"]);
				dataList.totalPages = Number(data.result[0]["totalPages"]);
				dataList.itemCount = Number(data.result[0]["itemCount"]);
				dataList.pageCount = Number(data.result[0]["pageCount"]);
				dataList.totalItems = Number(data.result[0]["totalItems"]);
				dataList.selectedIndex = Number(data.result[0]["selectedIndex"]);
				dataList.nextPage = Number(data.result[0]['nextPage']);
				dataList.prevPage = Number(data.result[0]['prevPage']);

				var itemContent;
				$(dataList.target).html('');
				for (var i in data.result[1]) {
					itemContent = dataList.translate(dataList.template, data.result[1][i]);
					$(dataList.target).append(itemContent);
				}

				dataList.myfunc(createHash);

				BOOKCUBE.getInstance("pageLoading").hide(200);
				dataList.pageRender();
				dataList.pageBinder();
				dataList.pagecallback();
				dataList.callback(data);
				setTimeout(function() {
					//console.log('dataList load...');
					dataList.isCreatedHash = false;
				}, 500);
			},
			error : function(xhr, status){
				BOOKCUBE.getInstance("pageLoading").hide();
				dataList.error(xhr, status);
			}
		});
	},
	translate: function(template, subjects) {
		var ret = template;
		for (var i in this.binder) {
			var binder = this.binder[i];
			var re = new RegExp("\{" + binder + "\}", "g");
			if (subjects[binder] != undefined) {
				ret = ret.replace(re, subjects[binder]);
			}
		}
		return ret;
	},
	pageRender: function() {
		if (this.pageOuter != null && this.pageOuter.length == 1) {
			var items = this.pageOuter.find("a.btn");
			var count = 0;

			for (var i = this.startPage; i < this.startPage + this.pageCount; i++) {
				var item = $(items.get(count));
				item.removeClass(this.pageOuter.activeClassName);
				item.css('display','none');
				if (i <= this.endPage) {
					item.css('display','inline-block');
					if (count == this.selectedIndex) {
						item.addClass(this.pageOuter.activeClassName);
					}
					item.html(i);
				}
				count++;
			}
			this.pageOuter.find(".first").css("visibility", this.prevPage == 0 ? "hidden" : "");
			this.pageOuter.find(".prev").css("visibility", this.prevPage == 0 ? "hidden" : "");
			this.pageOuter.find(".next").css("visibility", this.nextPage == 0 ? "hidden" : "");
			this.pageOuter.find(".last").css("visibility", this.nextPage == 0 ? "hidden" : "");
		}
	},

	pageBinder: function() {
		if (this.pageOuter != null && this.pageOuter.length == 1) {
			var dataList = this;
			var items = this.pageOuter.find("a.btn");
			var count = 0;
			var firstLink = this.pageOuter.find(".first")
			var prevLink = this.pageOuter.find(".prev");
			var nextLink = this.pageOuter.find(".next");
			var lastLink = this.pageOuter.find(".last");
			for (var i = this.startPage; i < this.startPage + this.pageCount; i++) {
				var item = $(items.get(count));
				if (i <= this.endPage) {
					var link = item;
					link.unbind("click");
					link.attr("page", dataList.startPage+count);
					link.click(function(e) {
						dataList.data[dataList.pageParamName] = $(this).attr("page");
						dataList.bind(true);
						dataList._scrollLink();
						e.preventDefault();
						return false;
					});
				}
				count++;
			}
			firstLink.unbind("click");
			prevLink.unbind("click");
			nextLink.unbind("click");
			lastLink.unbind("click");

			firstLink.click(function(e){
				dataList.data[dataList.pageParamName] = 1;
				dataList.bind(true);
				dataList._scrollLink();
				e.preventDefault();
				return false;
			});
			prevLink.click(function(e) {
				dataList.data[dataList.pageParamName] = dataList.prevPage;
				dataList.bind(true);
				dataList._scrollLink();
				e.preventDefault();
				return false;
			});
			nextLink.click(function(e) {
				dataList.data[dataList.pageParamName] = dataList.nextPage;
				dataList.bind(true);
				dataList._scrollLink();
				e.preventDefault();
				return false;
			});
			lastLink.click(function(e){
				dataList.data[dataList.pageParamName] = dataList.totalPages;
				dataList.bind(true);
				dataList._scrollLink();
				e.preventDefault();
				return false;
			});
		}
	},

	handleEvent: function(e) {
		switch (e.type) {
			case "hashchange":
				//console.log('hashchange : ' + this.isCreatedHash);
				if (this.useHash && this.isCreatedHash == false) {
					if (location.hash) {
						this.resolveHash(window.location.hash.substring(1));
						this.historyback(this.data);
					} else {
						history.back();
					}
				}
				this.isCreatedHash = false;
				break;
		}
	},
	
	getPage: function() {
		return this.startPage + this.selectedIndex;
	},
	
	_scrollLink : function(){
		if(this.scrolldata){
			scrollLink(this.scrolldata.target, this.scrolldata.delay);
		}
	}
};