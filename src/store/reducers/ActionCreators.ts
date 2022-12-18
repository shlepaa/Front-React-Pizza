import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../interfaces/IPizza';

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IPizza[]>(
				'http://localhost:5000/api/pizzas'
			);

			const allPizzaTypes = response.data.map((p) => p.types).flat();
			const sortedTypes: string[] = [];
			allPizzaTypes.forEach((p) => {
				if (!sortedTypes.includes(p)) {
					sortedTypes.push(p);
				}
			});

			const checkForSavedPizzas = (): IPizza[] => {
				if (localStorage.pizzas) {
					return response.data.map((fetchPizza) => {
						const replacementPizza: IPizza = JSON.parse(
							localStorage.pizzas
						).find(
							(pizza: IPizza) => fetchPizza.title === pizza.title
						);
						if (replacementPizza) {
							return replacementPizza;
						}
						return fetchPizza;
					});
				}
				return response.data;
			};

			return {
				pizzas: checkForSavedPizzas(),
				types: sortedTypes,
			};
		} catch (error) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue(
					`Не удалось загрузить пиццы ${error.message}`
				);
			}
			return;
		}
	}
);
