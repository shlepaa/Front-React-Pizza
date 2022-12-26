import setEnding from '../setEnding';

describe('Get word and then set correct ending depending on the condition', () => {
	it('With vegetarian word', () => {
		const correctedWord = setEnding('вегетарианская');
		expect(correctedWord).toBe('Вегетарианские');
	});

	it('With meat word', () => {
		const correctedWord = setEnding('мясная');
		expect(correctedWord).toBe('Мясные');
	});

	it('With different word', () => {
		const correctedWord = setEnding('тест');
		expect(correctedWord).toBe('Тест');
	});

	it('With empty word', () => {
		const correctedWord = setEnding('');
		expect(correctedWord).toBe('');
	});
});
