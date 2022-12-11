import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../interfaces/IPizza';

export const fetchPizza = createAsyncThunk(
	'pizzas/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IPizza[]>('');
			return response.data;
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
