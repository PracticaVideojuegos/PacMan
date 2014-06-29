#pragma strict

var pelletsContainer 	: GameObject;
var normalPellet 		: GameObject;
var powerPellet 		: GameObject;


function Start () {

}

function Update () {

}

/**
 * Inicializamos el tablero colocando pellets a lo
 * largo de todo el recorrido.
 */
function InitializeBoard() : int {
	
	// Leemos el fichero donde tenemos guardada la configuración del tablero
	var sr : System.IO.StreamReader = new System.IO.StreamReader("./pellets.txt");
	var input : String = sr.ReadLine();
	var n : int = 0;
	
	for(var j = 0; input != null; j++) {
	
		for (var i=0; i<input.Length; i++) {
			var c = input[i];
			
			// Si hay un espacio, no colocamos nada
			if (c == ' ') continue;
			
			// En caso contrario, colocamos una bola en la posición adecuada...
			var p : GameObject;
			var pos : Vector3 = new Vector3(-24.5+(1.95*i), 0.5, 28-(2.2*j));
			if (c == 'o')
				p = Instantiate(normalPellet, pos, Quaternion.identity);
			else
				p = Instantiate(powerPellet, pos, Quaternion.identity);
			
			// Insertamos la bola dentro de un contenedor, para tenerlas todas
			// bajo el mismo padre y controladas.
			p.transform.parent = pelletsContainer.transform;
			
			// Aumentamos el número de bolas en el tablero.
			n++;
		}
		
		input = sr.ReadLine();
	} 
	
	sr.Close();

	return n;
}