import { IPizza } from '../../../../interfaces/IPizza';
import pizzaSortReducer, { IUserState, setParam } from '../PizzaSortSlice';

const startedPizzas: IPizza[] = [
	{
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца мясная',
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
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Пицца сырная',
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

const changedPizzas: IPizza[] = [
	{
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца мясная',
		rating: 1,
		dough: 'традиционное',
		size: '30',
		types: ['мясная'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
			{
				size: '30',
				price: 200,
			},
			{
				size: '40',
				price: 300,
			},
		],
	},
];

const combinedStartedAndChangedPizzas: IPizza[] = [
	{
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Пицца мясная',
		rating: 1,
		dough: 'традиционное',
		size: '30',
		types: ['мясная'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
			{
				size: '30',
				price: 200,
			},
			{
				size: '40',
				price: 300,
			},
		],
	},
	{
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'Пицца сырная',
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

describe('Set started pizzas and then replace started pizzas with changed(dough, size) pizzas and write new props into the pizzasBackup', () => {
	it('Change properties in one pizza and then replace it', () => {
		const changedState = pizzaSortReducer(
			{ ...initialState },
			setParam(changedPizzas)
		);
		expect(changedState.pizzas).toHaveLength(1);
		expect(changedState.pizzasBackup).toHaveLength(2);
		expect(changedState.pizzas).toStrictEqual(changedPizzas);
		expect(changedState.pizzasBackup).toStrictEqual(
			combinedStartedAndChangedPizzas
		);
	});

	it('With empty param', () => {
		const changedState = pizzaSortReducer(
			{ ...initialState },
			setParam([])
		);
		expect(changedState.pizzas).toHaveLength(0);
		expect(changedState.pizzasBackup).toHaveLength(2);
		expect(changedState.pizzas).toStrictEqual([]);
		expect(changedState.pizzasBackup).toStrictEqual(startedPizzas);
	});
});
