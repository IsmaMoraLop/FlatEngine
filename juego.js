
/*Construir juego aqui*/

/*Escribir la función para iniciar y reiniciar el juego*/
function iniciar(){
	
}


/*Función que permitirá actualizar la UI*/
function updateUI(){
	
}

/*Comprobar si dos objetos del juego colisionan entre si*/
function checkColisiones(){
	
	for(var i = 0;i<objetos.length;i++){
		for(var j = 0;j<objetos.length;j++){
			if(colisionan(objetos[i], objetos[j])){
				/*evento al producirse la colisión entre dos objetos cualquiera*/
			}
		}
	}
}


/*Función para comprobar los eventos del juego*/
function comprobarEventos(){
	
}

/*la función update se ejecuta constantemente, realiza un cambio por cada frame

en cada frame se comprueban las colisiones
se comprueban eventos
y se actualiza la interfaz

*/
function update() {

	checkColisiones();
	comprobarEventos();
	updateUI();
	//No eliminar
    requestAnimationFrame(update);
}

iniciar();
update();

