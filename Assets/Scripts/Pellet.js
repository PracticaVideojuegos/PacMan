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

function OnTriggerEnter(other : Collider) {

	
	if (other.gameObject.CompareTag("Player") ){
		
		main.PelletEated(this.transform.tag == "PowerPellet");
		
		Destroy(this.gameObject);
		
	}


}

