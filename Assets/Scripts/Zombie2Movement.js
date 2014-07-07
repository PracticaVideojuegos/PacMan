#pragma strict

private var transSpeed : float = 3;
private var rotSpeed : float = 1;
private var tiempoCiclo : int = 52.95;
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
private var decimooctavoGiro : boolean = true;
function Start () {
	//Inicializamos variables
	//transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
}

function Update () {
	if(Time.timeSinceLevelLoad % tiempoCiclo < 7){
		if(!decimooctavoGiro){
			transform.Rotate(Vector3.up, -90);
			transform.position = new Vector3(23.99134f,0.291008f,28.28843f);
			decimooctavoGiro=true;
			decimoseptimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 9.5){
		if(!primerGiro){
			transform.Rotate(Vector3.up, -90);
			primerGiro=true;
			decimooctavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 11.3){
		if(!segundoGiro){
			transform.Rotate(Vector3.up, -90);
			segundoGiro=true;
			primerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 13.3) {
		if(!tercerGiro){
			transform.Rotate(Vector3.up, 90);
			tercerGiro=true;
			segundoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 15.3) {
		if(!cuartoGiro){
			transform.Rotate(Vector3.up, 90);
			cuartoGiro=true;
			tercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 17.3) {
		if(!quintoGiro){
			transform.Rotate(Vector3.up, -90);
			quintoGiro=true;
			cuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 19.3) {
		if(!sextoGiro){
			transform.Rotate(Vector3.up, 90);
			sextoGiro=true;
			quintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 21.3) {
		if(!septimoGiro){
			transform.Rotate(Vector3.up, 90);
			septimoGiro=true;
			sextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 23.3) {
		if(!octavoGiro){
			transform.Rotate(Vector3.up, -90);
			octavoGiro=true;
			septimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 25.3) {
		if(!novenoGiro){
			transform.Rotate(Vector3.up, 90);
			novenoGiro=true;
			octavoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 33.3) {
		if(!decimoGiro){
			transform.Rotate(Vector3.up, 90);
			decimoGiro=true;
			novenoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 35.3) {
		if(!undecimoGiro){
			transform.Rotate(Vector3.up, 90);
			undecimoGiro=true;
			decimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 38.3) {
		if(!duodecimoGiro){
			transform.Rotate(Vector3.up, -90);
			duodecimoGiro=true;
			undecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 40.3) {
		if(!decimotercerGiro){
			transform.Rotate(Vector3.up, -90);
			decimotercerGiro=true;
			duodecimoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 43.3) {
		if(!decimocuartoGiro){
			transform.Rotate(Vector3.up, -90);
			decimocuartoGiro=true;
			decimotercerGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 45.3) {
		if(!decimoquintoGiro){
			transform.Rotate(Vector3.up, -90);
			decimoquintoGiro=true;
			decimocuartoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < 48.3) {
		if(!decimosextoGiro){
			transform.Rotate(Vector3.up, -90);
			decimosextoGiro=true;
			decimoquintoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}else if(Time.timeSinceLevelLoad % tiempoCiclo < tiempoCiclo) {
		if(!decimoseptimoGiro){
			transform.Rotate(Vector3.up, -90);
			decimoseptimoGiro=true;
			decimosextoGiro=false;
		}
		transform.Translate(Vector3.forward * transSpeed * Time.deltaTime);
	}
}
