function flippingBits(n) {
	let bi = n.toString(2);
	let converted = "";

	for (let i = bi.length; i < 32; i++) {
		bi = "0" + bi;
	}

	for (let i = 0; i < bi.length; i++) {
		converted += bi[i] === "1" ? "0" : "1";
	}

	return parseInt(converted, 2);
}
