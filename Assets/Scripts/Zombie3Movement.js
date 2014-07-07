#pragma strict

private var transSpeed : float = 3;
private var rotSpeed : float = 1;
private var tiempoCiclo : int = 56;
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
private var decimosextoGiro : boolean = false;
private var decimoseptimoGiro : boolean = false;
private var decimooctavoGiro : boolean = false;
private var decimonovenoGiro : boolean = false;
private var vigesimoGiro : boolean = true;
function Start () {
	//Inicializamos variables
	//transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
}

function Update () {
	if(Time.timeSinceLevelLoad % tiempoCiclo < 2){
		if(!vigesimoGiro){
			transform.rotation = new Quaternion(0f,1f,0f,180f);
			transform.position = new Vector3(-24.39072f,0.291008f,-26.24593f);
			vigesimoGiro=true;
			decimonovenoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 3.5){
		if(!primerGiro){
			transform.Rotate(Vector3.up, 90);
			primerGiro=true;
			vigesimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 5.3){
		if(!segundoGiro){
			transform.Rotate(Vector3.up, -90);
			segundoGiro=true;
			primerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 6.8) {
		if(!tercerGiro){
			transform.Rotate(Vector3.up, -90);
			tercerGiro=true;
			segundoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 8.8) {
		if(!cuartoGiro){
			transform.Rotate(Vector3.up, 90);
			cuartoGiro=true;
			tercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 15.8) {
		if(!quintoGiro){
			transform.Rotate(Vector3.up, 90);
			quintoGiro=true;
			cuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 17.8) {
		if(!sextoGiro){
			transform.Rotate(Vector3.up, 90);
			sextoGiro=true;
			quintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 23.8) {
		if(!septimoGiro){
			transform.Rotate(Vector3.up, -90);
			septimoGiro=true;
			sextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 25.8) {
		if(!octavoGiro){
			transform.Rotate(Vector3.up, -90);
			octavoGiro=true;
			septimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 29.3) {
		if(!novenoGiro){
			transform.Rotate(Vector3.up, 90);
			novenoGiro=true;
			octavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 31.3) {
		if(!decimoGiro){
			transform.Rotate(Vector3.up, 90);
			decimoGiro=true;
			novenoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 33) {
		if(!undecimoGiro){
			transform.Rotate(Vector3.up, 90);
			undecimoGiro=true;
			decimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 35) {
		if(!duodecimoGiro){
			transform.Rotate(Vector3.up, -90);
			duodecimoGiro=true;
			undecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 37) {
		if(!decimotercerGiro){
			transform.Rotate(Vector3.up, 90);
			decimotercerGiro=true;
			duodecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 39) {
		if(!decimocuartoGiro){
			transform.Rotate(Vector3.up, 90);
			decimocuartoGiro=true;
			decimotercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 41) {
		if(!decimoquintoGiro){
			transform.Rotate(Vector3.up, -90);
			decimoquintoGiro=true;
			decimocuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 43) {
		if(!decimosextoGiro){
			transform.Rotate(Vector3.up, -90);
			decimosextoGiro=true;
			decimoquintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 45) {
		if(!decimoseptimoGiro){
			transform.Rotate(Vector3.up, 90);
			decimoseptimoGiro=true;
			decimosextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 47) {
		if(!decimooctavoGiro){
			transform.Rotate(Vector3.up, -90);
			decimooctavoGiro=true;
			decimoseptimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < tiempoCiclo) {
		if(!decimonovenoGiro){
			transform.Rotate(Vector3.up, 90);
			decimonovenoGiro=true;
			decimooctavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}
}
