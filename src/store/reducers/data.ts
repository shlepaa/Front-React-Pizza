import { IPizza } from '../../interfaces/IPizza';

export const fetchPizzas: IPizza[] = [
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/50555f951a6d4fd4ac0088c099eb3769_292x292.webp',
		title: 'Пицца 4 сыра',
		currentPrice: 625,
		rating: 4,
		types: ['вегетарианская', 'сырная'],
		possibleDoughs: ['тонкое', 'традиционное', 'шаурма'],
		sizesAndPrices: [
			{ size: '26', price: 625 },
			{ size: '30', price: 860 },
			{ size: '50', price: 1495 },
		],
	},
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
		title: 'Колбасная вечеринка',
		currentPrice: 225,
		rating: 5,
		types: ['мясная', 'закрытая', 'острая'],
		possibleDoughs: ['традиционное', 'шаурма'],
		sizesAndPrices: [
			{ size: '1/2 26', price: 225 },
			{ size: '30', price: 530 },
			{ size: '50', price: 1030 },
		],
	},
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
		title: 'Сладкая пицца',
		currentPrice: 461,
		rating: 2,
		types: ['сладкая', 'праздничная'],
		possibleDoughs: ['тонкое', 'еще тоньше'],
		sizesAndPrices: [
			{ size: '30', price: 461 },
			{ size: '40', price: 700 },
		],
	},
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e379c72af6c54f81b7b4e6ffbb2b1729_292x292.webp',
		title: 'Чизбургер-пицца',
		currentPrice: 395,
		rating: 3,
		types: ['вегетарианская', 'сырная', 'закрытая'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{ size: '26', price: 395 },
			{ size: '30', price: 650 },
			{ size: '40', price: 950 },
		],
	},
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d6c9f93ea37649ac923e9586c034a5a0_292x292.webp',
		title: 'Гамбургер-пицца',
		currentPrice: 295,
		rating: 4,
		types: ['мясная', 'гриль', 'острая'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{ size: '26', price: 295 },
			{ size: '40', price: 790 },
		],
	},
	{
		image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0c24c7c195574d7cae45c889bd8043fc_292x292.webp',
		title: 'Губка-боб',
		currentPrice: 395,
		rating: 1,
		types: ['закрытая', 'мокрая'],
		possibleDoughs: ['тонкое', 'традиционное'],
		sizesAndPrices: [
			{ size: '26', price: 395 },
			{ size: '30', price: 530 },
		],
	},
];
