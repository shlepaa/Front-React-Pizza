import { IPizza } from '../../../../interfaces/IPizza';
import pizzasSortReducer, { initialState, unset } from '../PizzaSortSlice';

const startedPizzas: IPizza[] = [
	{
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Б',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
	{
		currentPrice: 300,
		image: 'http://google.com/image1',
		title: 'А',
		rating: 1,
		types: ['рыбная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 300,
			},
		],
	},
	{
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'В',
		rating: 5,
		types: ['мясная', 'сырная'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{
				size: '26',
				price: 200,
			},
			{
				size: '30',
				price: 400,
			},
		],
	},
];

describe('Reset current type and main pizzas, drop seacrh value', () => {
	it('Unset', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzasBackup: startedPizzas,
				searchValue: 'test',
				currentType: 'мясная',
			},
			unset()
		);
		expect(changedState.pizzas).toStrictEqual(startedPizzas);
		expect(changedState.searchValue).toBe('');
		expect(changedState.currentType).toBe('все');
	});

	it('With empty pizzasBackup', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				searchValue: 'test text',
				currentType: 'сырная',
				pizzasBackup: [],
				pizzas: startedPizzas,
			},
			unset()
		);
		expect(changedState.pizzas).toStrictEqual([]);
		expect(changedState.searchValue).toBe('');
		expect(changedState.currentType).toBe('все');
	});
});
