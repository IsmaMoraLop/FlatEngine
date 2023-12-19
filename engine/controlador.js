
var objetos = []
var uiElements = []

function ejecucion() {
    dibujar();
    for(var i = 0;i<objetos.length;i++){
    	if(objetos[i].getDireccion() == "del"){
    		objetos.splice(i, 1);
    	}else{
    		if(!(objetos[i] instanceof Texto)){
    			objetos[i].mover();
    		}
    	}
    	
    }

    //como dibujar:
    //ctx.fillStyle = "blue";
    //ctx.fillRect(x, y, squareSize, squareSize);

    // Actualiza la posición para el siguiente fotograma

    requestAnimationFrame(ejecucion);
}

function cargarDato(nombre){

	datos = document.getElementsByClassName('datos')[0].innerHTML;

	var dato = mySubString = datos.substring(
    datos.indexOf(nombre + "=") + 1, 
    datos.lastIndexOf(";"));
}

function deleteAll(){
    objetos = []
    uiElements = []
}


ejecucion();