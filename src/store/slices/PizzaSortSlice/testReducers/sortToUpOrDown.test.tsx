import { IPizza } from '../../../../interfaces/IPizza';
import pizzasSortReducer, {
	initialState,
	sortToUpOrDown,
} from '../PizzaSortSlice';

const sortedByPriceToDown: IPizza[] = [
	{
		_id: '1',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Б',
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
	{
		_id: '2',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'А',
		rating: 1,
		types: ['мясная'],
		possibleDoughs: ['тонкое'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
		],
	},
];

const sortedByPopularToUp: IPizza[] = [
	{
		_id: '2',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'А',
		rating: 1,
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
		_id: '1',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Б',
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

const sortedByAlphabetToUp: IPizza[] = [
	{
		_id: '2',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'А',
		rating: 1,
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
		_id: '1',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Б',
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

describe('Sort to up or down by using params', () => {
	it('Sort by price to down', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState, pizzas: sortedByPriceToDown },
			sortToUpOrDown(true)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByPriceToDown);
		expect(changedState.isSortedToDown).toBe(false);
	});

	it('Sort by popular to up', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: sortedByPriceToDown,
				currentSortParam: {
					title: 'популярности',
					param: 'rating',
				},
			},
			sortToUpOrDown(false)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByPopularToUp);
		expect(changedState.isSortedToDown).toBe(true);
	});

	it('Sort by alphabet to up', () => {
		const changedState = pizzasSortReducer(
			{
				...initialState,
				pizzas: sortedByPriceToDown,
				currentSortParam: {
					title: 'алфавиту',
					param: 'title',
				},
			},
			sortToUpOrDown(false)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByAlphabetToUp);
		expect(changedState.isSortedToDown).toBe(true);
	});
});
