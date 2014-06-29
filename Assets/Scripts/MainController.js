/**
 * Este sera en controlador principal del juego.
 * Comunicara cada objeto con la interfaz, y realizara
 * acciones de control.
 */

#pragma strict

// Objetos del juego para interactuar.
var gui : GuiController;
var pelletInitializer : PelletsInitializer;

// Estados del juego y variables de control
public static var LEVEL_NOT_INITIALIZED : int = 0;
public static var LEVEL_RUNNING 		: int = 1;
public static var LEVEL_PAUSED 			: int = 2;
public static var LEVEL_COMPLETED 		: int = 3;
public static var GAME_OVER 			: int = 4;
public static var LEVEL_STATUS			: int;
public static var LEVEL					: int;
public static var LIVES					: int;
public static var PELLETS				: int;
public static var SCORE					: int;

function Start () {
	
	// Inicializamos variables.
	gui = FindObjectOfType(GuiController);
	pelletInitializer = FindObjectOfType(PelletsInitializer);

	LIVES = 3;
	SCORE = 0;

	LoadNextLevel();
}

/**
 * En la funcion Update, comprobaremos las entradas de teclado
 */
function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		LEVEL_STATUS = (LEVEL_STATUS == LEVEL_PAUSED ? LEVEL_RUNNING : LEVEL_PAUSED);
	};
}

function LoadNextLevel () {
	LEVEL++;
	
	// Inizializacion del tablero
	PELLETS = pelletInitializer.InitializeBoard();
	LEVEL_STATUS = LEVEL_RUNNING;
}

function PelletEated(isPowered : boolean){
	
	PELLETS--;
	SCORE += 10;

	if (isPowered) {
		SCORE += 10;
		// Aplicar power up al jugador.
	}

	CheckNumberOfPellets();
}

private function CheckNumberOfPellets(){
	if(PELLETS == 0) {
		LEVEL_STATUS = LEVEL_COMPLETED;
	}
}









