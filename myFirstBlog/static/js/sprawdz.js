function check(){
	var number =document.getElementById("pole").value;
	//document.write(number);
	if (number>0) document.getElementById("myNumber").innerHTML="Liczba jest dodatnia";
	else if (number<0) document.getElementById("myNumber").innerHTML="Liczba jest ujemna";
	else if (number==0) document.getElementById("myNumber").innerHTML="Podałeś zero";
	else  document.getElementById("myNumber").innerHTML="To nie jest liczba";
}