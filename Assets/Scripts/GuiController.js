#pragma strict

private var startTime 	: float;
private var pauseTime	: float;
private var timePaused	: float;
var textTime 			: String;

// Otros objetos del juego
var main : MainController;

// Medidas de los elmentos de la interfaz
var vSpacing 	: int = 5;
var hSpacing 	: int = 5;
var labelWidth 	: int = 130;
var labelHeight : int = 25;
var boxWidth 	: int = 150;
var boxHeight	: int = 35; 

// Elementos de estilo
var centerLabel : GUIStyle;
var mySkin 		: GUISkin = null; 

// Iconos de la interfaz
var pacmanIcon 		: Texture2D;
var pelletIcon 		: Texture2D;
var powerUpIcon 	: Texture2D;

// Auxiliar variables
var top  : int;
var left : int;
var boxMiddle : int = (boxWidth / 2) - 5;


function Start() {
	
	main = FindObjectOfType(MainController);

	startTime = Time.time;
	timePaused = 0;
	boxHeight = 35;
}


function OnGUI () {
	
	GUI.skin = mySkin;
	
	switch (main.LEVEL_STATUS) {
		case main.LEVEL_RUNNING:
			DrawLevelRunning();
			break;
		case main.LEVEL_PAUSED:
			DrawLevelPaused();
			break;
		case main.LEVEL_COMPLETED:
			break;
		case main.GAME_OVER:
			break;
	}

}

function DrawLevelRunning () {
	top  = vSpacing;
	left = hSpacing;
	UpdateTimer();
	DrawTimer();
	DrawLivesInfo();
	DrawPelletsInfo();
	DrawScoreInfo();
	DrawPowerUpsInfo();
}

/**
 * Updates the Timer on screen.
 */
function UpdateTimer () {
	var guiTime = Time.time - startTime - timePaused; 

	var minutes  : int = guiTime / 60; //Divide the guiTime by sixty to get the minutes.
	var seconds  : int = guiTime % 60;//Use the euclidean division for the seconds.
	var fraction : int = (guiTime * 100) % 100;
	 
	textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction); 
}

/**
 * Draws the timer. Prints on screen the time 
 * that has passed since the start of the game.
 */
function DrawTimer () {
	GUI.Box(new Rect(left, top, boxWidth, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), textTime, centerLabel);

	top = top + boxHeight + vSpacing ;
}

/**
 * Draws the lives remains on the screen.
 */
function DrawLivesInfo () {
	var width = boxWidth - vSpacing;
	width = width/2;

	GUI.Box(new Rect(left, top, width, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, 16, labelHeight), pacmanIcon);
	GUI.Label(new Rect(left + hSpacing + 20, top + vSpacing, boxMiddle, labelHeight), "x" + main.LIVES);
}

/**
 * Draws the pellets remains in the current
 * on the screen.
 */
function DrawPelletsInfo () {
	var width = boxWidth - vSpacing;
	width = width/2;
	var aux = left + boxMiddle;

	GUI.Box(new Rect(aux, top, width, boxHeight), "");
	GUI.Label(new Rect(aux + hSpacing, top + vSpacing, 16, labelHeight), pelletIcon);
	GUI.Label(new Rect(aux + hSpacing + 20, top + vSpacing, boxMiddle, labelHeight), "x" + main.PELLETS);

	top = top + boxHeight + vSpacing ;	
}

/**
 * Draws the score on the screen.
 */
function DrawScoreInfo () {
	GUI.Box(new Rect(left, top, boxWidth, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + main.SCORE, centerLabel);

	top = top + boxHeight + vSpacing ;
}

function DrawPowerUpsInfo () {
	
}

function DrawLevelPaused () {
	top = (Screen.height / 2) - 150;
	left = (Screen.width / 2) - 150;
	
	GUI.Box(new Rect(left, top, 300, 300), "Game paused");
	left += hSpacing; top += 100;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + main.SCORE, centerLabel);
	left += 50; top += 150;
	
	if(GUI.Button(new Rect(left, top, 200, 30), "Resume game")){
		main.LEVEL_STATUS = main.LEVEL_RUNNING;
	}
}
