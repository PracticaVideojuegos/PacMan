#pragma strict

private var transSpeed : float = 3;
private var rotSpeed : float = 1;
private var tiempoCiclo : int = 55;
private var primerGiro : boolean = false;
private var segundoGiro : boolean = false;
private var tercerGiro : boolean = false;
private var cuartoGiro : boolean = false;
private var quintoGiro : boolean = false;
private var sextoGiro : boolean = false;
private var septimoGiro : boolean = false;
private var octavoGiro : boolean = false;
private var novenoGiro : boolean = false;
private var decimoGiro : boolean = false;
private var undecimoGiro : boolean = false;
private var duodecimoGiro : boolean = true;
function Start () {
	//Inicializamos variables
	//transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
}

function Update () {
	if(Time.timeSinceLevelLoad % tiempoCiclo < 7){
		if(!duodecimoGiro){
			transform.Rotate(Vector3.up, 90);
			transform.position = new Vector3(-24.27019f,0.291008f,28.28844f);
			duodecimoGiro=true;
			undecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 9.5){
		if(!primerGiro){
			transform.Rotate(Vector3.up, 90);
			primerGiro=true;
			duodecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 13.3){
		if(!segundoGiro){
			transform.Rotate(Vector3.up, 90);
			segundoGiro=true;
			primerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 23.2) {
		if(!tercerGiro){
			transform.Rotate(Vector3.up, -90);
			tercerGiro=true;
			segundoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 25) {
		if(!cuartoGiro){
			transform.Rotate(Vector3.up, -90);
			cuartoGiro=true;
			tercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 31) {
		if(!quintoGiro){
			transform.Rotate(Vector3.up, -90);
			quintoGiro=true;
			cuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 35) {
		if(!sextoGiro){
			transform.Rotate(Vector3.up, 90);
			sextoGiro=true;
			quintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 37) {
		if(!septimoGiro){
			transform.Rotate(Vector3.up, -90);
			septimoGiro=true;
			sextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 39) {
		if(!octavoGiro){
			transform.Rotate(Vector3.up, 90);
			octavoGiro=true;
			septimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 41) {
		if(!novenoGiro){
			transform.Rotate(Vector3.up, -90);
			novenoGiro=true;
			octavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 52.2) {
		if(!decimoGiro){
			transform.Rotate(Vector3.up, -90);
			decimoGiro=true;
			novenoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < tiempoCiclo) {
		if(!undecimoGiro){
			transform.Rotate(Vector3.up, 90);
			undecimoGiro=true;
			decimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}
}
