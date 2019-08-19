function inArray(array1,array2){
	//...
	// var arr = [];
	// let reg;
	// for(var i = 0; i < array1.length; i++) {
	// 	reg = new RegExp(array1[i]);
	// 	if (reg.test(array2) && reg != '/(?:)/') 
	// 		arr.push(reg.exec(array2)[0])
	// }
	// return arr.sort();

	// clever way
	return array1.filter(a1 => array2.some(a2 => a2.indexOf(a1) > -1)).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2));