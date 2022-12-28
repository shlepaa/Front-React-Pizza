import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChosenPizza } from '../../../interfaces/IChosenPizza';

export interface IUserState {
	pizzas: IChosenPizza[];
}

export const initialState: IUserState = {
	pizzas: localStorage.chosenPizzas
		? JSON.parse(localStorage.chosenPizzas)
		: [],
};

export const pizzasSlice = createSlice({
	name: 'pizzaz',
	initialState,
	reducers: {
		addPizza: (state, action: PayloadAction<IChosenPizza>) => {
			if (action.payload.title) {
				state.pizzas = [...state.pizzas, action.payload];
			}
		},
		reloadPizzas: (state, action: PayloadAction<IChosenPizza[]>) => {
			state.pizzas = action.payload;
		},
		clearPizzas: (state) => {
			state.pizzas = [];
			localStorage.chosenPizzas = [];
		},
	},
});

export default pizzasSlice.reducer;

export const { addPizza, reloadPizzas, clearPizzas } = pizzasSlice.actions;
