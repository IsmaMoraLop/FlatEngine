/*Clase jugador por defecto*/

class Personaje extends Jugador{
  constructor(x, y, width, height, color, velocidadMax, imagensrc, direccion, saludMax, fuerza) {
    super(x, y, width, height, color, velocidadMax, imagensrc, direccion)
    this.salud = saludMax;
    this.saludMax = saludMax;
    this.coolDownDisparo = 0;
    this.coolDownDisparoMax = 30;
    this.fuerza = fuerza;
    this.disparando = false;
  }

  mover(tecla){
    this.updateCoolDown();
    var atravesables = []
    atravesables.push("Enemigo")
    if (teclasPulsadas.keypress.w) {
      this.direccion = "up";
      this.velocidad = this.velocidadMax;
      this.UPmove(atravesables);
      this.setImagen(graficos[0]);
    } else if (teclasPulsadas.keypress.a) {
      this.direccion = "iz";
      this.velocidad = this.velocidadMax;
      this.LFmove(atravesables);
      this.setImagen(graficos[3]);
    } else if (teclasPulsadas.keypress.s) {
      this.direccion = "ab";
      this.velocidad = this.velocidadMax;
      this.DWmove(atravesables);
      this.setImagen(graficos[2]);
    } else if (teclasPulsadas.keypress.d) {
      this.direccion = "de";
      this.velocidad = this.velocidadMax;
      this.RGmove(atravesables);
      this.setImagen(graficos[1]);     
    }

    if(this.x < 0){
      this.x += this.velocidad;
    }
    if(this.y < -20){
      this.y += this.velocidad;
    }
    if(this.x > 500){
      this.x -= this.velocidad;
    }
    if(this.y > 555){
      this.y -= this.velocidad;
    }
      if(this.disparando){
        if(this.coolDownDisparo >= this.coolDownDisparoMax){
          var xpr = this.x;
          var ypr = this.y;
          switch(this.direccion){
            case "de": xpr = this.x+11;ypr = this.y+22;break;
            case "iz": xpr = this.x-11;ypr = this.y+22;break;
            case "up": xpr = this.x+22;ypr = this.y-11;break;
            case "ab": xpr = this.x+26;ypr = this.y+11;break;
          }

          var proyectil = new Proyectil(xpr, ypr, 50, 3, "yellow", 50, graficos[6], this.direccion, this.getFuerza());
          proyectil.setSolido(true);
          playAudio(0);
          objetos.push(proyectil);
          this.disparoDisponible = false;
          this.coolDownDisparo = 0;
        }
      }
  	if (teclasPulsadas.keypress.space) {
      if(this.disparando){
        this.disparando = false;
        changeKeypress(" ", false);
      }else{
        this.disparando = true;
        changeKeypress(" ", false);
      }
    }	
    
  }

  updateCoolDown(){
    if(this.coolDownDisparo < this.coolDownDisparoMax){
       this.coolDownDisparo = this.coolDownDisparo + 1;
    }
  }

  getDisparoDisponible(){
    return this.disparoDisponible
  }
  setDisparoDisponible(disparoDisponible){
    this.disparoDisponible = disparoDisponible
  }

  getSalud(){
    return this.salud
  }
  setSalud(salud){
    this.salud = salud
  }

  getFuerza(){
    return this.fuerza
  }
  setFuerza(fuerza){
    this.fuerza = fuerza
  }

  sumarSalud(salud){
    this.salud = this.salud + salud
    if(this.salud > this.saludMax){
      this.salud = this.saludMax
    }
  }

}
