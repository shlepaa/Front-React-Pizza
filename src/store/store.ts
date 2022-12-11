import { configureStore } from '@reduxjs/toolkit';
import pizzaSortReducer from './reducers/PizzaSortSlice';
import pizzasReducer from './reducers/PizzasSlice';

export const store = configureStore({
	reducer: {
		pizzaSortReducer,
		pizzasReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
