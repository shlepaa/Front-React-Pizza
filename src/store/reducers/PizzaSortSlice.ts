import { createSlice } from '@reduxjs/toolkit';
import { IPizza } from '../../interfaces/IPizza';

interface UserState {
	isLoading: boolean;
	error: string;
	pizzas: IPizza[];
	pizzasBackup: IPizza[];
}

export const initialState: UserState = {
	isLoading: false,
	pizzas: [
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Пицца 4 сыра',
			price: 495,
			rating: 4,
			types: ['вегетарианская', 'сырная'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Колбасная вечеринка',
			price: 525,
			rating: 5,
			types: ['мясная', 'гриль', 'острая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Сладкая пицца',
			price: 461,
			rating: 2,
			types: ['сладкая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Чизбургер-пицца',
			price: 395,
			rating: 3,
			types: ['вегетарианская', 'сырная'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Гамбургер-пицца',
			price: 295,
			rating: 5,
			types: ['мясная', 'гриль', 'острая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Губка-боб',
			price: 395,
			rating: 1,
			types: ['закрытая'],
		},
	],
	pizzasBackup: [
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Пицца 4 сыра',
			price: 495,
			rating: 4,
			types: ['вегетарианская', 'сырная'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Колбасная вечеринка',
			price: 525,
			rating: 5,
			types: ['мясная', 'гриль', 'острая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Сладкая пицца',
			price: 461,
			rating: 2,
			types: ['сладкая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Чизбургер-пицца',
			price: 395,
			rating: 3,
			types: ['вегетарианская', 'сырная'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Гамбургер-пицца',
			price: 295,
			rating: 5,
			types: ['мясная', 'гриль', 'острая'],
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Губка-боб',
			price: 395,
			rating: 1,
			types: ['закрытая'],
		},
	],
	error: '',
};

export const pizzaSortSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		sortPrice: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.price > b.price ? 1 : -1
			);
		},
		sortAlphabet: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.title > b.title ? 1 : -1
			);
		},
		sortRating: (state) => {
			state.pizzas = state.pizzas.sort((a, b) =>
				a.rating > b.rating ? 1 : -1
			);
		},
		sortMeat: (state) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes('мясная')
			);
		},
		sortVegetables: (state) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes('вегетарианская')
			);
		},
		sortGrill: (state) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes('гриль')
			);
		},
		sortSpicy: (state) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes('острая')
			);
		},
		sortClosed: (state) => {
			state.pizzas = state.pizzasBackup.filter((p) =>
				p.types.includes('закрытая')
			);
		},
		unset: (state) => {
			state.pizzas = state.pizzasBackup;
		},
	},
});

export default pizzaSortSlice.reducer;
