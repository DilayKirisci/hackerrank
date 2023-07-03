function matchingStrings(strings, queries) {
	const rep = []; // for the collection
	// queries are stable => iteration through the repetation of strings
	for (let i = 0; i < queries.length; i++) {
		let num = 0; // it should be 0 after every iteration
		for (let j = 0; j < strings.length; j++) {
			if (queries[i] === strings[j]) {
				num++;
			}
		}
		rep.push(num);
	}
	return rep;
}
