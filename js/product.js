function getCookie(key){
		var value = decodeURIComponent(document.cookie);
		if(key){
			if(value.match(key+"=")){
				var valueArr = value.split("; ");
				for(var i = 0; i < valueArr.length ; i++){
					if(valueArr[i].match(key+"=")){
						return valueArr[i].substring(valueArr[i].indexOf("=")+1);
					}
				}
			}else{
				return false;
			}	
		}else{
			return value;
		}
	}
	function setCookie(key, value, CookieLive){
		var date = new Date();
		date = new Date(date.setDate(date.getDate() + parseInt(CookieLive)));
		document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date.toGMTString() + ";path=/";
	}