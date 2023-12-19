var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.mozImageSmoothingEnabled = ctx.msImageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = ctx.imageSmoothingEnabled = false;

function draw(objeto){
    const imagen = objeto.getImagen()
    if(imagen != null){
        imagen.onload = ctx.drawImage(imagen, objeto.getX(), objeto.getY(), objeto.getWidth(), objeto.getHeight());

    }else{
        ctx.fillStyle = objeto.getColor()
        ctx.fillRect(objeto.getX(), objeto.getY(), objeto.getWidth(), objeto.getHeight())
    }
}

function dibujar(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    //dibujar objetos del escenario
    for(let i = 0;i<objetos.length;i++){
    	const objeto = objetos[i]
        if(objeto.isVisible()){
            draw(objeto)
        }
    
    }
    //dibujar UI
    for(let j = 0;j<uiElements.length;j++){
        const uiEl = uiElements[j]
        if(uiEl instanceof Texto){
            ctx.fillStyle = uiEl.getColor()
            ctx.font = uiEl.getFuente()
            ctx.fillText(uiEl.getTexto(), uiEl.getX(), uiEl.getY())
        }else{
            if(uiEl.isVisible()){
                draw(uiEl)
            }
        }
    }


}





