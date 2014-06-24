#pragma strict

// Punto al que debe irse el jugador cuando
// curce este portal
var goTo : GameObject;


function Start () {

}

function Update () {

}

function OnTriggerEnter(collision : Collider){
	
	if(collision.gameObject.tag == "Player"){
		collision.gameObject.transform.position = goTo.transform.position;
	}
}