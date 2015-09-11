# tic_tac_toe
Project 1



	Resource List:

	Design Notes
		http://www.dreamincode.net/forums/topic/301885-programming-a-js-game-part-1-design/

		http://fundamentals.generalassemb.ly/05_chapter/05_lesson.html

	Tic Tac Toe Examples
		http://blog.modulus.io/building-tic-tac-together-game-logic

		http://www.theodinproject.com/javascript-and-jquery/tic-tac-toe

		http://www.dreamincode.net/forums/topic/247361-simple-tic-tac-toe-using-html5-css3-and-javascript/

		http://jsfiddle.net/himanshuy/qTKkb/6/

		http://www.dreamincode.net/forums/topic/296317-creating-a-simple-tic-tac-toe-game-in-javascript/

		http://beesmart.github.io/JS_tictactoe/

	Canvas Tutorial
		https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial


Initial Psuedocode:
1. Create simple board with canvas in html file

2. Work through game logic - 
	There is a 3x3 grid as a playing field

	There are 2 players

	The players draw consecutively
	each player uses own symbol. The 1st player uses a cross (X) the 2nd player a circle (O)

	The current player (on-turn) must choose an empty field and mark it with his symbol

	A marked field cannot be chosen again

	If a player reaches 3 symbols in a row or a column or a diagonal, they win. 

	This will end the game.

	If neither player gets 3 successive fields and all fields are marked, the game ends with a draw. 

	Text display win/tie to page element

11. Add style elements

12. animation? sound?

Canvas Element Note
	Each canvas is given a unique ID
	
	Onclick function of each canvas draws an element (X or O) on the canvas



	**Canvas Style elements should be in CSS but they render as rectangles when I switch them over

