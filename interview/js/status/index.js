function Light () {
	this.status = "off"
	this.button = null
	this.init()
}
Light.prototype.init = function() {
	this.button = document.createElement('button');
	this.button.innerText = '关';
	document.body.appendChild(this.button);
	this.button.onclick = () => {
		this.buttonPress()
	};
}
Light.prototype.buttonPress = function() {
	if (this.status == 'on') {
		console.log("开灯");
		this.status = "off";
		this.button.innerText = '关';
	}
	else {
		console.log("关灯");
		this.status = "on";
		this.button.innerText = '开';
	}
}