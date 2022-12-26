import checkForSimilarity from '../checkForSimilarity';

const string = 'Some test text without meaning';

describe('Search word in the string', () => {
	it('Search for test word', () => {
		const isFound = checkForSimilarity(string, 'test');
		expect(isFound).toBe(true);
	});

	it('Empty request should be true', () => {
		const isFound = checkForSimilarity(string, '');
		expect(isFound).toBe(true);
	});

	it('Space between chars', () => {
		const isFound = checkForSimilarity(string, 't e s t');
		expect(isFound).toBe(true);
	});

	it('Search string in the string', () => {
		const isFound = checkForSimilarity(string, 'test text');
		expect(isFound).toBe(true);
	});
});
