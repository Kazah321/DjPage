function timer(){

		var toDay = new Date();

		var day = toDay.getDate();
		var month = toDay.getMonth()+1;
		var year = toDay.getFullYear();

		var hour =toDay.getHours();
		if (hour<10) hour = "0" + hour;
		var minute =toDay.getMinutes();
		if (minute<10) minute = "0" + minute;
		var seconds = toDay.getSeconds();
		if (seconds<10) seconds = "0" + seconds;

		document.getElementById("clock").innerHTML =
		 day+"/"+month+"/"+year+"|"+hour+":"+minute+":"+seconds;

		setTimeout("timer()",1000);

}