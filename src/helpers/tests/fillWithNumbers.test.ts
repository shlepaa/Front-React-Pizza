import fillWithNumbers from '../fillWithNumbers';

describe('Get filled array with numbers', () => {
	it('Filled array', () => {
		const numbers = fillWithNumbers(42);
		expect(numbers).toHaveLength(42);
	});

	it('Empty array', () => {
		const numbers = fillWithNumbers(0);
		expect(numbers).toHaveLength(0);
	});
});
