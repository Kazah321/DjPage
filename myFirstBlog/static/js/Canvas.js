
var mouse = {
	x: undefined,
	y:undefined
}


function events(canvas){
	canvas.addEventListener('mousedown',
		function(event) {
			
			mouse.x=event.offsetX-canvas.offsetLeft;
			mouse.y=event.offsetY-canvas.offsetTop;

			boardgame.update("yellow",mouse);
			//console.log("Clik!");

	})
}


var Rec = function(x,y,h,w,color){
	this.x=x;
	this.y=y;
	this.height=h;
	this.width=w;
	this.color = color;
	this.draw = function() {
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.height,this.width);
	}

	this.update = function(color){
		this.color = color
		this.draw();
	}
}

function Board(){
	
	this.myArray = [];

	this.create = function(){ 
		var board = [
		[50,15,100,100,"#FF0000"],[150,15,100,100,"#0000FF"],[250,15,100,100,"#FF0000"],
		[50,115,100,100,"#0000FF"],[150,115,100,100,"#FF0000"],[250,115,100,100,"#0000FF"],
		[50,215,100,100,"#FF0000"],[150,215,100,100,"#0000FF"],[250,215,100,100,"#FF0000"]
		]

		
		for (var i=0;i<board.length;i++){

		 this.myArray.push(new Rec(board[i][0],board[i][1],board[i][2],board[i][3],board[i][4]));
		
		//console.log("Jest " + board[i])
		}
	}
	
	this.draw=function(){
		for (var i=0;i<this.myArray.length;i++){
		 	this.myArray[i].draw();
		}
	}

	this.update=function(color,mouse){
		for (var i=0;i<this.myArray.length;i++){
			//console.log(mouse.x);
			//console.log(this.myArray[i].x);
			//console.log("color")
			if (this.myArray[i].x < mouse.x &&  (this.myArray[i].x + this.myArray[i].width) > mouse.x){
				//console.log("update")
				if(this.myArray[i].y < mouse.y &&  (this.myArray[i].y + this.myArray[i].height) > mouse.y)
		 			this.myArray[i].update(color);
		 	}
		}	
	}
	
}


function tekst(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.font= "49px Arial";
	ctx.strokeText("Simple Game",50,370);
}
var boardgame = new Board();
	boardgame.create();


function gameLoop(){
	window.requestAnimationFrame(gameLoop)
	var canvas = document.getElementById("myCanvas");
	events(canvas);
	boardgame.draw();

}
