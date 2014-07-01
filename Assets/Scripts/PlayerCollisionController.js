#pragma strict

var wakaSound : AudioClip;
var dieSound : AudioClip;

var main 			: MainController;
var animaStartTime  : float;
var animDuration    : float = 5;
var animating		: boolean = false;
var animFromRot		: Quaternion;
var animToRot		: Quaternion;

function Start () {

	main = FindObjectOfType(MainController);
	animDuration = dieSound.length;
	
}


function Update () {
	
	if(animating) {
		
		var step = (Time.time - animaStartTime) / (animDuration);
		var v = Vector3(0, 180, 0);		
		transform.Rotate(v * step);
		
		if( (Time.time - animaStartTime) >= animDuration) {
			animating = false;
		}
		
	}
	
}

/**
 * Detectamos la colision con el resto de objetos.
 */
function OnTriggerEnter(other : Collider) {

	// Si colisionamos con una bola, reproducimos un sonido y 
	// alertamos al controlador principal.
	if (other.gameObject.CompareTag("Pellet") ||
		other.gameObject.CompareTag("PowerPellet") ){
		
		audio.clip = wakaSound;
		audio.Play();
		
		main.PelletEated(other.CompareTag("PowerPellet"));
		Destroy(other.gameObject);
		
	} else 
	// Si colisionamos con un enemigo...
	if (other.gameObject.CompareTag("Enemy")){
		
		// Reproducimos un audio
		audio.clip = dieSound;
		audio.Play();
		
		// Ejecutamos una animacion
		RunDieAnimation();
		
		// Esperamos a que el sonido y la animacion terminen
		yield WaitForSeconds(animDuration);
		
		// Informamos al controlador principal
		main.PlayerDied();
		
		
	}


}


/**
 * Ejecutamos una animación cuando el jugador muere.
 */
function RunDieAnimation () {

	if(!animating){
		animating = true;
		animaStartTime = Time.time;
		animFromRot = animToRot = transform.rotation;
		
		var v : Vector3 = animToRot.eulerAngles;
		v.y += 359;
		animToRot.eulerAngles = v;
	}
	
}



