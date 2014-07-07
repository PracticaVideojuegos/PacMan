#pragma strict

private var transSpeed : float = 3;
private var rotSpeed : float = 1;
private var tiempoCiclo : int = 54;
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
private var duodecimoGiro : boolean = false;
private var decimotercerGiro : boolean = false;
private var decimocuartoGiro : boolean = false;
private var decimoquintoGiro : boolean = false;
private var decimosextoGiro : boolean = true;
function Start () {
	//Inicializamos variables
	//transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
}

function Update () {
	if(Time.timeSinceLevelLoad % tiempoCiclo < 16.2){
		if(!decimosextoGiro){
			transform.Rotate(Vector3.up, -90);
			//transform.rotation = new Quaternion(0f, 1f, 0f, 90f);
			transform.position = new Vector3(24.50446f,0.291008f,-26.21804f);
			decimosextoGiro=true;
			decimoquintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 18.1){
		if(!primerGiro){
			transform.Rotate(Vector3.up, 90);
			primerGiro=true;
			decimosextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 19.5){
		if(!segundoGiro){
			transform.Rotate(Vector3.up, 90);
			segundoGiro=true;
			primerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 21.4) {
		if(!tercerGiro){
			transform.Rotate(Vector3.up, -90);
			tercerGiro=true;
			segundoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 23.1) {
		if(!cuartoGiro){
			transform.Rotate(Vector3.up, -90);
			cuartoGiro=true;
			tercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 25) {
		if(!quintoGiro){
			transform.Rotate(Vector3.up, 90);
			quintoGiro=true;
			cuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 32.5) {
		if(!sextoGiro){
			transform.Rotate(Vector3.up, 90);
			sextoGiro=true;
			quintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 34.4) {
		if(!septimoGiro){
			transform.Rotate(Vector3.up, 90);
			septimoGiro=true;
			sextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 36.2) {
		if(!octavoGiro){
			transform.Rotate(Vector3.up, -90);
			octavoGiro=true;
			septimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 38.1) {
		if(!novenoGiro){
			transform.Rotate(Vector3.up, -90);
			novenoGiro=true;
			octavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 45.1) {
		if(!decimoGiro){
			transform.Rotate(Vector3.up, 90);
			decimoGiro=true;
			novenoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 46.9) {
		if(!undecimoGiro){
			transform.Rotate(Vector3.up, 90);
			undecimoGiro=true;
			decimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 48.3) {
		if(!duodecimoGiro){
			transform.Rotate(Vector3.up, 90);
			duodecimoGiro=true;
			undecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 50.1) {
		if(!decimotercerGiro){
			transform.Rotate(Vector3.up, -90);
			decimotercerGiro=true;
			duodecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 51.9) {
		if(!decimocuartoGiro){
			transform.Rotate(Vector3.up, -90);
			decimocuartoGiro=true;
			decimotercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < tiempoCiclo) {
		if(!decimoquintoGiro){
			transform.Rotate(Vector3.up, 90);
			decimoquintoGiro=true;
			decimocuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}
}
