function colisionan(objeto1, objeto2) {
  var rect1 = {
    x: objeto1.getX(),
    y: objeto1.getY(),
    w: objeto1.getWidth(),
    h: objeto1.getHeight(),
  };
  var rect2 = {
    x: objeto2.getX(),
    y: objeto2.getY(),
    w: objeto2.getWidth(),
    h: objeto2.getHeight(),
  };
  if (
    rect1.x + rect1.w > rect2.x &&
    rect1.x < rect2.x + rect2.w
  ) {
    if (
      rect1.y + rect1.h > rect2.y &&
      rect1.y < rect2.y + rect2.h
    ) {
      return true;
    }
  }
  return false;
}

function isChoqueSolido(objeto, excepciones){  
  isSolido = false
  for(var i = 0;i<objetos.length;i++){
    
    if(!(objetos[i] instanceof Texto) && (objetos[i] != objeto)){
      if(colisionan(objeto, objetos[i])){
        if(objeto.isSolido() && objetos[i].isSolido()){
          if(excepciones != null){
            if(excepciones.includes(objetos[i].constructor.name)){              
              isSolido = false
            }else{
              isSolido = true
            }
          }
        }
      }
    }
  }
  return isSolido;
}

