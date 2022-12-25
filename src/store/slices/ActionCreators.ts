import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import checkForSavedPizzas from '../../helpers/checkForSavedPizzas';
import getSortedTypes from '../../helpers/getSortedTypes';
import { IPizza } from '../../interfaces/IPizza';

export const fetchPizzas = createAsyncThunk(
	'get pizzas',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IPizza[]>(
				'http://localhost:5000/api/pizzas'
			);

			return {
				pizzas: checkForSavedPizzas(response.data),
				types: getSortedTypes(response.data),
			};
		} catch (error) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue(error);
			}
			return;
		}
	}
);
