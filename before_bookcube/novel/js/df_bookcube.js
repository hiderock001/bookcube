define(['jquery', 'cookie'], function($){
	var _ua = navigator.userAgent,
		_os,
		_model,
		_schema,
		setPlatform = function(){
			if(_ua.indexOf('Mac OS') > 0){
				if(_ua.indexOf('iPad') > 0){
					_model = 'tablet';
					_schema = 'bookPlayerhd://';
				}else{
					_model = 'mobile';
					_schema = 'bookPlayer://';
				}
				_os = 'ios';
			}else if(_ua.indexOf('Android') > 0){
				_os = 'android';
				_schema = 'bookcubeshelf://';

				if(_ua.indexOf('SHV-E150S') > 0 || _ua.indexOf('LG-LU8300') > 0 || _ua.indexOf('SHW-M380S') > 0 || _ua.indexOf('SHW-M480') > 0 || _ua.indexOf('GT-N5100') > 0 || _ua.indexOf('GT-5110') > 0 || _ua.indexOf('SHW-M380') > 0 || _ua.indexOf('SHV-E140') > 0 || _ua.indexOf('SHV-E150S') > 0 || _ua.indexOf('GT-P8110') > 0 || _ua.indexOf('GT-N8013') > 0){
					_model = 'tablet';
				}else{
					_model = 'mobile';
				}
			}else{
				_os = 'pc';
				_model = 'pc';
				_schema = 'bookcubeshelf://';
			}
		};

	return setPlatform(),{
		isLogin : function(){
			return $.cookie('user_num') ? true : false;
		},
		isMobile : function(){
			return _model == 'pc'?false:true;
		},
		os : function(){
			return _os;
		},
		store : function(){
			return (_os == 'ios') ? (_model == 'mobile') ? 'https://itunes.apple.com/kr/app/id576288015':'https://itunes.apple.com/kr/app/id590058402':(_os == 'android')?'market://details?id=com.bookcube.bookplayer':'';
		},
		schema : function(){
			return _schema;
		},
		isApp : function(){
			return (_os == 'android' && window.bookcubeApp)?true:false;
		},
		appVersion : function(){
			var version = 0;
			try{
				version = parseInt(window.bookcubeApp.getVersionInt());
			}catch(e){
				varsion = 0;
			}
			return version;
		}
	}
});