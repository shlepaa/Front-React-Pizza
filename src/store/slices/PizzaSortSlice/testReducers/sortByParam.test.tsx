import { IPizza } from '../../../../interfaces/IPizza';
import { TypeParams } from '../../../../interfaces/TypeParams';
import pizzasSortReducer, { IUserState, sortByParam } from '../PizzaSortSlice';

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

const sortedByPricePizzas: IPizza[] = [
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
];

const sortedByRatingPizzas: IPizza[] = [
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

const sortedByAlphabetPizzas: IPizza[] = [
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

const sortByPrice: TypeParams = {
	title: 'цене',
	param: 'currentPrice',
};

const sortByRating: TypeParams = {
	title: 'популярности',
	param: 'rating',
};

const sortByAlphabet: TypeParams = {
	title: 'алфавиту',
	param: 'title',
};

const initialState: IUserState = {
	isLoading: false,
	error: false,
	pizzas: startedPizzas,
	pizzasBackup: startedPizzas,
	allPizzaTypes: ['тестовая'],
	currentType: 'все',
	searchValue: '',
	isSortedToDown: false,
	currentSortParam: {
		title: 'популярности',
		param: 'rating',
	},
};

describe('Set pizzas according to their params', () => {
	it('Sort by price', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState },
			sortByParam(sortByPrice)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByPricePizzas);
		expect(changedState.pizzasBackup).toStrictEqual(sortedByPricePizzas);
		expect(changedState.currentSortParam).toStrictEqual(sortByPrice);
	});

	it('Sort by rating', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState },
			sortByParam(sortByRating)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByRatingPizzas);
		expect(changedState.pizzasBackup).toStrictEqual(sortedByRatingPizzas);
		expect(changedState.currentSortParam).toStrictEqual(sortByRating);
	});

	it('Sort by alphabet', () => {
		const changedState = pizzasSortReducer(
			{ ...initialState },
			sortByParam(sortByAlphabet)
		);
		expect(changedState.pizzas).toStrictEqual(sortedByAlphabetPizzas);
		expect(changedState.pizzasBackup).toStrictEqual(sortedByAlphabetPizzas);
		expect(changedState.currentSortParam).toStrictEqual(sortByAlphabet);
	});
});
