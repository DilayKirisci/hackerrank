function timeConversion(s) {
	const period = s.slice(-2); // Extract last two characters for PM/AM
	let conversion = parseInt(s.slice(0, 2)); // Convert the hours part to an integer
	const slice = s.slice(2, 8); // Extract the remaining characters

	if (period === "PM") {
		if (conversion !== 12) {
			conversion += 12; // Add 12 hours unless it's already 12 PM
		}
	} else if (period === "AM" && conversion === 12) {
		conversion = 0; // Special case: 12 AM should be converted to 0
	}

	const result = `${conversion.toString().padStart(2, "0")}${slice}`; // Convert back to string and ensure leading zeros
	console.log(result);
	return result;
}
