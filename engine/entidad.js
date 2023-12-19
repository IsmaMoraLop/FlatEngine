class Entidad{

  constructor(x, y, width, height, color, velocidadMax, imagensrc, direccion, solido) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.velocidadMax = velocidadMax
    this.velocidad = 0
    this.direccion = direccion
    this.solido = solido
    this.visible = true
    //construir objeto imagen
    this.imagen = imagensrc
    if(imagensrc != null){
      this.imagen = new Image(this.width, this.height)
      this.imagen.src = imagensrc
    }
  }



  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  setX(x) {
    this.x = x
  }

  setY(y) {
    this.y = y
  }

  getWidth(){
  	return this.width
  }
  getHeight(){
  	return this.height
  }

  getVelocidadMax(){
  	return this.velocidadMax
  }
  setVelocidadMax(velocidadMax){
  	this.velocidadMax = velocidadMax
  }

  getVelocidad(){
  	return this.velocidad
  }
  setVelocidad(velocidad){
  	this.velocidad = velocidad
  }

  getImagen(){
  	return this.imagen
  }

  setImagen(imagen){
  	this.imagen = new Image(this.width, this.height)
    this.imagen.src = imagen
  }

  setHeigth(height){
    this.height = height
  }

  setWidth(width){
    this.width = width
  }

  mover(tecla){
  	
  }

  getDireccion(){
    return this.direccion
  }
  setDireccion(direccion){
    this.direccion = direccion
  }

  getColor(){
  	return this.color
  }
  setColor(color){
  	this.color = color
  }

  eliminar(){
    this.direccion = "del"
  }

  isSolido(){
    return this.solido
  }
  setSolido(solido){
    this.solido = solido
  }

  isVisible(){
    return this.visible
  }
  setVisible(visible){
    this.visible = visible
  }

  RGmove(){
    this.x = this.x + this.velocidad
    if(isChoqueSolido(this)){
      this.x -= this.velocidad
    }
  }
  LFmove(){
    this.x = this.x - this.velocidad
    if(isChoqueSolido(this)){
      this.x += this.velocidad
    }
  }
  DWmove(){
    this.y = this.y + this.velocidad
    if(isChoqueSolido(this)){
      this.y -= this.velocidad
    }
  }

  UPmove(){
    this.y = this.y - this.velocidad
    if(isChoqueSolido(this)){
      this.y += this.velocidad
    }
  }




  //choques sólidos pero con excepciones

  RGmove(excepciones){
    this.x = this.x + this.velocidad
    if(isChoqueSolido(this, excepciones)){
      this.x -= this.velocidad
    }
  }
  LFmove(excepciones){
    this.x = this.x - this.velocidad
    if(isChoqueSolido(this, excepciones)){
      this.x += this.velocidad
    }
  }
  DWmove(excepciones){
    this.y = this.y + this.velocidad
    if(isChoqueSolido(this, excepciones)){
      this.y -= this.velocidad
    }
  }

  UPmove(excepciones){
    this.y = this.y - this.velocidad
    if(isChoqueSolido(this, excepciones)){
      this.y += this.velocidad
    }
  }

}
