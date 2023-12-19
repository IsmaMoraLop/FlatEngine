sonidos = []

function initAudio(){
	for(var i = 0;i<sonidosFiles.length;i++){
		sonidos.push(new Audio(sonidosFiles[i]));
	}
}

function playAudio(index){
	sonidos[index].play()	
}

initAudio()