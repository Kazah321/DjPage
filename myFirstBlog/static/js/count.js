function countBetween(){
	console.log("Hello count!");
	var valueOne = document.getElementById("numberOne").value;
	var valueTwo = document.getElementById("numberTwo").value;
	
	var lowerNumber = valueOne;
	var greaterNumber = valueTwo;

	if(valueOne > valueTwo){
	lowerNumber = valueTwo;
	greaterNumber = valueOne;
	}
	console.log("lower:");
	console.log(lowerNumber);
	console.log("greater");
	console.log(greaterNumber);
	var ourResponse =""
	for(var i= lowerNumber; i<=greaterNumber;i++){
		ourResponse += i + " ";
	}
	console.log("Response:");
	console.log(ourResponse);
//	document.write(ourResponse)
	document.getElementById("numbers").innerHTML = ourResponse;

}