#pragma strict

var pelletsContainer 	: GameObject;
var normalPellet 		: GameObject;
var powerPellet 		: GameObject;


function Start () {

}

function Update () {

}

function InitializeBoard() : int {
	
	var sr : System.IO.StreamReader = new System.IO.StreamReader("./pellets.txt");
	var input : String = sr.ReadLine();
	var n : int = 0;
	
	for(var j = 0; input != null; j++) {
	
		for (var i=0; i<input.Length; i++) {
			var c = input[i];
			
			if (c == ' ') continue;
			
			var p : GameObject;
			var pos : Vector3 = new Vector3(-24.5+(1.95*i), 0.5, 28-(2.2*j));
			if (c == 'o')
				p = Instantiate(normalPellet, pos, Quaternion.identity);
			else
				p = Instantiate(powerPellet, pos, Quaternion.identity);
			
			p.transform.parent = pelletsContainer.transform;
			
			n++;
		}
		
		input = sr.ReadLine();
	} 
	
	sr.Close();

	return n;
}