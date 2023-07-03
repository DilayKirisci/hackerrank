function pangrams(s) {
	const lowerCaseString = s.toLowerCase();

	// Create a Set to track the unique letters found in the sentence => set creates the set to compare instead of writing each letter
	const uniqueLetters = new Set();

	// Iterate over each character in the string
	for (let i = 0; i < lowerCaseString.length; i++) {
		const char = lowerCaseString[i];

		// Check if the character is a letter (a-z)
		if (char >= "a" && char <= "z") {
			uniqueLetters.add(char);
		}
	}

	// Check if the number of unique letters is equal to 26  => the number of letters in the English alphabet
	if (uniqueLetters.size === 26) {
		return "pangram";
	} else {
		return "not pangram";
	}
}
