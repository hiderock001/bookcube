// 빈값체크 (메세지출력 및 포커싱)
function IsInputString(obj, strMsg){
	if (IsEmpty(obj.value)){
		alert(strMsg);
		obj.focus();
		return false;
	}
	return true;
}

// 길이 체크 (메세지출력 및 포커싱)
function IsInputLength(obj, strMsg, intLength){
	if ( obj.value.length != intLength ){
		alert(strMsg);
		obj.focus();
		return false;
	}
	return true;
}

// 빈값체크
function IsEmpty(strValue){
	if (strValue == null || getTrim(strValue,"A") == "")  return true;
	return false;
}

// 공백제거
function getTrim(strValue, strTrimType){
	var strResult = "";

	switch (strTrimType.toUpperCase()){
		case "L"	:   strResult = strValue.replace(/^\s+/g,"");							break;  // 왼쪽공백제거
		case "R"	:   strResult = strValue.replace(/\s+$/g,"");							break;  // 오른쪽공백제거
		case "B"	:   strResult = strValue.replace(/^\s+/g,"").replace(/\s+$/g,"");		break;  // 양쪽공백제거
		case "A"	:   strResult = strValue.replace(/\s+/g,"");							break;  // 전체공백제거
		default		:   strResult = strValue;												break;
	}

	return strResult;
}

// 새창 띄우기
function newWin(strURL, winName, winW, winH, strScroll ) { //v2.0
	var height = screen.height;
	var width = screen.width;
	var left = width / 2 - (winW/ 2);
	var top = height / 2 - (winH / 2);
	var features = "width="+winW+",height="+winH+",scrollbars="+strScroll+",toolbar=no,statusbar=no,left="+left+",top="+top
	var objWin =  window.open(strURL, winName, features);
	objWin.focus();
}



function message_del(message_num){
	 $.ajax({
		url : '/storycube/common/_message_delete.asp',
		data : {message_num : message_num},
		type : 'post',
		dataType : 'json',
		headers : {'cache-control' : "no-cache"},
		cache : false,
		success : function(data){
			alert(data.message);
			location.reload();					
		},
		error : function(){
			alert('쪽지 삭제가 실패하였습니다.');
			location.reload();	
		}
	});	

}

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

$(document).ready(function(){
	$("#btnscrollup").click(function(){
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});	
});