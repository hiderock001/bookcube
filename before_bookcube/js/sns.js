var SNS = {
	KakaoTalk : function(options){
		this.options = options || {};
		this.options.msg = options.msg || null;
		this.options.url = options.url || null;
		this.options.appid = options.appid || 'www.bookcube.com';
		this.options.appver = options.appver || '1.0';
		this.options.type = options.type || 'link';
		this.options.appname = options.appname || 'e북포털 북큐브';

		return {
			_options : this.options,
			linkUrl : function(){
				__options = this._options;

				kakao.link('talk').send({
					msg : __options.msg,
					url : __options.url,
					appid : __options.appid,
					appver : __options.appver,
					appname : __options.appname,
					type : __options.type
				});
			}
		};
	},
	KakaoStory : function(options){
		this.options = options || {};
		this.options.post = options.post;
		this.options.appid = options.appid || 'www.bookcube.com';
		this.options.appver = options.appver || '1.0';
		this.options.appname = options.appname || 'e북포털 북큐브';
		this.options.urlinfo = options.urlinfo || null;

		return {
			_options : this.options,
			linkUrl : function(){
				var __options = this._options;
				var urlinfo = '';

				if(__options.urlinfo != null){
					urlinfo = JSON.stringify(__options.urlinfo);
				}

				kakao.link('story').send({
					post : __options.post,
					appid : __options.appid,
					appver : __options.appver,
					appname : __options.appname,
					urlinfo : urlinfo
				});
			}
		};
	},
	facebook : function(url, _appOs){
		if(_appOs == 'web'){
			window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url));
		}else{
			//window.open('https://m.facebook.com/sharer.php?u='+encodeURIComponent(url));
			location.href='https://m.facebook.com/sharer.php?u='+encodeURIComponent(url);
		}
		return false;
	},
	twitter : function(url, text){
		//window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text));
		location.href='https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text);
	}
};

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