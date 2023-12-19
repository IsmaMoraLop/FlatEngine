/*Clase jugador por defecto*/

class Jugador extends Entidad{
  constructor(x, y, width, height, color, velocidadMax, imagensrc, direccion) {
    super(x, y, width, height, color, velocidadMax, imagensrc, direccion)
  }

  mover(tecla){
	  if (teclasPulsadas.keypress.w) {
      this.direccion = "up";
  		this.velocidad = this.velocidadMax;
      this.y -= this.velocidad;
    } else if (teclasPulsadas.keypress.a) {
      this.direccion = "iz";
    	this.velocidad = this.velocidadMax;
      this.x -= this.velocidad;
    } else if (teclasPulsadas.keypress.s) {
      this.direccion = "ab";
    	this.velocidad = this.velocidadMax;
      this.y += this.velocidad;
    } else if (teclasPulsadas.keypress.d) {
      this.direccion = "de";
    	this.velocidad = this.velocidadMax;
      this.x += this.velocidad;
    }
  	
  }


}
