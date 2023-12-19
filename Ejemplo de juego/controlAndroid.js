

class ClickAndHold{
	constructor(target, key, callback){
		this.target = target;
		this.callback = callback;
		this.isHeld = false;
		this.activeHoldTimeoutId = null;
		this.key = key;

		["mousedown", "touchstart"].forEach(type => {
			this.target.addEventListener(type, this._onHoldStart.bind(this));
		});

		["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(type => {
			this.target.addEventListener(type, this._onHoldEnd.bind(this));
		});

	}

	_onHoldStart(){
		this.isHeld = true;
		changeKeypress(this.key, true);
		/*this.activeHoldTimeOutId = setTimeout(() => {
			if(this.isHeld){
				this.callback();
			}
		}, 1000);*/
	}

	_onHoldEnd(){
		this.isHeld = false;
		changeKeypress(this.key, false);
		clearTimeout(this.activeHoldTimeoutId);
	}
}

const derechaBoto = document.getElementById("derecha");
const izquierdaBoto = document.getElementById("izquierda");
const arribaBoto = document.getElementById("arriba");
const abajoBoto = document.getElementById("abajo");

new ClickAndHold(derechaBoto, "d", () => {
	
})
new ClickAndHold(izquierdaBoto, "a", () => {
	
})

new ClickAndHold(arribaBoto, "w", () => {
	
})
new ClickAndHold(abajoBoto, "s", () => {
	
})