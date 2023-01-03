import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import checkForSavedPizzas from '../../helpers/checkForSavedPizzas';
import { PizzasAndTypes } from '../../interfaces/PizzasAndTypes';
export const controller = new AbortController();

export const fetchPizzas = createAsyncThunk(
	'get pizzas',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<PizzasAndTypes>(
				'https://reactpizzas.ru:5000/api/pizzas',
				{
					signal: controller.signal,
				}
			);

			return {
				pizzas: checkForSavedPizzas(response.data.pizzas),
				types: response.data.types,
			};
		} catch (error) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue(error);
			}
			return;
		}
	}
);
