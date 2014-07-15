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
var initSound							: AudioClip;
var initSoundDuration					: float = 4;
var sirenSound							: AudioClip;
var sirenSoundDuration					: float = 2;

// Jugador
var player : GameObject;


function Start () {
	
	// Inicializamos variables.
	gui = FindObjectOfType(GuiController);
	pelletInitializer = FindObjectOfType(PelletsInitializer);

	NewGame();
}


/**
 * En la funcion Update, comprobaremos las entradas de teclado
 */
function Update () {

	if (Input.GetKeyDown(KeyCode.Escape)) {
		if(LEVEL_STATUS == LEVEL_PAUSED){
			LEVEL_STATUS = LEVEL_RUNNING;
			Time.timeScale = 1;
		} else if(LEVEL_STATUS == LEVEL_RUNNING) {
			LEVEL_STATUS = LEVEL_PAUSED;
			Time.timeScale = 0;
		}
	};
	
}


/**
 * Inicializa las variables para comenzar un juego nuevo.
 */
function NewGame() {

	LIVES = 3;
	SCORE = 0;
	LEVEL = 0;
	
	gui.NewGame();
	LoadNextLevel();
	
	audio.clip = initSound;
	audio.Play();
	// Esperamos a que el sonido termine
	yield WaitForSeconds(initSoundDuration);
	
	audio.clip = sirenSound;
	audio.Play();
	yield WaitForSeconds(sirenSoundDuration);
}


/**
 * Cargamos el siguiente nivel de la partida.
 */
function LoadNextLevel () {
	LEVEL++;
	
	// Inizializacion del tablero
	PELLETS = pelletInitializer.InitializeBoard();
	PELLETS = 228;
	LEVEL_STATUS = LEVEL_RUNNING;
	
	Time.timeScale = 1;
}


/**
 * Cuando una bola es comida por el usuario, debemos decrementar
 * el número en la interfaz, y comrpobar si se ha completado el nivel.
 */
function PelletEated(isPowered : boolean){
	
	PELLETS--;
	SCORE += 10;

	if (isPowered) {
		SCORE += 10;
		// Aplicar power up al jugador.
	}

	CheckNumberOfPellets();
}


/**
 * Comprobamos las bolas que quedan en al terreno.
 */
private function CheckNumberOfPellets(){
	if(PELLETS == 0) {
		LEVEL_STATUS = LEVEL_COMPLETED;
		Time.timeScale = 0;
	}
}


/**
 * Si el jugador muere, comprobamos que tiene vidas restantes.
 */
function PlayerDied() {
	LIVES--;
	
	if(LIVES <= 0) {
		LEVEL_STATUS = GAME_OVER;
		Time.timeScale = 0;
	}else{
		MovePlayerToStartPosition();
	}

}


/**
 * Movemos al jugador a la posicion de inicio.
 */
function MovePlayerToStartPosition() {
	player.transform.position = Vector3(0, 1.4, -15);
	player.transform.rotation = Quaternion.Euler(0, 0, 0);
}









