function lonelyinteger(a) {
	const lonely = a.filter((x, index) => a.indexOf(x) === a.lastIndexOf(x));
	return lonely;
}

// it the first and the last occurrences are the same-> the int is single
