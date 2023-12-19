/*Clase jugador por defecto*/

class Proyectil extends Entidad{
  constructor(x, y, width, height, color, velocidadMax, imagensrc, direccion, fuerza) {
    super(x, y, width, height, color, velocidadMax, imagensrc, direccion);
    this.direccion = direccion;
    this.velocidad = velocidadMax;
    this.fuerza = fuerza;
    this.centrar();
  }

  mover(tecla){
    switch(this.direccion){
      case "de": this.x = this.x + this.velocidad;break;
      case "iz": this.x = this.x - this.velocidad;break;
      case "up": this.y = this.y - this.velocidad;break;
      case "ab": this.y = this.y + this.velocidad;break;
    }  	
    if(this.x > 2000){
      this.direccion = "del";
    }
    if(this.y > 2000){
      this.direccion = "del";
    }
    if(this.x < -100){
      this.direccion = "del"
    }
    if(this.y < -100){
      this.direccion = "del"
    }
  }

  getFuerza(){
    return this.fuerza
  }
  setFuerza(fuerza){
    this.fuerza = fuerza
  }
  centrar(){
     if(this.direccion == "up" || this.direccion == "ab"){
       var anchura = this.width;
       this.width = this.height;
       this.height = anchura
     }
  }

}
