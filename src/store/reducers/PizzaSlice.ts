import { createSlice } from '@reduxjs/toolkit';
import { IPizza } from '../../interfaces/IPizza';

interface UserState {
	isLoading: boolean;
	error: string;
	pizzas: IPizza[];
}

const initialState: UserState = {
	isLoading: false,
	pizzas: [
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Пицца 4 сыра',
			price: 495,
			rating: 4,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Колбасная вечеринка',
			price: 525,
			rating: 5,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Сладкая пицца',
			price: 461,
			rating: 2,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Чизбургер-пицца',
			price: 395,
			rating: 3,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Гамбургер-пицца',
			price: 295,
			rating: 5,
		},
		{
			image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
			title: 'Губка-боб',
			price: 395,
			rating: 1,
		},
	],
	error: '',
};

const pizzaSlice = createSlice({
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
	},
});

export default pizzaSlice.reducer;
