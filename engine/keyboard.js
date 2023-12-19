
function createKeyboardListener() {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);

    function handleKeydown(event) {
        const keyPressed = event.key;
        changeKeypress(keyPressed, true);
    }

    function handleKeyup(event) {
        const keyUp = event.key;
        changeKeypress(keyUp, false);
    }
}
const teclasPulsadas = {
        
    keypress: {
        a: false,//a
        w: false,//w
        d: false,//d
        s: false,//s
        space: false,//space
    }
}
function changeKeypress(key, press) {
    if(key == " "){
        teclasPulsadas.keypress["space"] = press
    }
    if(teclasPulsadas.keypress[key] !== undefined){
        teclasPulsadas.keypress[key] = press;
    } 
}
function pressKey(tecla){
    changeKeypress(tecla, true);
}
function releaseKey(tecla){
    changeKeypress(tecla, false);
}
createKeyboardListener();

