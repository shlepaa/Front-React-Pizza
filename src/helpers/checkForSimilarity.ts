const checkForSimilarity = (string: string, search: string): boolean => {
	return string
		.toLowerCase()
		.split(' ')
		.join('')
		.includes(search.toLowerCase().split(' ').join(''));
};

export default checkForSimilarity;
