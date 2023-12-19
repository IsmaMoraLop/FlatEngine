
/*Construir juego aqui*/
var jugador = null
var nivelUI = null
var saludUI = null
var saludUIBar = null
var saludUIBarBet = null
var flechaRUI = null
var flechaLUI = null
var flechaDUI = null
var flechaUUI = null
var finJuego = null
var tempoReinicioUI = null
var generarEnemigos = true
var coolDownGenerarEnemigo = 0
var eneGenerados = 0
var enemigosNivel = 0
nivel = 1
nEnemigos = 1
multiplicador = 1
sumadorV = 0.0
running = true

function iniciar(){
	nivel = 1
	nEnemigos = 1
	multiplicador = 1
	sumadorV = 0.0
	eneGenerados = 0
	enemigosNivel = 0
	running = true
	generarEnemigos = true
	coolDownGenerarEnemigo = 0
	deleteAll();
	console.log("elementos: " + objetos.length)
	//Iniciacion de escenario
	jugador = new Personaje(250, 250, 50, 50, "blue", 5, graficos[0], "de", 100, 20);
	//estados del jugador, mapa, objetos etc
	jugador.setSolido(true);
	//xJugador = cargarDato("xJugador")

	//UI
	nivelUI = new Texto("Nivel: " + nivel, "15px Arial", 10, 20, "white")
	saludUI = new Texto("Salud: ", "15px Arial", 10, 50, "white")
	saludUIBar = new Entidad(65, 40, 100, 10, "red", 0, null, "", false)
	saludUIBarBet = new Entidad(65, 40, 100, 10, "yellow", 0, null, "", false)
	flechaUUI = new Entidad(450, 300, 40, 30, "", 0, graficos[7], "", false)
	flechaDUI = new Entidad(40, 300, 40, 30, "", 0, graficos[8], "", false)
	flechaLUI = new Entidad(250, 70, 30, 40, "", 0, graficos[9], "", false)
	flechaRUI = new Entidad(250, 520, 30, 40, "", 0, graficos[10], "", false)
	finJuego = new Texto("", "30px Arial", 180, 250, "white")
	flechaRUI.setVisible(false)
	flechaLUI.setVisible(false)
	flechaDUI.setVisible(false)
	flechaUUI.setVisible(false)
	tempoReinicioUI = new Texto("", "20px Arial", 205, 300, "white")

	//terreno
	uiElements.push(saludUIBarBet)
	uiElements.push(saludUIBar)
	uiElements.push(saludUI);
	uiElements.push(nivelUI)
	uiElements.push(flechaRUI)
	uiElements.push(flechaLUI)
	uiElements.push(flechaDUI)
	uiElements.push(flechaUUI)
	uiElements.push(finJuego)
	uiElements.push(tempoReinicioUI)
	//aniadir objetos
	objetos.push(jugador);

	nuevoNivel();
	construirTerreno()
}






function generarPowerUp(){

}


function updateUI(){
	nivelUI.setTexto("Nivel: " + (nivel-1))
	saludUI.setTexto("Salud: ")
	saludUIBar.setWidth(jugador.getSalud())
	if(jugador.getSalud() <= 0 && running == true){
		finJuego.setTexto("Fin del juego")
		running = false
		setTimeout(function(){
    		tempoReinicioUI.setTexto("Reiniciando 3")
		}, 1000);
		setTimeout(function(){
    		tempoReinicioUI.setTexto("Reiniciando 2")
		}, 2000);
		setTimeout(function(){
    		tempoReinicioUI.setTexto("Reiniciando 1")
		}, 3000);
		setTimeout(function(){
    		iniciar();
		}, 4000);
		
	}
	
}

function checkColisionJugEne(juga, enemigo){
	
	if(colisionan(juga, enemigo)){
		//Jugador recibe daño
		if(enemigo.isHitAvaliable()){
			jugador.setSalud(jugador.getSalud() - enemigo.getFuerza())
			if(jugador.getSalud() <= 0){
				jugador.eliminar()
			}
			console.log(jugador.getSalud());
			enemigo.setHitAvaliable(false);
			enemigo.setHitCoolDown(0);
		}
	}
}
function checkColisionBalaSolido(bala, solido){
	if(bala != solido){
	 	if(colisionan(bala, solido)){
	 		if(bala.isSolido() && solido.isSolido()){
	 			bala.eliminar();
	 		}
	 	}
 	}
}
function checkColisionEnemigoBala(enemigo, bala){
 	
 	if(colisionan(enemigo, bala)){
 		//Enemigo recibe daño
 		enemigo.setSalud(enemigo.getSalud() - bala.getFuerza())
 		if(enemigo.getSalud() <= 0){
 			enemigo.eliminar()
 			playAudio(1)
 		}
 		bala.eliminar()
 	}
}

