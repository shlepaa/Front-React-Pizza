import { IPizza } from '../../../../interfaces/IPizza';
import pizzasSortReducer, { initialState, sortByType } from '../PizzaSortSlice';

const startedPizzas: IPizza[] = [
	{
		_id: '1',
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
		_id: '2',
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
		_id: '3',
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

const sortedByMeatPizzas: IPizza[] = [
	{
		_id: '1',
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
		_id: '3',
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

const sortedByCheesePizzas: IPizza[] = [
	{
		_id: '3',
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

describe('Set pizzas according to their types and drop search value', () => {
	it('Sort by meat', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
				searchValue: 'test',
			},
			sortByType('мясная')
		);
		expect(changedState.pizzas).toStrictEqual(sortedByMeatPizzas);
		expect(changedState.pizzasBackup).toBe(startedPizzas);
		expect(changedState.currentType).toBe('мясная');
		expect(changedState.searchValue).toBe('');
	});

	it('Sort by cheese', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: startedPizzas,
				pizzasBackup: startedPizzas,
				searchValue: '42',
			},
			sortByType('сырная')
		);
		expect(changedState.pizzas).toStrictEqual(sortedByCheesePizzas);
		expect(changedState.pizzasBackup).toBe(startedPizzas);
		expect(changedState.currentType).toBe('сырная');
		expect(changedState.searchValue).toBe('');
	});
});
