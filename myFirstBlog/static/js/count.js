function countBetween(){

	var valueOne = document.getElementById("numberOne").value;
	var valueTwo = document.getElementById("numberTwo").value;
	if (!isNaN(valueOne) && !isNaN(valueTwo)){
		var lowerNumber = valueOne;
		var greaterNumber = valueTwo;

		if(valueOne > valueTwo){
		lowerNumber = valueTwo;
		greaterNumber = valueOne;
		}
		
		var ourResponse =""
		for(var i= lowerNumber; i<=greaterNumber;i++){
			ourResponse += i + " ";
		}
		
		document.getElementById("numbers").innerHTML = ourResponse;
	}
	else{
	document.getElementById("numbers").innerHTML = "Co najmniej jedna z wartość to nie liczba :)";	
	}
}