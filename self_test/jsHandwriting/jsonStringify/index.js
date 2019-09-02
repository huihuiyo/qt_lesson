function normalFn (obj, type, step) {
	if (/string|undefined|function/.test(type)) {
		if (step === 1) obj = '"' + "'" + obj + "'" +'"';
		if (step === 2) obj = "'" + obj + "'";
	}
	return String(obj);
}
function objFn (obj) {
	let json = [];
	let arrType = Array.isArray(obj);
	for (let key in obj) {
		let val = obj[key];
		let type = typeof val;
		val = type !== 'object' ? normalFn(val, type, 2) : objFn(val);
		json.push((arrType ? "" : "'" + key + "': ") + String(val));
	}
	return (arrType ? '"[' : '"{') + String(json) + (arrType ? ']"' : '}"');
}

function jsonStringify(obj) {
	let type = typeof obj;
	return type !== 'object' ? normalFn(obj, type, 1) : objFn(obj);
}

console.log(jsonStringify({x: 5}));
console.log(jsonStringify([1, "false", false]));
console.log(jsonStringify("true"));