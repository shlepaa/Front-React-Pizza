import { IChosenPizza } from '../../../interfaces/IChosenPizza';
import { IPizza } from '../../../interfaces/IPizza';

export const defaultPizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'image',
		possibleDoughs: ['тонкое', 'традиционное', 'без теста'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца',
		types: ['мясная'],
	},
	{
		_id: '2',
		currentPrice: 200,
		image: 'image',
		possibleDoughs: ['тонкое', 'традиционное'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца другая',
		types: ['сырная'],
	},
];

export const changedSizePizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'image',
		size: '30',
		possibleDoughs: ['тонкое', 'традиционное', 'без теста'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца',
		types: ['мясная'],
	},
	{
		_id: '2',
		currentPrice: 200,
		image: 'image',
		possibleDoughs: ['тонкое', 'традиционное'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца другая',
		types: ['сырная'],
	},
];

export const changedSizeAndDoughPizzas: IPizza[] = [
	{
		_id: '1',
		currentPrice: 100,
		image: 'image',
		size: '30',
		dough: 'традиционное',
		possibleDoughs: ['тонкое', 'традиционное', 'без теста'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '26',
				price: 100,
			},
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца',
		types: ['мясная'],
	},
	{
		_id: '2',
		currentPrice: 200,
		image: 'image',
		possibleDoughs: ['тонкое', 'традиционное'],
		rating: 5,
		sizesAndPrices: [
			{
				size: '30',
				price: 200,
			},
		],
		title: 'Пицца другая',
		types: ['сырная'],
	},
];

export const chosenPizzas: IChosenPizza[] = [
	{
		id: '1',
		dough: 'традиционное',
		title: 'Пицца',
		count: 2,
		size: '30',
		image: 'http://google/image',
		price: 200,
	},
];

export const oneMoreChosenPizzas: IChosenPizza[] = [
	{
		id: '1',
		dough: 'традиционное',
		title: 'Пицца',
		count: 3,
		size: '30',
		image: 'http://google/image',
		price: 200,
	},
];

export const differentSizeAndDoughChosenPizzas: IChosenPizza[] = [
	{
		id: '1',
		dough: 'традиционное',
		title: 'Пицца',
		count: 3,
		size: '30',
		image: 'http://google/image',
		price: 200,
	},
	{
		id: '1',
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '26',
		image: 'http://google/image',
		price: 100,
	},
];
