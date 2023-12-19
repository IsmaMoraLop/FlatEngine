class Texto{

	constructor(texto, fuente, x, y, color){
		this.texto = texto
		this.fuente = fuente
		this.x = x
		this.y = y
		this.color = color
		this.direccion = ""
		this.visible = true
	}


	getTexto(){
		return this.texto
	}
	setTexto(texto){
		this.texto = texto
	}
	getFuente(){
		return this.fuente
	}
	setFuente(){
		this.fuente = fuente
	}
	getX(){
		return this.x
	}
	setX(){
		this.x = x
	}
	getY(){
		return this.y
	}
	setY(){
		this.y = y
	}
	getColor(){
		return this.color
	}
	setColor(color){
		this.color = color
	}
	getDireccion(){
		return this.direccion
	}
	isVisible(){
		return this.visible
	}
	setVisible(visible){
		this.visible = visible
	}
}