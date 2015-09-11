


var played; //is the canvas already used for a move 
var contains; //what does the canvas square contain	

		//See window.onload Event Note in README
	window.onload=function(){

		$("#Restart").click(function(){
    				location.reload(true);

				});
		//create the two arrays, set the winning combinations array(s), start the iterater, clean board	
		played = new Array();
		contains = new Array();
		//two arrays (one within the other)
		winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

			//use the for loop to add to the played and contains arrays max 9 times
			for(var i = 0; i <= 8; i++){
			played[i] = false;
			contains[i]='';
			}
	}

	var squaresFilled = 0;	
	var turn = 0;//who will play x or o

	//uses canvas number as the arguement for the function fromthe HTML element
	function canvasSelected(canvasNumber){

		var theCanvas = "canvas"+canvasNumber; //the boxes in the viewport + the box number
		var id = document.getElementById(theCanvas); //see document.getElementById note in README
		var cxt = id.getContext("2d"); //establishes we are constructing a 2D drawing in the canvas
			
			
			if(played[canvasNumber-1] ==false){//if the canvas piece is empty continue to play and mark the square
				if(turn%2==0){//turn variable started at 0 and denotes if it is an X turn or O turn. 
					cxt.beginPath();//drawing specs for an X
					cxt.moveTo(20,20);
					cxt.lineTo(80,80);
					cxt.moveTo(80,20);
					cxt.lineTo(20,80);
					cxt.stroke();
					cxt.closePath();
					contains[canvasNumber-1] = 'X';
				}
				
				else{
					cxt.beginPath(); //drawing specs for an O
					cxt.arc(50,50,40,0,Math.PI*2,true);
					cxt.stroke();
					cxt.closePath();
					contains[canvasNumber-1] = 'O';
				}
				//check for winners
			turn++; //increment the turn variable
			played[canvasNumber-1] = true; //communicate the canvas just palyed is full
			squaresFilled++; //increment the filled squares count
			checkForWinners(contains[canvasNumber-1]); //call the function with the play just completed so it knows who won --see function below

			//determine if tie game (space filled) or if space is not available
			if(squaresFilled==9){
				
				$(".replyText").text("No Winner. Game Over.");
				
				}
			
				} else	{

					alert("Space Not Available");
				}

		}

	var winningCombinations;//possible wins
	//determine winner
	function checkForWinners(symbol){//symbol is either X or O
			
		for(var w = 0; w < winningCombinations.length; w++){//array winningCombinations with content length of 3

			if(contains[winningCombinations[w][0]]==symbol&&contains[winningCombinations[w][1]]==	symbol&&contains[winningCombinations[w][2]]==symbol){
				$(".replyText").text(symbol+ " WON!");
				
			}//variable w tells that the array is a particular combination of three and looks to see if the symbol matches any of the corresponding winning combinations 
			}

		}




	
