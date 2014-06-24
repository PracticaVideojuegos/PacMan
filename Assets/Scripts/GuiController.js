#pragma strict

private var startTime 	: float;
private var pauseTime	: float;
private var timePaused	: float;
var textTime 			: String;


// Game info
public static var LEVEL_NOT_INITIALIZED : int = 0;
public static var LEVEL_RUNNING 		: int = 1;
public static var LEVEL_PAUSED 			: int = 2;
public static var LEVEL_COMPLETED 		: int = 3;
public static var GAME_OVER 			: int = 4;
var levelStatus 	: int;
var pelletsRemains 	: int;
var livesRemains 	: int;
var score 			: int;

// Gui elements' size
var vSpacing 	: int = 5;
var hSpacing 	: int = 5;
var labelWidth 	: int = 130;
var labelHeight : int = 25;
var boxWidth 	: int = 150;
var boxHeight	: int = 35; 


// Style elements
var centerLabel : GUIStyle;
var mySkin 		: GUISkin = null; 

// Variables for control the differents screens
var pacmanIcon 		: Texture2D;
var pelletIcon 		: Texture2D;
var powerUpIcon 	: Texture2D;


// Axiliar variables
var top  : int;
var left : int;
var boxMiddle : int = (boxWidth / 2) - 5;


function Start() {
	startTime = Time.time;
	timePaused = 0;
	boxHeight = 35;

	levelStatus = LEVEL_RUNNING;
}


function OnGUI () {
	
	GUI.skin = mySkin;
	
	switch (levelStatus) {
		case LEVEL_RUNNING:
			DrawLevelRunning();
			break;
		case LEVEL_PAUSED:
			DrawLevelPaused();
			break;
		case LEVEL_COMPLETED:
			break;
		case GAME_OVER:
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
	GUI.Label(new Rect(left + hSpacing + 20, top + vSpacing, boxMiddle, labelHeight), "x" + livesRemains);
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
	GUI.Label(new Rect(aux + hSpacing + 20, top + vSpacing, boxMiddle, labelHeight), "x" + pelletsRemains);

	top = top + boxHeight + vSpacing ;	
}

/**
 * Draws the score on the screen.
 */
function DrawScoreInfo () {
	GUI.Box(new Rect(left, top, boxWidth, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + score, centerLabel);

	top = top + boxHeight + vSpacing ;
}

function DrawPowerUpsInfo () {
	
}

function DrawLevelPaused () {
	top = (Screen.height / 2) - 150;
	left = (Screen.width / 2) - 150;
	
	GUI.Box(new Rect(left, top, 300, 300), "Game paused");
	left += hSpacing; top += 100;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + score, centerLabel);
	left += 50; top += 150;
	if(GUI.Button(new Rect(left, top, 200, 30), "Resume game")){
		ResumeLevel();
	}
}

function PelletEated () {
	pelletsRemains--;
}

function SetPellets (number: int) {
	pelletsRemains = number;
}

function PlayerDied () {
	livesRemains--;
}

function SetLives (lives: int) {
	livesRemains = lives;
}

function SetScore (newScore: int) {
	score = newScore;	
}

function LevelCompleted(){
	levelStatus = LEVEL_COMPLETED;
}

function GameOver () {
	levelStatus = GAME_OVER;
}

function PauseLevel () {
	levelStatus = LEVEL_PAUSED;
	pauseTime = Time.time;
	Time.timeScale = 0;
}

function ResumeLevel () {
	levelStatus = LEVEL_RUNNING;
	timePaused += Time.time - pauseTime;
	Time.timeScale = 1;
}

function ToggleLevelPaused () {
	if (levelStatus == GAME_OVER) return;
	if (levelStatus == LEVEL_PAUSED) {
		ResumeLevel();
	} else {
		PauseLevel();
	}
}