const setEnding = (word: string): string => {
	if (!word) {
		return word;
	}
	const firstToUpper = word[0]?.toUpperCase() + word.slice(1, word.length);
	const lastChars = `${firstToUpper[firstToUpper.length - 2]}${
		firstToUpper[firstToUpper.length - 1]
	}`;

	let correctedWord = '';
	if (lastChars === 'ая') {
		correctedWord = firstToUpper.slice(0, firstToUpper.length - 2) + 'ие';
	} else {
		correctedWord = firstToUpper;
	}
	if (lastChars === 'ая' && firstToUpper[firstToUpper.length - 3] !== 'к') {
		correctedWord = firstToUpper.slice(0, firstToUpper.length - 2) + 'ые';
	}

	return correctedWord;
};

export default setEnding;
