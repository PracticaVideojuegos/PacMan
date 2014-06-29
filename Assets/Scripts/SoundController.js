#pragma strict

var wakaSound : AudioClip;
var normalSound : AudioClip;


function Start () {
}

function Update () {

}

/**
 * Detectamos la colision con el resto de objetos.
 */
function OnTriggerEnter(other : Collider) {

	// Si collisionamos con una bola, reproducimos un sonido.
	if (other.gameObject.CompareTag("Pellet") ){
		
		audio.clip = wakaSound;
		audio.Play();
		
	}


}
