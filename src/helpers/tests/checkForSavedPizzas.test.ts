import { IPizza } from '../../interfaces/IPizza';
import checkForSavedPizzas from '../checkForSavedPizzas';

const pizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Б',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое', 'традиционное'],
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

const localStoragePizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Б',
		rating: 3,
		dough: 'тонкое',
		size: '26',
		types: ['мясная'],
		possibleDoughs: ['тонкое', 'традиционное'],
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
		dough: 'традиционное',
		size: '30',
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

const localStorageWithLowerPizzas: IPizza[] = [
	{
		_id: '3',
		currentPrice: 200,
		image: 'http://google.com/image2',
		title: 'В',
		rating: 5,
		dough: 'традиционное',
		size: '30',
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

const combinedPizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'http://google.com/image1',
		title: 'Б',
		rating: 3,
		types: ['мясная'],
		possibleDoughs: ['тонкое', 'традиционное'],
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
		dough: 'традиционное',
		size: '30',
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

describe('Check for saved pizzas into the localStorage and then set dough and size', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Performance with empty storage', () => {
		const checkedPizzas = checkForSavedPizzas(pizzas);
		expect(checkedPizzas).toHaveLength(3);
		expect(checkedPizzas).toStrictEqual(pizzas);
	});

	it('With storage where pizzas have been edited', () => {
		localStorage.pizzas = JSON.stringify(localStoragePizzas);
		const checkedPizzas = checkForSavedPizzas(pizzas);
		expect(checkedPizzas).toHaveLength(3);
		expect(checkedPizzas).toStrictEqual(localStoragePizzas);
	});

	it('With storage where pizzas count lower than default pizzas', () => {
		localStorage.pizzas = JSON.stringify(localStorageWithLowerPizzas);
		const checkedPizzas = checkForSavedPizzas(pizzas);
		expect(checkedPizzas).toHaveLength(3);
		expect(checkedPizzas).toStrictEqual(combinedPizzas);
	});
});
