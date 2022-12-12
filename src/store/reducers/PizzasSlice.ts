import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChosenPizza } from '../../interfaces/IChosenPizza';

interface IUserState {
	pizzas: IChosenPizza[];
}

export const initialState: IUserState = {
	pizzas: localStorage.pizzas ? JSON.parse(localStorage.pizzas) : [],
};

export const pizzasSlice = createSlice({
	name: 'pizzaz',
	initialState,
	reducers: {
		addPizza: (state, action: PayloadAction<IChosenPizza>) => {
			state.pizzas = [...state.pizzas, action.payload];
		},
		reloadPizzas: (state, action: PayloadAction<IChosenPizza[]>) => {
			state.pizzas = action.payload;
		},
	},
});

export default pizzasSlice.reducer;
