
var painted;//
var content;//		

		//create the three arrays, set the winning combinations, start the iterater, clean board
	window.onload=function(){
			
		painted = new Array();
		content = new Array();
		winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

			for(var i = 0; i <= 8; i++){
			painted[i] = false;
			content[i]='';
			}
	}

	var squaresFilled = 0;	
	var c;
	var cxt;
	var theCanvas;//the box - canvas
	var turn = 0;//who will play x or o

	function canvasSelected(canvasNumber){

		theCanvas = "canvas"+canvasNumber;
		c = document.getElementById(theCanvas);
		cxt = c.getContext("2d");
			
			//drawing method for X
			if(painted[canvasNumber-1] ==false){
				if(turn%2==0){
					cxt.beginPath();
					cxt.moveTo(20,20);
					cxt.lineTo(80,80);
					cxt.moveTo(80,20);
					cxt.lineTo(20,80);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'X';
				}
				//drawing method for o
				else{
					cxt.beginPath();
					cxt.arc(50,50,40,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					content[canvasNumber-1] = 'O';
				}
				//change player, play, check for winners
			turn++;
			painted[canvasNumber-1] = true;
			squaresFilled++;
			checkForWinners(content[canvasNumber-1]);

			//tie game result, refresh
			if(squaresFilled==9){
				
				$(".replyText").text("No Winner. Game Over. Refresh Page For New Game.");

			}
			
				} else	{

					alert("Space Not Available");
				}

		}

	var winningCombinations;//possible wins
	//determine winner
	function checkForWinners(symbol){
			
		for(var a = 0; a < winningCombinations.length; a++){

			if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
				$(".replyText").text(symbol+ " WON!");
				playAgain();
			}
			}

		}

	function playAgain(){
		var y=confirm("PLAY AGAIN?");  
			
			if(y==true){
				
				location.reload(true);

			} else	{

				$(".replyText").text("Goodbye");
				//return alert("Goodbye");with div element replyText;
		}

	}



	
