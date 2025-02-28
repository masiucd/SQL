export function countAdjacentPairs(searchString: string) {
	let words = searchString
		.toLowerCase()
		.split(" ");
	let count = 0;
	while (words.length > 0) {
		let word = words.shift();
		if (word === words[0] && word !== words[1]) {
			count++;
		}
	}
	return count;
}
