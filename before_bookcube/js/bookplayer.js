/*ooz
version="2.1.20"
date="2015-09-07"
ignore="false"
updateMode="absolute"
product="fxlibrary"
*/

	 function getBrowserType(){
		var _ua = function(a){
			a=a.toLowerCase();
			var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(trident)\/(\d.\d)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];
			return b;
		}
		return _ua(navigator.userAgent)[1]||"";
	}

    //Default State
    var isSupported = false;

    //Helper Methods
    function getProtocol(){
        return "bookcubeshelf";
    }

    function getUrl(url){
        return url;
    }

    function result(installUrl){
		if (!isSupported)
		{
//			if(confirm("북플레이어 앱을 설치이후에 실행해 주세요. 이동하시겠습니까??")){
//				location.href=installUrl;
//			}
		}        
    }

    //Handle Click on Launch button
    function load(url, installUrl){
        if(getBrowserType() == "mozilla"){
        	$('.bookplayerDownInfo .guide.firefox').show();
            launchMozilla(url, installUrl);            
        }else if(getBrowserType() == "chrome"){
            $('.bookplayerDownInfo .guide.chrome').show();
            launchChrome(url, installUrl);
        }else if(getBrowserType() == "trident"){
        	$('.bookplayerDownInfo .guide.ie').show();
            launchIE(url, installUrl);
        }else if(getBrowserType() == "msie"){
        	$('.bookplayerDownInfo .guide.ie').show();
            launchIE(url, installUrl);
        }else if(getBrowserType() == "webkit"){
        	$('.bookplayerDownInfo .guide.safari').show();
        	launchSafari(url, installUrl);        	
        }else{
        	alert('죄송합니다. 해당 브라우저는 지원되지 않는 브라우저입니다.')
        	self.close();
        }
    }

    //Handle IE
    function launchIE(url, installUrl){

        var aLink = document.getElementById('hiddenLink');

        isSupported = false;
        aLink.href = url;

        //Case 1: protcolLong
		//console.log("Case 1");
        if(navigator.appName=="Microsoft Internet Explorer"
                && aLink.protocolLong=="Unknown Protocol"){
            isSupported = false;
            result(installUrl);
            return;
        }


/*
		//IE10+
        if(navigator.msLaunchUri){
            navigator.msLaunchUri(url, 
                   function(){ isSupported = true; result(installUrl); }, //success
                   function(){ isSupported=false; result(installUrl);  }  //failure 
            );
            return;
        }
 */
        //Case2: Open New Window, set iframe src, and access the location.href
		//console.log("Case 2");
        var myWindow = window.open('about:blank','','width=10,height=10');
		myWindow.location.href = url;
        setTimeout(function(){
            try{
                myWindow.location.href;
                isSupported = true;
            }catch(e){
                //Handle Exception
            }

            if(isSupported){
                myWindow.setTimeout('window.close()', 100);
            }else{
				try{
					myWindow.close();
				 }catch(e){
					isSupported = false;
				}
            }
            result(installUrl);
        }, 100)
    };

    //Handle Firefox
    function launchMozilla(url, installUrl){
        var iFrame = document.getElementById('hiddenIframe');

        isSupported = false;

        //Set iframe.src and handle exception
        try{
            iFrame.contentWindow.location.href = url;
            isSupported = true;
            result(installUrl);
        }catch(e){
            //FireFox
            if (e.name == "NS_ERROR_UNKNOWN_PROTOCOL"){
                isSupported = false;
                result(installUrl);
            }
        }
    }

    //Handle Chrome
    function launchChrome(url, installUrl){
		var protcolEl = document.getElementById('protocol');
        isSupported = false;

        protcolEl.focus();

        protcolEl.onblur = function(){
            isSupported = true;
            console.log("Text Field onblur called");
        };

        //will trigger onblur
        location.href = url; 

        setTimeout(function(){
            protcolEl.onblur = null;
    		result(installUrl);      
        }, 500);

    }

	function launchOpera(url, installUrl) {	
		var iFrame = document.getElementById('hiddenIframe');

        isSupported = false;

		iFrame.contentWindow.location = url;
		window.setTimeout(function () {
			try {
				var b = iFrame.contentWindow.location == "about:blank";
				isSupported = true;
			} catch (e) {
				// alert 실패할 경우
			}
			result(installUrl);
		}, 100);		
	}
	
	function launchSafari(url, installUrl){		
		var clickAt = +new Date;
		var iFrame = document.getElementById('hiddenIframe');
		
		try{
			 iFrame.contentWindow.location.href = url;
		}catch(e){
			result(installUrl);
		}
		bookcubeAppCheck = setTimeout(function(){
			if(+new Date - clickAt < 2000){
				result(installUrl);
			}
		}, 1000);
	}
