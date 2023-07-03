function birthday(s, d, m) {
	let count = 0;
	// each iterattion should be upto s.length-m or it fails -> not possible
	for (let i = 0; i <= s.length - m; i++) {
		let sum = 0;
		// inner loop should start from i to i +m for the cond. to met
		for (let j = i; j < i + m; j++) {
			sum += s[j];
		}
		if (sum === d) {
			count++;
		}
	}

	return count;
}
