#pragma strict

/**
 * Este sera en controlador principal del juego.
 * Comunicara cada objeto con la interfaz, y realizara
 * acciones de control.
 */

// Objetos del juego para interactuar.
var gui : GuiController;
var pelletInitializer : PelletsInitializer;

// Variables to control the game
var numberOfPellets : int = 0;
var lives : int = 0;
var level : int = 0;
var score : int = 0;

function Start () {
	
	// Inicializamos variables.
	gui = FindObjectOfType(GuiController);
	pelletInitializer = FindObjectOfType(PelletsInitializer);

	lives = 3;
	score = 0;

	gui.SetLives(lives);
	LoadNextLevel();
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		gui.ToggleLevelPaused();
	};
}

function LoadNextLevel () {
	level++;
	
	// Board initialization
	numberOfPellets = pelletInitializer.InitializeBoard();
	gui.SetPellets(numberOfPellets);
	gui.ResumeLevel();
}

function PelletEated(isPowered : boolean){
	numberOfPellets--;
	score += 10;
	if (isPowered) {
		score += 10;
		// Aplicar power up al jugador.
	}
	gui.PelletEated();
	gui.SetScore(score);
	CheckNumberOfPellets();
}

private function CheckNumberOfPellets(){
	if(numberOfPellets == 0) {
		gui.LevelCompleted();
	}
}









