#pragma strict

var gameController : GameObject;
var pelletsInitializer : Component;
var sparks :  ParticleSystem;
var main : MainController;


function Start () {

	pelletsInitializer = FindObjectOfType(PelletsInitializer);
	main = FindObjectOfType(MainController);

}

function Update () {

}

/**
 * Detectamos la colision con el resto de objetos.
 */
function OnTriggerEnter(other : Collider) {

	// Si collisionamos con el jugador, debemos eliminar la bola.
	if (other.gameObject.CompareTag("Player") ){
		
		main.PelletEated(this.transform.tag == "PowerPellet");
		
		Destroy(this.gameObject);
		
	}


}

