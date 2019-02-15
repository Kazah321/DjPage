function rec(x,y,h,w,color){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = color;
ctx.fillRect(x,y,h,w);
}

function create_board(){
	var board = [
	[50,15,100,100,"#FF0000"],[150,15,100,100,"#0000FF"],[250,15,100,100,"#FF0000"],
	[50,115,100,100,"#0000FF"],[150,115,100,100,"#FF0000"],[250,115,100,100,"#0000FF"],
	[50,215,100,100,"#FF0000"],[150,215,100,100,"#0000FF"],[250,215,100,100,"#FF0000"]
	
	]
	for (var i=0;i<board.length;i++){

	rec(board[i][0],board[i][1],board[i][2],board[i][3],board[i][4]);
	//console.log("Jest " + board[i])
	}
}

function tekst(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font= "49px Arial";
	ctx.strokeText("Simple Game",50,370)
}
