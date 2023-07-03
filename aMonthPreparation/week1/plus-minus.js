function plusMinus(arr) {
	let negatives = 0;
	let positives = 0;
	let zero = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positives++;
		} else if (arr[i] < 0) {
			negatives++;
		} else {
			zero++;
		}
	}

	const num1 = (positives / arr.length).toFixed(6);
	const num2 = (negatives / arr.length).toFixed(6);
	const num3 = (zero / arr.length).toFixed(6);

	console.log(num1);
	console.log(num2);
	console.log(num3);
}
