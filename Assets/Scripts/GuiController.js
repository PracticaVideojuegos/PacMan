/**
 * Controlador de la interfaz.
 */
 
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

	boxHeight = 35;

	NewGame();
}

/**
 * Cuando empieza un nuevo juego, inicializamos las variables.
 */
function NewGame() {
	startTime =  Time.time;
	timePaused = 0;
}

/**
 * Dibujamos la interfaz en funcion del estado del juego
 */
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
			DrawLevelCompleted();
			break;
		case main.GAME_OVER:
			DrawGameOver();
			break;
	}

}

/**
 * Actualiza el reloj.
 */
function UpdateTimer () {
	var guiTime = Time.time - startTime - timePaused; 

	var minutes  : int = guiTime / 60; // Dividimos el tiempo entre 60 para obtener los minutos
	var seconds  : int = guiTime % 60; // Calculamos los segundos
	var fraction : int = (guiTime * 100) % 100;
	 
	textTime = String.Format ("{0:00}:{1:00}:{2:00}", minutes, seconds, fraction); 
}

/**
 * Dibujamos la interfaz del juego mientras se está jugando.
 */
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
 * Dibuja el reloj en la pantalla, mostrando
 * al usuario el tiempo transcurrido desde el inicio
 * del nivel actual.
 */
function DrawTimer () {
	GUI.Box(new Rect(left, top, boxWidth, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), textTime, centerLabel);

	top = top + boxHeight + vSpacing ;
}

/**
 * Muestra en la interfaz el numero de vidas 
 * restantes del usuario.
 */
function DrawLivesInfo () {
	var width = boxWidth - vSpacing;
	width = width/2;

	GUI.Box(new Rect(left, top, width, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, 16, labelHeight), pacmanIcon);
	GUI.Label(new Rect(left + hSpacing + 20, top + vSpacing, boxMiddle, labelHeight), "x" + main.LIVES);
}

/**
 * Muestra en la interfaz el numero de pellets
 * restantes en el terreno.
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
 * Muestra la puntuación del usuario en la interfaz.
 */
function DrawScoreInfo () {
	GUI.Box(new Rect(left, top, boxWidth, boxHeight), "");
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + main.SCORE, centerLabel);

	top = top + boxHeight + vSpacing ;
}


/**
 * Muestra en la interfaz los "poderes" que posee
 * el usuario en cada momento.
 */
function DrawPowerUpsInfo () {
	
}

/**
 * Muestra la interfaz cuando el juego esta en pausa.
 */
function DrawLevelPaused () {
	top  = (Screen.height / 2) - 150;
	left = (Screen.width / 2) - 150;
	
	GUI.Box(new Rect(left, top, 300, 300), "Game paused");
	left += hSpacing; top += 100;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, labelWidth, labelHeight), "Score: " + main.SCORE, centerLabel);
	left += 50; top += 150;
	
	if(GUI.Button(new Rect(left, top, 200, 30), "Resume game")){
		main.LEVEL_STATUS = main.LEVEL_RUNNING;
	}
}

/**
 * Muestra la interfaz cuando el jugador ha completado 
 * un nivel.
 */
function DrawLevelCompleted() {
	top  = (Screen.height / 2) - 150;
	left = (Screen.width / 2) - 150;
	var boxsize = 300;
	var lblsize = 300 - (2* hSpacing);
	
	GUI.Box(new Rect(left, top, boxsize, boxsize), "You're awesome!");
	left += hSpacing; top += 100;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, lblsize, labelHeight), "Your Score: ", centerLabel);
	top += vSpacing + labelHeight;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, lblsize, labelHeight), ""+main.SCORE, centerLabel);
	left += 50; top += 100;
	
	if(GUI.Button(new Rect(left, top, 200, 30), "Next Level")){
		main.LoadNextLevel();
	}	
}


/**
 * Muestra la interfaz cuando el jugador pierde el juego, es
 * decir, cuando no le quedan vidas restantes.
 */
function DrawGameOver() {
	top  = (Screen.height / 2) - 150;
	left = (Screen.width / 2) - 150;
	var boxsize = 300;
	var lblsize = 300 - (2* hSpacing);
	
	GUI.Box(new Rect(left, top, boxsize, boxsize), "Game Over");
	left += hSpacing; top += 100;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, lblsize, labelHeight), "Your Score: ", centerLabel);
	top += vSpacing + labelHeight;
	GUI.Label(new Rect(left + hSpacing, top + vSpacing, lblsize, labelHeight), ""+main.SCORE, centerLabel);
	left += 50; top += 100;
	
	if(GUI.Button(new Rect(left, top, 200, 30), "Start New Game")){
		main.NewGame();
	}
}















