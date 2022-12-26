import { IChosenPizza } from '../../../interfaces/IChosenPizza';
import { IPizza } from '../../../interfaces/IPizza';

export const defaultPizzas: IPizza[] = [
	{
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
		dough: 'традиционное',
		title: 'Пицца',
		count: 3,
		size: '30',
		image: 'http://google/image',
		price: 200,
	},
	{
		dough: 'тонкое',
		title: 'Пицца',
		count: 1,
		size: '26',
		image: 'http://google/image',
		price: 100,
	},
];