function checkColisiones(){

	
	for(var i = 0;i<objetos.length;i++){
		for(var j = 0;j<objetos.length;j++){
			if(objetos[i] instanceof Jugador){
				if(objetos[j] instanceof Enemigo){
					checkColisionJugEne(objetos[i], objetos[j])
				}
			}
			if(objetos[i] instanceof Proyectil){
				if(objetos[j] instanceof Enemigo){
					checkColisionEnemigoBala(objetos[j], objetos[i])
				}
			}
			if(objetos[i] instanceof Proyectil){
				if(objetos[j] instanceof Entidad){
					checkColisionBalaSolido(objetos[i], objetos[j]);
				}
			}


		
		}
	}
}

function ajustarPantalla(){
	var width = screen.width;
	var height = screen.height;
	document.getElementById("canvas").style.width = width + (width*0.1) + "px";
	document.getElementById("canvas").style.height = height + "px";

}

function crearEnemigos(numero){
	for(var i = 0;i<numero;i++){

		var esquinas = nAleatorio(1, 4)
		var x = -10
		var Y = -10
		switch(esquinas){
			case 1: x = -10;y = nAleatorio(-10, 550);break;
			case 2: x = nAleatorio(-10, 550);y = -10;break;
			case 3: x = 650;y = nAleatorio(-10, 550);break;
			case 4: x = nAleatorio(-10, 550);y = 550;break;
		}

		var sumaVelocidad = floatAleatorio(0.01, 0.2)
		const enemigo = new Enemigo(x, y, 50, 50, "red", 0.5+sumaVelocidad+sumadorV, graficos[4], "iz", 50, 10, jugador);
		enemigo.setSolido(true);
		objetos.push(enemigo);

	}
}

function nuevoNivel(){
	nEnemigos = nivel * multiplicador;
	enemigosNivel = nEnemigos
	crearEnemigos(1)
	generarEnemigos = true
	jugador.setX(250);
	jugador.setY(250);
	multiplicador += 0.5
	sumadorV += 0.025
	nivel += 1
	flechaRUI.setVisible(false)
	flechaLUI.setVisible(false)
	flechaDUI.setVisible(false)
	flechaUUI.setVisible(false)
	
}

function hayEnemigos(){
	return contarEnemigos() > 0;
}
function contarEnemigos(){
	nEnemigos = 0
	for(var i = 0;i<objetos.length;i++){
		if(objetos[i] instanceof Enemigo){
			nEnemigos += 1
		}
	}
	return nEnemigos;
}


function comprobarEventos(){
	hayEnes = hayEnemigos()
	
	if(enemigosNivel <= 0 && !hayEnes){
		flechaRUI.setVisible(true)
		flechaLUI.setVisible(true)
		flechaDUI.setVisible(true)
		flechaUUI.setVisible(true)
		if(jugador.getX() > 490){
			nuevoNivel();
		}
		if(jugador.getY() > 490){
			nuevoNivel();
		}
		if(jugador.getY() < 10){
			nuevoNivel();
		}
		if(jugador.getX() < 10){
			nuevoNivel();
		}
	}
	if(generarEnemigos == true){
		if(coolDownGenerarEnemigo == 200){
			if(enemigosNivel > 0){
				console.log("nEnemigos: " + nEnemigos)
				crearEnemigos(1)
				coolDownGenerarEnemigo = 0
				eneGenerados++
				enemigosNivel--
			}else{
				generarEnemigos = false
			}
		}else{
			coolDownGenerarEnemigo++
		}
	}
}

//ejecutar constantemente
function update() {

	checkColisiones();
	comprobarEventos();
	updateUI();
	//No eliminar
    requestAnimationFrame(update);
}

function construirTerreno(){

	//coordenadas y dimensiones de cada una de las barreras blancas
	let coordenadas = [[60, 25, 100, 10],
					   [60, 25, 10, 100],
					   [462, 385, 10, 100],
					   [370, 475, 100, 10],
					   [60, 475, 100, 10],
					   [60, 375, 10, 100],
					   [190, 100, 150, 10],
					   [190, 400, 150, 10],
					   [120, 170, 10, 150],
					   [400, 170, 10, 150],
					   [465, 25, 10, 100],
					   [375, 25, 100, 10],
					   [330, 240, 70, 10],
					   [130, 240, 70, 10],
					   [160, 390, 10, 30],
					   [360, 390, 10, 30]];
	for(var i = 0;i<coordenadas.length;i++){
		var x = coordenadas[i][0];
		var y = coordenadas[i][1];
		var w = coordenadas[i][2];
		var h = coordenadas[i][3];
		const barra = new Entidad(x, y+60, w, h, "white", 0, null, "", true);
		barra.setSolido(true);
		objetos.push(barra);

	}

}

iniciar();
update();
ajustarPantalla();


