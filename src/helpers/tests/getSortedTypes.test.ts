import { IPizza } from '../../interfaces/IPizza';
import getSortedTypes from '../getSortedTypes';

const pizzas: IPizza[] = [
	{
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

describe('Get all types of pizzas to be able to sort them by type', () => {
	it('Get all types', () => {
		const sortTypes = getSortedTypes(pizzas);
		expect(sortTypes).toHaveLength(3);
		expect(sortTypes.sort()).toEqual(['рыбная', 'мясная', 'сырная'].sort());
	});

	it('With empty', () => {
		const sortTypes = getSortedTypes([]);
		expect(sortTypes).toHaveLength(0);
		expect(sortTypes).toEqual([]);
	});
});
