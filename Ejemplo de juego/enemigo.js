class Enemigo extends Entidad {

  constructor(x, y, width, height, color, velocidadMax, imagensrc, direccion, salud, fuerza, jugador) {
    super(x, y, width, height, color, velocidadMax, imagensrc, direccion);
    this.jugador = jugador;
    this.fuerza = fuerza;
    this.salud = salud;
    this.hitCoolDown = 0;
    this.hitAvaliable = false;
  }

  mover(){
  	var x = this.jugador.getX();
  	var y = this.jugador.getY();
    var atravesables = []
    atravesables.push("Personaje")
  	if(this.x < x){
  		this.velocidad = this.velocidadMax
  		this.RGmove(atravesables);
  	}
  	if(this.y < y){
  		this.velocidad = this.velocidadMax;
  		this.DWmove(atravesables);
  	}
  	if(this.x > x){
  		this.velocidad = this.velocidadMax
  		this.LFmove(atravesables);
  	}
  	if(this.y > y){
  		this.velocidad = this.velocidadMax
  		this.UPmove(atravesables);
  	}
    if(this.hitCoolDown == 40){
      this.hitAvaliable = true
    }else{
      this.hitCoolDown++;
    }
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

  isHitAvaliable(){
    return this.hitAvaliable
  }
  setHitAvaliable(hitAvaliable){
    this.hitAvaliable = hitAvaliable
  }
  setHitCoolDown(hitCoolDown){
    this.hitCoolDown = hitCoolDown;
  }
}