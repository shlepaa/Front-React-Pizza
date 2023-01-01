import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import checkForSavedPizzas from '../../helpers/checkForSavedPizzas';
import { PizzasAndTypes } from '../../interfaces/PizzasAndTypes';

export const fetchPizzas = createAsyncThunk(
	'get pizzas',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<PizzasAndTypes>(
				'http://45.8.99.189:5000/api/pizzas/'
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
